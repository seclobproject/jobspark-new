import express from "express";
import {
  addEmployer,
  getCreatedJobs,
  manageApplication,
} from "../Controllers/employerController.js";
import { protectUser } from "../Middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(protectUser, addEmployer);
router.route("/get-jobs").get(protectUser, getCreatedJobs);
router.route("/manage-application").put(protectUser, manageApplication);


export default router;
