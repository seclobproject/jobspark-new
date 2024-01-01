import express from "express";

import bodyParser from "body-parser";
import path from "path";
import cors from "cors";

import jobRoutes from "./Routes/jobRoutes.js";
import employeeRoutes from "./Routes/employeeRoutes.js";
import employerRoutes from "./Routes/employerRoutes.js";
import userRoutes from "./Routes/userRoutes.js";

const app = express();

// Database connection
import connectDB from "./Config/db.js";
connectDB();
// Database connection

// ***important***
app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
// ***important***

// Upload path
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
// Upload path

app.get("/", (req, res) => {
  res.status(201).json("Running");
});

// APIs
app.use("/api/jobs", jobRoutes);
app.use("/api/user", userRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/employer", employerRoutes);

const port = 3000;
app.listen(port, () => console.log(`Server running in ${port}`));
