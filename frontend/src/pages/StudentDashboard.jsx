import { useState, useContext } from "react";
import { PermissionContext } from "../context/PermissionContext";
import { requestPermission, deletePermission } from "../services/api";
import { FaTrash } from "react-icons/fa"; // Import trash icon

const StudentDashboard = () => {
  const [purpose, setPurpose] = useState(""); // Purpose state for requesting permission
  const { permissions, loading, setPermissions } =
    useContext(PermissionContext); // Permissions and loading state

  // Handle permission request form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await requestPermission({ purpose });

      // Update permissions state
      setPermissions([...permissions, { purpose, status: "Pending" }]);

      setPurpose(""); // Reset input field
      alert("Your permission request has been sent successfully.");
    } catch (err) {
      console.error("Failed to request permission", err);
    }
  };

  // Function to remove permission request
  const removePermission = async (id) => {
    try {
      await deletePermission(id);

      setPermissions(permissions.filter((permission) => permission._id !== id));
      alert("Your permission request has been removed successfully.");
    } catch (err) {
      console.error("Failed to remove permission", err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center  p-6">
      <div className="bg-black bg-opacity-50 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-lg text-white border border-white/30">
        <h2 className="text-3xl font-bold text-center mb-6 text-white drop-shadow-lg">
          Student Dashboard
        </h2>

        {/* Permission Request Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter Purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="w-full px-4 py-2 text-white bg-black bg-opacity-60 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition-transform transform hover:scale-105 shadow-lg"
          >
            Request Permission
          </button>
        </form>

        {/* Loading State */}
        {loading && (
          <div className="mt-6 text-center">
            <span className="text-gray-300 animate-pulse">Loading...</span>
          </div>
        )}

        {/* Display Permissions */}
        <h2 className="text-xl font-semibold mt-6">Your Permissions</h2>
        {permissions.length > 0 ? (
          <div className="mt-4 space-y-4">
            {permissions.map((permission) => (
              <div
                key={permission._id}
                className="flex justify-between items-center p-4 bg-gray-800 bg-opacity-60 rounded-lg shadow-md"
              >
                <div>
                  <p className="font-semibold">Purpose: {permission.purpose}</p>
                  <p
                    className={`text-sm ${
                      permission.status === "Pending"
                        ? "text-yellow-400"
                        : "text-green-400"
                    }`}
                  >
                    Status: {permission.status}
                  </p>
                </div>
                <button
                  onClick={() => removePermission(permission._id)}
                  className="text-red-400 hover:text-red-600 transition-transform transform hover:scale-110"
                >
                  <FaTrash size={18} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 mt-4">No permissions requested yet.</p>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
