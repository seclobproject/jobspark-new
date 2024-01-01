import asyncHandler from "../Config/asyncHandler.js";

import Employee from "../Models/employeeModel.js";
import User from "../Models/userModel.js";
import Job from "../Models/jobModel.js";

// Employee details entry from profile screen or while aaplying for the first time
// Adding employee details
export const fillProfile = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const firstName = req.user.firstName;
  const lastName = req.user.lastName;
  const phone = req.user.phone;
  const email = req.user.email;

  const existingEmployee = await Employee.findOne({ email });

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
  };
  if (existingEmployee) {
    res.status(401).json({ sts: "00", msg: "User already exists!" });
  } else {
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
        // Connect employeeModel reference to userModel.
        user.employee = createdProfile._id;
        const updatedUser = await user.save();

        if (updatedUser) res.status(201).json(createdProfile);
      } else {
        res.status(400);
      }
    } else {
      res.status(404);
    }
  }
});

// Get jobs to employee based on skillset
export const getJobs = asyncHandler(async (req, res) => {
  const userEmail = req.user.email;

  const employee = await Employee.findOne({ email: userEmail });

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
    ]).limit(6);

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

// Upload resume
export const uploadResume = asyncHandler(async (req, res) => {
  const userEmail = req.user.email;
  const { appliedJobId } = req.body;

  if (!req.file) {
    res.status(400).json({ message: "No file uploaded" });
  }

  // const filePath = req.file.path;

  const employee = await Employee.findOne({ email: userEmail });

  if (employee) {
    let alreadyApplied = false;
    // const jobApplying = await Job.findById(appliedJobId);

    // Check if the employee has already applied for this job
    employee.appliedJobs.forEach((job) => {
      if (job._id == appliedJobId) {
        alreadyApplied = true;
        return;
      }
    });

    if (alreadyApplied) {
      return res.status(401).json({
        sts: "00",
        msg: "You already applied for this job",
      });
    } else {
      employee.appliedJobs.push({
        _id: appliedJobId,
        uploadedResume: req.file.filename,
      });

      const updatedEmp = await employee.save();

      if (updatedEmp) {
        return res.status(201).json({
          sts: "01",
          msg: "Resume uploaded successfully!",
        });
      } else {
        return res.status(400).json({
          sts: "00",
          msg: "Some error occured. Please try again!",
        });
      }
    }
  }
});

// Apply for a job
export const applyForJob = asyncHandler(async (req, res) => {
  const userEmail = req.user.email;

  const { appliedJobId } = req.body;

  const user = await User.findOne({ email: userEmail }).populate("employee");
  const employee = await Employee.findOne({ email: userEmail });

  const jobApplying = await Job.findById(appliedJobId);

  if (user) {
    let alreadyApplied = false;

    // Check if the user has already applied for this job
    employee.appliedJobs.forEach((job) => {
      if (job._id == appliedJobId) {
        alreadyApplied = true;
        return;
      }
    });

    if (alreadyApplied) {
      return res.status(401).json({
        sts: "00",
        msg: "You already applied for this job",
      });
    }

    employee.appliedJobs.push(appliedJobId);

    const updatedUser = await user.save();
    const updatedEmployee = await employee.save();

    if (updatedUser && updatedEmployee) {
      // Add the user to job
      jobApplying.peopleApplied.push(user._id);
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
  const userEmail = req.user.email;

  const employee = await Employee.findOne({ email: userEmail }).populate(
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
