import asyncHandler from "../Config/asyncHandler.js";
import Employer from "../Models/employerModel.js";
import Job from "../Models/jobModel.js";

// Add a new job
export const addJob = asyncHandler(async (req, res) => {

  const companyEmail = req.user.email;

  const employer = await Employer.findOne({ email: companyEmail });

  const {
    role,
    description,
    openingsCount,
    type,
    experience,
    packageAmount,
    education,
    location,
    locality,
    gender,
    email,
    keySkills,
    typeOfPackage
  } = req.body;

  const newJob = await Job.create({
    company: employer._id,
    companyName: employer ? employer.companyName : null,
    role,
    description,
    openingsCount,
    type,
    experience,
    packageAmount,
    education,
    location,
    locality,
    gender,
    email,
    keySkills,
    typeOfPackage
  });

  if (newJob) {
    res.status(201).json({ msg: "New job created." });
  } else {
    res.status(400);
  }

});

// Edit existing job
export const editJob = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const company = req.user._id;
  const updatejob = await Job.findByIdAndUpdate(id, { company, ...req.body });
  if (updatejob) {
    res.status(201).json({ msg: "Job Updated." });
  } else {
    res.status(400);
  }
});

// Delete a job
export const deleteJob = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const jobData = await Job.findByIdAndDelete(id);
  if (jobData) {
    res.status(201).json({ msg: "job Deleted." });
  } else {
    res.status(400);
  }
});
