import express from "express";
import { addJob, deleteJob, editJob } from "../Controllers/jobController.js";
import { protectEmployer, protectUser } from "../Middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(protectUser , addJob);

router.route("/edit/:id").put(protectEmployer,editJob);
router.route("/delete/:id").delete(protectEmployer,deleteJob);

export default router;
