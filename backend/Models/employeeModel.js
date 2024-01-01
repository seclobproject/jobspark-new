import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const workSchema = new mongoose.Schema({
  workingStatus: {
    type: String,
    enum: ["experienced", "fresher", "student"],
  },
  companyName: String,
  location: String,
  designation: String,
  roles: String,
  fromDate: {
    month: {
      type: Number,
      min: 1,
      max: 12,
    },
    year: {
      type: Number,
    },
  },
  toDate: {
    month: {
      type: Number,
      min: 1,
      max: 12,
    },
    year: {
      type: Number,
    },
  },
  currentStatus: {
    type: Boolean,
    default: false,
  },
});

const employeeSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    streetAddress: {
      type: String,
    },
    cityState: {
      type: String,
    },
    pincode: {
      type: String,
    },
    jobTitle: {
      type: String,
    },
    district: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    address: {
      streetAddress: String,
      cityState: String,
      pinCode: Number,
    },
    jobTitle: {
      type: String,
    },
    keySkills: [String],
    education: [
      {
        educationLevel: String,
        school: String,
        yearOfPass: String,
        specialisation: String,
      },
    ],
    currentWorkDetails: [workSchema],
    currentSalary: {
      type: String,
    },
    expectedSalary: {
      type: String,
    },
    fbUrl: {
      type: String,
    },
    twUrl: {
      type: String,
    },
    inUrl: {
      type: String,
    },
    instaUrl: {
      type: String,
    },
    resumeLink: {
      type: String,
    },
    appliedJobs: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Job",
        },
        uploadedResume: {
          type: String,
        },
        jobStatus: {
          type: String,
          enum: ["pending", "accepted", "rejected", "review"],
          default: "review",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
