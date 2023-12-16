import jwt from "jsonwebtoken";
import asyncHandler from "../Config/asyncHandler.js";
import Employee from "../Models/employeeModel.js";
import Employer from "../Models/employerModel.js";
import User from "../Models/userModel.js";

export const protectUser = asyncHandler(async (req, res, next) => {

  let token;
  
  if (
    req.headers.authorization && req.headers.authorization.startsWith("Bearer")
  ) {
    try {

      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, "secret_of_jwt_for_jobspark_5959");
      req.user = await User.findById(decoded.userId).select("-password");

      next();

    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authenticated, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authenticated, No token");
  }
  
});


export const protectEmployer = asyncHandler(async (req, res, next) => {

  let token;
  
  if (
    req.headers.authorization && req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, "secret_of_jwt_for_jobspark_5959");

      req.employer = await Employer.findById(decoded.employerId).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authenticated, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authenticated, No token");
  }
});