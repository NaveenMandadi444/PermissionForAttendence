import { useState, useEffect } from "react";
import { getAllPermissions, updatePermissionStatus } from "../services/api";

const TeacherDashboard = () => {
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all permission requests for the teacher
  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const { data } = await getAllPermissions();
        setPermissions(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch permissions");
        setLoading(false);
      }
    };

    fetchPermissions();
  }, []);

  // Handle approval/rejection of a permission request
  const handleUpdateStatus = async (permissionId, status) => {
    try {
      await updatePermissionStatus({ permissionId, status });

      // Update UI immediately
      setPermissions(
        permissions.map((permission) =>
          permission._id === permissionId
            ? { ...permission, status }
            : permission
        )
      );

      alert(`Permission has been ${status}`);
    } catch (err) {
      setError("Failed to update permission status");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center mt-12 p-6">
      <div className="bg-black bg-opacity-50 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-3xl text-white border border-white/30">
        <h2 className="text-3xl font-bold text-center mb-6 drop-shadow-lg">
          Teacher Dashboard
        </h2>

        <h2 className="text-xl font-semibold text-gray-300 mb-4">
          All Permission Requests
        </h2>

        {/* Loading Animation */}
        {loading && (
          <div className="flex justify-center">
            <span className="text-gray-300 animate-pulse">Loading...</span>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-center font-semibold">{error}</p>
        )}

        {/* Permission List */}
        {permissions.length > 0 ? (
          <div className="space-y-4">
            {permissions.map((permission) => (
              <div
                key={permission._id}
                className="p-4 bg-gray-800 bg-opacity-60 rounded-lg shadow-md"
              >
                <p>
                  <strong className="text-gray-400">Student Name:</strong>{" "}
                  {permission.name}
                </p>
                <p>
                  <strong className="text-gray-400">Reg No:</strong>{" "}
                  {permission.regNo}
                </p>
                <p>
                  <strong className="text-gray-400">Section:</strong>{" "}
                  {permission.section}
                </p>
                <p>
                  <strong className="text-gray-400">Department:</strong>{" "}
                  {permission.department}
                </p>
                <p>
                  <strong className="text-gray-400">Purpose:</strong>{" "}
                  {permission.purpose}
                </p>
                <p>
                  <strong className="text-gray-400">Status:</strong>{" "}
                  <span
                    className={`font-semibold ${
                      permission.status === "Pending"
                        ? "text-yellow-400"
                        : permission.status === "Approved"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {permission.status}
                  </span>
                </p>

                {/* Approve & Reject Buttons */}
                {permission.status === "Pending" && (
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() =>
                        handleUpdateStatus(permission._id, "Approved")
                      }
                      className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-transform transform hover:scale-105"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() =>
                        handleUpdateStatus(permission._id, "Rejected")
                      }
                      className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-transform transform hover:scale-105"
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center mt-4">
            No permissions to review.
          </p>
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;
