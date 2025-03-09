import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    regNo: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    department: { type: String, required: true }, // ✅ Required field
    section: { type: String, required: true }, // ✅ Required field
    role: { type: String, enum: ["Student", "Teacher", "HOD"], required: true },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
