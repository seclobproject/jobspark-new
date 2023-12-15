import express from "express";
import {
  loginUser,
  manageApplication,
  registerUser,
} from "../Controllers/employerController.js";
import { protectEmployer } from "../Middlewares/authMiddleware.js";
import { getJobs } from "../Controllers/employeeController.js";
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/manage-application").put(protectEmployer, manageApplication);

router.route("/get-jobs").get(protectEmployer,getJobs);

export default router;
