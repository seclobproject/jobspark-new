import asyncHandler from "../Config/asyncHandler.js";
import Employee from "../Models/employeeModel.js";

import jwt from "jsonwebtoken";
import Job from "../Models/jobModel.js";

// Register new employee
export const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, phone, email, password } = req.body;

  const existingEmployee = await Employee.findOne({
    $or: [{ email }, { phone }],
  });

  if (existingEmployee) {
    res.status(401).json({ sts: "00", msg: "User already exists!" });
  } else {
    const newEmployee = await Employee.create({
      firstName,
      lastName,
      phone,
      email,
      password,
    });

    if (newEmployee) {
      res.status(201).json({
        firstName: newEmployee.firstName,
        lastName: newEmployee.lastName,
        phone: newEmployee.phone,
        email: newEmployee.email,
      });
    } else {
      res.status(401).json({ sts: "00", msg: "User registration failed!" });
    }
  }
});

// Login employee
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const employee = await Employee.findOne({ email });

  if (employee && (await employee.matchPassword(password))) {
    const token = jwt.sign(
      { employeeId: employee._id },
      "secret_of_jwt_for_jobspark_5959",
      {
        expiresIn: "365d",
      }
    );

    res.status(200).json({
      id: employee._id,
      firstName: employee.firstName,
      email: employee.email,
      token_type: "Bearer",
      access_token: token,
      sts: "01",
      msg: "Login Success",
    });
  } else {
    res.status(401).json({ sts: "00", msg: "Invalid credentials" });
  }
});

// Get jobs to employee based on skillset
export const getJobs = asyncHandler(async (req, res) => {
  const employeeId = req.employee._id;

  const employee = await Employee.findById(employeeId);

  if (employee) {
    const employeeSkills = employee.keySkills;
    const lowercasedSkills = employeeSkills.map((skill) => skill.toLowerCase());

    // Finding the jobs based on key skill priority
    const jobs = await Job.aggregate([
      {
        $addFields: {
          priority: {
            $size: {
              $setIntersection: [
                {
                  $map: {
                    input: "$keySkills",
                    as: "skill",
                    in: { $toLower: "$$skill" },
                  },
                },
                lowercasedSkills,
              ],
            },
          },
        },
      },
      {
        $sort: { priority: -1 },
      },
    ]);

    if (jobs) {
      res.status(201).json({
        jobs,
        sts: "01",
        msg: "Success",
      });
    } else {
      res.status(401).json({
        sts: "00",
        msg: "No jobs found!",
      });
    }
  } else {
    res.status(401).json({
      sts: "00",
      msg: "User not found. Make sure that you are logged in!",
    });
  }
});

// Apply for a job
export const applyForJob = asyncHandler(async (req, res) => {
  const employeeId = req.employee._id;

  const { appliedJobId } = req.body;

  const employee = await Employee.findById(employeeId);
  const jobApplying = await Job.findById(appliedJobId);


  if (employee) {
    employee.appliedJobs.map((jobs) => {
      if (jobs._id == appliedJobId) {
        res.status(401).json({
          sts: "00",
          msg: "You already applied for this job",
        });
      }
    });

    employee.appliedJobs.push(appliedJobId);

    const updatedEmployee = await employee.save();

    if (updatedEmployee) {
      // Add the employee to job
      jobApplying.peopleApplied.push(employee._id);
      const updatedJob = await jobApplying.save();

      if (updatedJob) {
        res.status(201).json({
          sts: "01",
          msg: "Success",
        });
      }
    } else {
      res.status(401).json({
        sts: "00",
        msg: "Some error occured!",
      });
    }
  } else {
    res.status(401).json({
      sts: "00",
      msg: "User not found. Make sure that you are logged in!",
    });
  }
});


// export const applyJob = asyncHandler(async (req, res) => {
//   const employeeId = req.employee._id;
//   console.log(employeeId);
//   const jobId = req.params.id;
//   const employee = await Employee.findById(employeeId);
//   const jobArray = employee.appliedJobs;
//   const job = await Job.findById(jobId);
//   const employeeArray = job.peopleApplied;

//   if (employee) {
//     if (job) {
//       const updateApplyJob = await Employee.findByIdAndUpdate(employeeId, {
//         appliedJobs: [...jobArray, jobId],
//       });
//       if (updateApplyJob) {
//         res.status(201).json({ msg: "job Applied." });
//       } else {
//         res.status(400);
//       }
//       const updateJobApplied = await Job.findByIdAndUpdate(jobId, {
//         peopleApplied: [...employeeArray, employeeId],
//       });
//     } else {
//       res.status(401).json({
//         sts: "00",
//         msg: "Job not found!",
//       });
//     }
//   } else {
//     res.status(401).json({
//       sts: "00",
//       msg: "User not found. Make sure that you are logged in!",
//     });
//   }
// });

// Get all the applied jobs to employee
export const getAppliedJobs = asyncHandler(async (req, res) => {
  const employeeId = req.employee._id;

  const employee = await Employee.findById(employeeId)
    .populate("appliedJobs")
    .exec();

  const appliedJobsArray = employee.appliedJobs;

  if (employee) {
    const simplifiedJobs = appliedJobsArray.map(
      ({ role, company, description }) => ({
        role,
        company,
        description,
      })
    );
    res.status(201).json({ simplifiedJobs });
  } else {
    res.status(401).json({
      sts: "00",
      msg: "User not found. Make sure that you are logged in!",
    });
  }
});
