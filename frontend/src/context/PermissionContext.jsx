import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext"; // Import should be at the top
import { getStudentPermissions, getAllPermissions } from "../services/api";

// Create Context for Permissions
export const PermissionContext = createContext();

export const PermissionProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch permissions for student or teacher based on role
  useEffect(() => {
    const fetchPermissions = async () => {
      setLoading(true);

      if (user && user.role === "Student") {
        try {
          const { data } = await getStudentPermissions();
          setPermissions(data);
        } catch (error) {
          console.error("Failed to fetch student permissions:", error);
        }
      } else if (user && (user.role === "Teacher" || user.role === "HOD")) {
        try {
          const { data } = await getAllPermissions();
          setPermissions(data);
        } catch (error) {
          console.error("Failed to fetch all permissions:", error);
        }
      }
      setLoading(false);
    };

    if (user) {
      fetchPermissions();
    }
  }, [user]);

  return (
    <PermissionContext.Provider
      value={{ permissions, loading, setPermissions }}
    >
      {children}
    </PermissionContext.Provider>
  );
};
