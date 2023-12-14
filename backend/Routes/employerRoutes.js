import express from "express";
import {
  loginUser,
  manageApplication,
  registerUser,
} from "../Controllers/employerController.js";
import { protectEmployer } from "../Middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/manage-application").put(protectEmployer, manageApplication);

export default router;
