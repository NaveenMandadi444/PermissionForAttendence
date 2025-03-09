import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },
    regNo: { type: String, required: true },
    department: { type: String, required: true },
    section: { type: String, required: true },
    purpose: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Permission = mongoose.model("Permission", permissionSchema);
export default Permission;
