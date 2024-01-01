import express from "express";
import {
  applyForJob,
  fillProfile,
  getAppliedJobs,
  getJobs,
  uploadResume,
} from "../Controllers/employeeController.js";
import { protectUser } from "../Middlewares/authMiddleware.js";

import multer from "multer";
import path from "path";

const router = express.Router();

// File upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e6);
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + fileExtension);
  },
});

const upload = multer({ storage: storage });
// File upload

router.route("/").post(protectUser, fillProfile);
router.route("/get-recommended-jobs").get(protectUser, getJobs);

router
  .route("/upload-resume")
  .post(
    protectUser,
    upload.single("document"),
    uploadResume
  );

router.route("/apply-for-job").post(protectUser, applyForJob);

router.route("/get-applied-jobs").get(protectUser, getAppliedJobs);

export default router;
