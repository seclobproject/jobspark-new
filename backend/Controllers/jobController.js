import asyncHandler from "../Config/asyncHandler.js";
import Job from "../Models/jobModel.js";

// Add a new job
export const addJob = asyncHandler(async (req, res) => {
  const company = req.employer._id;

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
  } = req.body;

  const newJob = await Job.create({
    company,
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
  });

  if (newJob) {
    res.status(201).json({ msg: "New job created." });
  } else {
    res.status(400);
  }
  
});
