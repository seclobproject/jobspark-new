import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

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
    password: {
      type: String,
      required: true,
    },
    district: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
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
    currentWorkDetails: {
      status: {
        type: String,
        enum: ["experienced", "fresher", "student"],
      },
      companyName: String,
      location: String,
      role: String,
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
    },
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
    appliedJobs: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },
  },
  {
    timestamps: true,
  }
);

employeeSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Doing encryption before saving to the database
employeeSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
