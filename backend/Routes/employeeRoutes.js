import express from "express";
import { getJobs, loginUser, registerUser } from "../Controllers/employeeController.js";
import { protectEmployee } from "../Middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/get-recommended-jobs").get(protectEmployee, getJobs);

export default router;
