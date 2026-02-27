const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      unique: true
    },
    fullName: {
      type: String,
      required: [true, "Full Name is required"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone Number is required"]
    },
    department: {
      type: String,
      required: true,
      enum: ["HR", "IT", "Finance", "Marketing"]
    },
    designation: {
      type: String,
      required: true
    },
    salary: {
      type: Number,
      required: true,
      min: [0, "Salary must be positive"]
    },
    dateOfJoining: {
      type: Date,
      required: true
    },
    employmentType: {
      type: String,
      required: true,
      enum: ["Full-time", "Part-time", "Contract"]
    },
    status: {
      type: String,
      default: "Active",
      enum: ["Active", "Inactive"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);