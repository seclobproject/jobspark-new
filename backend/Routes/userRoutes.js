import express from "express";
const router = express.Router();

import { loginUser } from "../Controllers/userController.js";

router.route("/").post(loginUser);

export default router;