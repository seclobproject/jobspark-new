import express from "express";
import {
  addEmployer,
  getCreatedJobs,
  getJobEntries,
  manageApplication,
} from "../Controllers/employerController.js";
import { protectUser } from "../Middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(protectUser, addEmployer);
router.route("/get-jobs").get(protectUser, getCreatedJobs); // GET all created jobs to the employer
router.route("/get-applications").post(protectUser, getJobEntries);
router.route("/manage-application").put(protectUser, manageApplication);


export default router;
