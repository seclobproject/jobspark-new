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
