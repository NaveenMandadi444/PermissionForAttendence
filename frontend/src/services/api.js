import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Adjust according to your backend URL
});

export const login = async (data) => {
  return await api.post("/api/auth/login", data);
};

export const register = async (data) => {
  return await api.post("/api/auth/register", data);
};

export const requestPermission = async (data) => {
  return await api.post("/api/permission/request", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getStudentPermissions = async () => {
  return await api.get("/api/permission/student", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getAllPermissions = async () => {
  return await api.get("/api/permission/all", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const updatePermissionStatus = async (data) => {
  return await api.put("/api/permission/update", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
export const deletePermission = async (id) => {
  try {
    return await api.delete(`/api/permission/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  } catch (error) {
    console.error("Error deleting permission:", error);
    throw error; // Rethrow the error after logging it
  }
};
