import express from "express";
import { addJob } from "../Controllers/jobController.js";
import { protectEmployer } from "../Middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(protectEmployer , addJob);

export default router;
