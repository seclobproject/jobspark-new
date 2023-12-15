import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const employerSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    companyAddress: {
      type: String
    },
    typeOfPackage: {
      type: String,
      reqired: true,
      enum: ["free", "silver", "gold", "platinum", "expired"],
      default: "free",
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

employerSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Doing encryption before saving to the database
employerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Employer = mongoose.model("Employer", employerSchema);
export default Employer;
