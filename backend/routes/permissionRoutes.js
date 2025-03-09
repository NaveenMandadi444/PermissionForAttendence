import express from "express";
import {
  requestPermission,
  getAllPermissions,
  getStudentPermissions,
  updatePermissionStatus,
  deletePermission,
} from "../controllers/permissionController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/all", protect, getAllPermissions);
router.put("/update", protect, updatePermissionStatus);
router.get("/student", protect, getStudentPermissions);
router.delete("/:id", protect, deletePermission);
// Student requests permission

router.post("/request", protect, requestPermission);

export default router;
