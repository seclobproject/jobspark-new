import express from "express";
import {
  addEmployer,
  manageApplication,
} from "../Controllers/employerController.js";
import { protectUser } from "../Middlewares/authMiddleware.js";
import { getJobs } from "../Controllers/employeeController.js";
const router = express.Router();

router.route("/").post(protectUser, addEmployer);
// router.route("/login").post(loginUser);
router.route("/manage-application").put(manageApplication);

router.route("/get-jobs").get(getJobs);

export default router;
