import asyncHandler from "../Config/asyncHandler.js";
import Employer from "../Models/employerModel.js";
import Job from "../Models/jobModel.js";

// Add a new job
export const addJob = asyncHandler(async (req, res) => {
  const companyEmail = req.user.email;

  const employer = await Employer.findOne({ email: companyEmail });

  const {
    jobTitle,
    keySkills,
    employmentType,
    district,
    locality,
    address,
    pincode,
    email,
    phone,
    salaryMin,
    salaryMax,
    expMin,
    expMax,
    schedule,
    openingsCount,
    gender,
    education,
    rolesAndResponse,
    jobDesc,
    typeOfPackage,
  } = req.body;

  let maxApplicationCount;

  if (typeOfPackage == "free") {
    maxApplicationCount = 20;
  }

  const newJob = await Job.create({
    company: employer._id,
    companyName: employer ? employer.companyName : null,
    jobTitle,
    keySkills,
    employmentType,
    district,
    locality,
    address,
    pincode,
    email,
    phone,
    salaryMin,
    salaryMax,
    expMin,
    expMax,
    schedule,
    openingsCount,
    gender,
    education,
    rolesAndResponse,
    jobDesc,
    typeOfPackage,
    maxApplicationCount
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
