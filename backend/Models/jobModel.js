import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected", "review"],
    default: "review",
  },
});

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    jobTitle: {
      type: String,
      required: true,
    },
    keySkills: [String],
    employmentType: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    locality: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    companyName: {
      type: String,
    },
    salaryMin: {
      type: Number,
    },
    salaryMax: {
      type: Number,
    },
    expMin: {
      type: String,
    },
    expMax: {
      type: String,
    },
    schedule: {
      type: String,
    },
    openingsCount: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    rolesAndResponse: {
      type: String,
      required: true,
    },
    jobDesc: {
      type: String,
      required: true,
    },
    experienceReq: {
      type: String,
      required: true,
    },
    peopleApplied: [applicationSchema],
    typeOfPackage: {
      type: String,
      enum: ["free", "gold", "silver", "platinum"],
      required: true,
    },
    maxApplicationCount: {
      type: Number,
      requiured: true,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);
export default Job;
