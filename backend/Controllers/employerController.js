import asyncHandler from "../Config/asyncHandler.js";
import jwt from "jsonwebtoken";

import Employer from "../Models/employerModel.js";
import Job from "../Models/jobModel.js";
import Employee from "../Models/employeeModel.js";

// Register new employer
export const registerUser = asyncHandler(async (req, res) => {
  const { companyName, email, phone, password } = req.body;

  const existingEmployer = await Employer.findOne({
    $or: [{ email }],
  });

  if (existingEmployer) {
    res.status(401).json({ sts: "00", msg: "User already exists!" });
  } else {
    const newEmployer = await Employer.create({
      companyName,
      email,
      phone,
      password,
    });

    if (newEmployer) {
      res.status(201).json({
        companyName: newEmployer.companyName,
        email: newEmployer.email,
        phone: newEmployer.phone,
      });
    } else {
      res.status(401).json({ sts: "00", msg: "User registration failed!" });
    }
  }
});

//Login employer
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const employer = await Employer.findOne({ email });

  if (employer && (await employer.matchPassword(password))) {
    const token = jwt.sign(
      { employerId: employer._id },
      "secret_of_jwt_for_jobspark_5959",
      {
        expiresIn: "365d",
      }
    );

    res.status(200).json({
      id: employer._id,
      firstName: employer.firstName,
      email: employer.email,
      token_type: "Bearer",
      access_token: token,
      sts: "01",
      msg: "Login Success",
    });
  } else {
    res.status(401).json({ sts: "00", msg: "Invalid credentials" });
  }
});

// Get the jobs posted to employer
export const getJobs = asyncHandler(async (req, res) => {
  
  const company = req.employer._id;
  const employeeJobs = await Job.find({ company: company });

  if (employeeJobs && employeeJobs.length > 0) {
    const simplifiedJobs = employeeJobs.map(({ role, company, description }) => ({
      role,
      company,
      description,
    }));

    res.status(200).json({ employeeJobs: simplifiedJobs });
  } else {
    res.status(404).json({ message: "No jobs found for the given company." });
  }
});

// Manage job applications (Accept/Reject/Pending/review)
export const manageApplication = asyncHandler(async (req, res) => {
  const { jobId, managed, employeeId } = req.body;

  const job = await Job.findById(jobId);
  const employee = await Employee.findById(employeeId);

  if (job) {
    // Update status in job model
    job.peopleApplied &&
      job.peopleApplied.map((application) => {
        if (application._id == employeeId) {
          application.status = managed;
        } else {
          res.status(401).json({ sts: "00", msg: "Can't find application!" });
        }
      });
    const updatedJob = await job.save();

    // Update status in employee model
    if (updatedJob) {
      employee.appliedJobs.map((jobs) => {
        if (jobs._id == jobId) {
          jobs.status = managed;
        } else {
          res.status(401).json({ sts: "00", msg: "Can't find job" });
        }
      });
    } else {
      res.status(401).json({ sts: "00", msg: "Some error occured!" });
    }

    const updatedEmployee = await employee.save();

    if (updatedEmployee) {
      res.status(201).json({ sts: "01", msg: "Status updated successfully!" });
    }
  } else {
    res.status(401).json({ sts: "00", msg: "Job not found" });
  }
});
