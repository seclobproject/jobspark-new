import express from "express";
import {
  applyForJob,
  fillProfile,
  getAppliedJobs,
  getJobs,
} from "../Controllers/employeeController.js";
import { protectUser } from "../Middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(protectUser, fillProfile);
router.route("/get-recommended-jobs").get(protectUser, getJobs);
router.route("/apply-for-job").post(protectUser, applyForJob);

router.route("/get-applied-jobs").get(protectUser, getAppliedJobs);

export default router;
