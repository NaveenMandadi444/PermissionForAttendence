import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/api";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [section, setSection] = useState("");
  const [role, setRole] = useState("Student");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register({
        name,
        regNo,
        email,
        password,
        department,
        section,
        role,
      });
      navigate("/login");
    } catch (err) {
      setError("Registration failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center mt-12 gird md:grid-cols-1 p-6">
      <div className="bg-black bg-opacity-40 backdrop-blur-xl p-8 rounded-xl shadow-lg w-full max-w-md text-white border border-white/30">
        <h2 className="text-3xl font-bold text-center mb-6 text-white drop-shadow-lg">
          Register
        </h2>

        {/* Error Message */}
        {error && (
          <p className="text-red-400 bg-red-700 bg-opacity-50 p-2 rounded-md text-center mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 text-white rounded-lg bg-black bg-opacity-60 focus:ring-2 focus:ring-blue-400 outline-none border-2 border-blue-300"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Reg No</label>
            <input
              type="text"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              className="w-full px-4 py-2 text-white rounded-lg bg-black bg-opacity-60 focus:ring-2 focus:ring-blue-400 outline-none border-2 border-blue-300"
              placeholder="Enter your Reg No"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-white rounded-lg bg-black bg-opacity-60 focus:ring-2 focus:ring-blue-400 outline-none border-2 border-blue-300"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 text-white rounded-lg bg-black bg-opacity-60 focus:ring-2 focus:ring-blue-400 outline-none border-2 border-blue-300"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Department</label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full px-4 py-2 text-white rounded-lg bg-black bg-opacity-60 focus:ring-2 focus:ring-blue-400 outline-none border-2 border-blue-300"
              placeholder="Enter your department"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Section</label>
            <input
              type="text"
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="w-full px-4 py-2 text-white rounded-lg bg-black bg-opacity-60 focus:ring-2 focus:ring-blue-400 outline-none border-2 border-blue-300"
              placeholder="Enter your section"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <select
              onChange={(e) => setRole(e.target.value)}
              value={role}
              className="w-full px-4 py-2 text-white bg-black bg-opacity-60 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none border-2 border-blue-300"
            >
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition-transform transform hover:scale-105 shadow-lg"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
