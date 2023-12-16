import asyncHandler from "../Config/asyncHandler.js";
import jwt from "jsonwebtoken";

import Employer from "../Models/employerModel.js";
import Job from "../Models/jobModel.js";
import Employee from "../Models/employeeModel.js";
import User from "../Models/userModel.js";

// Employer details entry
// Adding employer details
export const addEmployer = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const phone = req.user.phone;
  const email = req.user.email;

  const existingEmployer = await Employer.findOne({ email });

  const { companyName, companyAddress } = req.body;

  const user = await User.findById(userId);

  if (existingEmployer) {
    res.status(401).json({ sts: "00", msg: "User already exists!" });
  } else {
    if (user) {
      const createdEmployer = await Employer.create({
        companyName,
        companyAddress,
        email,
        phone,
      });

      if (createdEmployer) {
        // Connect employerModel reference to userModel.
        user.employer = createdEmployer._id;
        const updatedUser = await user.save();

        if (updatedUser) res.status(201).json(createdEmployer);
      } else {
        res.status(400);
      }
    } else {
      res.status(404);
    }
  }
});

// Get the jobs posted to employer
export const getCreatedJobs = asyncHandler(async (req, res) => {
  const userEmail = req.user.email;

  const employer = await Employer.findOne({ email: userEmail });

  const employerJobs = await Job.find({ company: employer._id });

  if (employerJobs && employerJobs.length > 0) {
    const simplifiedJobs = employerJobs.map(
      ({ role, location, peopleApplied, createdAt }) => ({
        role,
        location,
        peopleApplied,
        createdAt,
      })
    );

    res.status(200).json(simplifiedJobs);
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
    let jobApplication = false;

    job.peopleApplied &&
      job.peopleApplied.map((application) => {
        if (application._id == employeeId) {
          jobApplication = true;
          application.status = managed;
        }
      });

    if (jobApplication == false) {
      res.status(401).json({ sts: "00", msg: "Can't find application!" });
    }

    const updatedJob = await job.save();

    if (updatedJob) {
      let jobInEmployeeSide = false;

      employee.appliedJobs.map((jobs) => {
        
        if (jobs._id == jobId) {
          jobs.jobStatus = managed;
          jobInEmployeeSide = true;
        }
      });

      if (jobInEmployeeSide == false) {
        res.status(401).json({ sts: "00", msg: "Can't find job" });
      }
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
