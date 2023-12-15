import asyncHandler from "../Config/asyncHandler.js";
import Employee from "../Models/employeeModel.js";
import User from "../Models/userModel.js";

import jwt from "jsonwebtoken";
import Job from "../Models/jobModel.js";

// Register new employee
// export const registerUser = asyncHandler(async (req, res) => {
//   const { firstName, lastName, phone, email, password } = req.body;

//   const existingEmployee = await Employee.findOne({
//     $or: [{ email }, { phone }],
//   });

//   if (existingEmployee) {
//     res.status(401).json({ sts: "00", msg: "User already exists!" });
//   } else {
//     const newEmployee = await Employee.create({
//       firstName,
//       lastName,
//       phone,
//       email,
//       password,
//     });

//     if (newEmployee) {
//       res.status(201).json({
//         firstName: newEmployee.firstName,
//         lastName: newEmployee.lastName,
//         phone: newEmployee.phone,
//         email: newEmployee.email,
//       });
//     } else {
//       res.status(401).json({ sts: "00", msg: "User registration failed!" });
//     }
//   }
// });

// Login employee
export const loginUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, phone, email } = req.body;

  const employee = await User.findOne({ email });

  const token = jwt.sign(
    { employeeId: employee._id },
    "secret_of_jwt_for_jobspark_5959",
    {
      expiresIn: "365d",
    }
  );

  if (employee) {
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
    const createUser = await User.create({
      firstName,
      lastName,
      phone,
      email,
    });

    if (createUser) {
      res.status(201).json({
        firstName: createUser.firstName,
        lastName: createUser.lastName,
        phone: createUser.phone,
        email: createUser.email,
        token_type: "Bearer",
        access_token: token,
        sts: "01",
        msg: "Login Success",
      });
    } else {
      res.status(400);
    }
  }
});

// Employee details entry from profile screen or while aaplying for the first time
export const fillProfile = asyncHandler(async (req, res) => {

  const userId = req.user._id;
  const firstName = req.user.firstName;
  const lastName = req.user.lastName;
  const phone = req.user.phone;
  const email = req.user.email;

  const {
    gender,
    streetAddress,
    cityState,
    pincode,
    jobTitle,
    keySkills,
    workStatus,
    companyName,
    companyLocation,
    companyDesignation,
    roles,
    from,
    to,
    fbUrl,
    twUrl,
    linkedinUrl,
    instaUrl,
  } = req.body;

  const user = await User.findById(userId);

  const currentWorkDetails = {
    workStatus: workStatus || null,
    companyName: companyName || null,
    companyLocation: companyLocation || null,
    companyDesignation: companyDesignation || null,
    roles: roles || null,
    from: from || null,
    to: to || null,
    currentStatus,
  };

  if (user) {
    
    const createdProfile = await Employee.create({
      firstName,
      lastName,
      phone,
      email,
      gender,
      streetAddress,
      cityState,
      pincode,
      jobTitle,
      keySkills,
      fbUrl,
      twUrl,
      linkedinUrl,
      instaUrl,
      currentWorkDetails,
    });

    if (createdProfile) {
      res.status(201).json({ createdProfile });
    } else {
      res.status(400);
    }
  } else {
    res.status(404);
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

// Get all the applied jobs to employee
export const getAppliedJobs = asyncHandler(async (req, res) => {
  const employeeId = req.employee._id;

  const employee = await Employee.findById(employeeId).populate(
    "appliedJobs._id"
  );

  const appliedJobsArray = employee.appliedJobs;

  const resultArray = appliedJobsArray.map((item) => ({
    _id: item._id._id,
    companyName: item._id.companyName,
    role: item._id.role,
    description: item._id.description,
    openingsCount: item._id.openingsCount,
    type: item._id.type,
    experience: item._id.experience,
    packageAmount: item._id.packageAmount,
    jobStatus: item.jobStatus,
  }));

  if (employee) {
    if (resultArray.length > 0) {
      res.status(200).json(resultArray);
    } else {
      res.status(401).json({
        sts: "00",
        msg: "You are not applied for any jobs!",
      });
    }
  } else {
    res.status(401).json({
      sts: "00",
      msg: "User not found. Make sure that you are logged in!",
    });
  }
});
