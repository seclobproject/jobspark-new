import asyncHandler from "../Config/asyncHandler.js";
import Employer from "../Models/employerModel.js";

import jwt from "jsonwebtoken";

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
