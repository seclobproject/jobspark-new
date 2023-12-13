import express from "express";

import jobRoutes from "./Routes/jobRoutes.js";
import employeeRoutes from "./Routes/employeeRoutes.js";
import employerRoutes from "./Routes/employerRoutes.js";

const app = express();


// Database connection
import connectDB from "./Config/db.js";
connectDB();
// Database connection

// ***important***
app.use(express.json());
// ***important***


app.get("/", (req, res) => {
  res.status(201).json("Running");
});

// APIs
app.use("/api/jobs", jobRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/employer", employerRoutes);

const port = 3000;
app.listen(port, () => console.log(`Server running in ${port}`));
