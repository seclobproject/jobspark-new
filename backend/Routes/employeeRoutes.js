import express from "express";
import {
  applyForJob,
  fillProfile,
  getAppliedJobs,
  getJobs,
  loginUser,
} from "../Controllers/employeeController.js";
import { protectEmployee } from "../Middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(fillProfile);
router.route("/login").post(loginUser);
router.route("/get-recommended-jobs").get(protectEmployee, getJobs);
router.route("/apply-for-job").post(protectEmployee, applyForJob);

router.route("/get-applied-jobs").get(protectEmployee, getAppliedJobs);

export default router;
