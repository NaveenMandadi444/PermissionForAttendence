// Student requests attendance permission
import Permission from "../models/Permission.js";
import User from "../models/User.js";

export const requestPermission = async (req, res) => {
  try {
    const { purpose } = req.body;
    const student = await User.findById(req.user.id);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    const newPermission = new Permission({
      studentId: student._id,
      name: student.name,
      regNo: student.regNo,
      department: student.department,
      section: student.section,
      purpose,
    });

    await newPermission.save();
    res.status(201).json({
      message: "Permission request submitted successfully",
      permission: newPermission,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Staff views all permission requests
// export const getAllPermissions = async (req, res) => {
//     try {
//         if (req.user.role !== "HOD" && req.user.role !== "Teacher") {
//             return res.status(403).json({ error: "Access denied" });
//         }

//         const permissions = await Permission.find();
//         res.status(200).json(permissions);
//     } catch (error) {
//         res.status(500).json({ error: "Server error" });
//     }
// };

// APPROVE or REJECT a request (Only for HOD & Class Teacher)
// export const updatePermissionStatus = async (req, res) => {
//     try {
//         if (req.user.role !== "HOD" && req.user.role !== "Teacher") {
//             return res.status(403).json({ error: "Access denied" });
//         }

//         const { permissionId, status } = req.body;

//         if (!["Approved", "Rejected"].includes(status)) {
//             return res.status(400).json({ error: "Invalid status" });
//         }

//         const permission = await Permission.findById(permissionId);

//         if (!permission) {
//             return res.status(404).json({ error: "Permission request not found" });
//         }

//         permission.status = status;
//         await permission.save();

//         res.status(200).json({ message: `Permission ${status.toLowerCase()} successfully` });
//     } catch (error) {
//         res.status(500).json({ error: "Server error" });
//     }
// };

// Student checks their request status
export const getStudentPermissions = async (req, res) => {
  try {
    const studentId = req.user.id;
    const permissions = await Permission.find({ studentId });

    res.status(200).json(permissions);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getAllPermissions = async (req, res) => {
  try {
    if (req.user.role !== "HOD" && req.user.role !== "Teacher") {
      return res.status(403).json({ error: "Access denied" });
    }

    const permissions = await Permission.find();
    res.status(200).json(permissions);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// APPROVE or REJECT a request (Only for HOD & Class Teacher)
export const updatePermissionStatus = async (req, res) => {
  try {
    if (req.user.role !== "HOD" && req.user.role !== "Teacher") {
      return res.status(403).json({ error: "Access denied" });
    }

    const { permissionId, status } = req.body;

    if (!["Approved", "Rejected"].includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    const permission = await Permission.findById(permissionId);

    if (!permission) {
      return res.status(404).json({ error: "Permission request not found" });
    }

    permission.status = status;
    await permission.save();

    res
      .status(200)
      .json({ message: `Permission ${status.toLowerCase()} successfully` });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const deletePermission = async (req, res) => {
  try {
    const { id } = req.params; // Get the permission ID from the URL parameter

    // Find the permission by ID and delete it
    const permission = await Permission.findByIdAndDelete(id);

    if (!permission) {
      return res.status(404).json({ message: "Permission request not found" });
    }

    res
      .status(200)
      .json({ message: "Permission request deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
