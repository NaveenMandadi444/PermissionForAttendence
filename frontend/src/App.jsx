// // // // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // // // import LoginPage from "./components/LoginPage";
// // // // import RegisterPage from "./components/RegisterPage";
// // // // import StudentDashboard from "./components/StudentDashboard";
// // // // import TeacherDashboard from "./components/TeacherDashboard";

// // // // function App() {
// // // //   return (
// // // //     <Router>
// // // //       <Routes>
// // // //         <Route path="/" element={<LoginPage />} />
// // // //         <Route path="/register" element={<RegisterPage />} />
// // // //         <Route path="/dashboard" element={<StudentDashboard />} />{" "}
// // // //         {/* Default to Student Dashboard */}
// // // //         <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
// // // //       </Routes>
// // // //     </Router>
// // // //   );
// // // // }

// // // // export default App;

// // // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // // import LoginPage from "./components/LoginPage";
// // // import RegisterPage from "./components/RegisterPage";
// // // import StudentDashboard from "./components/StudentDashboard";
// // // import TeacherDashboard from "./components/TeacherDashboard";

// // // function App() {
// // //   return (
// // //     <Router>
// // //       <Routes>
// // //         <Route path="/" element={<LoginPage />} />
// // //         <Route path="/register" element={<RegisterPage />} />
// // //         <Route path="/dashboard" element={<StudentDashboard />} />{" "}
// // //         {/* Default to Student Dashboard */}
// // //         <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
// // //       </Routes>
// // //     </Router>
// // //   );
// // // }

// // // export default App;
// /////-------
// // import React, { useContext, useState, useEffect } from "react";
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import { AuthContext } from "./context/AuthContext";
// // import { PermissionContext } from "./context/PermissionContext";
// // import LoginPage from "./pages/LoginPage";
// // import RegisterPage from "./pages/RegisterPage";
// // import StudentDashboard from "./pages/StudentDashboard";
// // import TeacherDashboard from "./pages/TeacherDashboard";
// // import RequestStatus from "./pages/RequestStatus";
// // import NotFound from "./pages/NotFound";
// // import Navbar from "./components/Navbar";

// // const App = () => {
// //   const { user, logout } = useContext(AuthContext); // Get user state from AuthContext
// //   const { permissions, fetchPermissions } = useContext(PermissionContext); // Get permissions state from PermissionContext

// //   // Fetch permissions on user change
// //   useEffect(() => {
// //     if (user && user.role === "Teacher") {
// //       fetchPermissions(); // Fetch permissions only for Teacher role
// //     }
// //   }, [user, fetchPermissions]);

// //   return (
// //     <Router>
// //       <Navbar />
// //       <div className="container mx-auto p-4">
// //         <Routes>
// //           <Route path="/" element={user ? <HomePage /> : <LoginPage />} />
// //           <Route path="/register" element={<RegisterPage />} />
// //           <Route path="/login" element={<LoginPage />} />
// //           <Route path="/dashboard/student" element={<StudentDashboard />} />
// //           <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
// //           <Route path="/request-status" element={<RequestStatus />} />
// //           <Route path="*" element={<NotFound />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;

// // import React, { useContext, useEffect } from "react";
// // import {
// //   BrowserRouter as Router,
// //   Route,
// //   Routes,
// //   useNavigate,
// // } from "react-router-dom";
// // import { AuthContext } from "./context/AuthContext";
// // import { PermissionContext } from "./context/PermissionContext";
// // import LoginPage from "./pages/LoginPage.jsx";
// // import RegisterPage from "./pages/RegisterPage.jsx";
// // import StudentDashboard from "./pages/StudentDashboard.jsx";
// // import TeacherDashboard from "./pages/TeacherDashboard.jsx";
// // // import RequestStatus from "./pages/RequestStatus";
// // // import NotFound from "./pages/NotFound";
// // // import Navbar from "./pages/Navbar.js";

// // const App = () => {
// //   const { user, logout } = useContext(AuthContext); // Get user state from AuthContext
// //   const { fetchPermissions } = useContext(PermissionContext); // Fetch permissions from PermissionContext
// //   const navigate = useNavigate(); // To handle redirection after login

// //   // Fetch permissions on user change (for Teacher)
// //   useEffect(() => {
// //     if (user && user.role === "Teacher") {
// //       fetchPermissions(); // Fetch permissions for the teacher
// //     }
// //   }, [user, fetchPermissions]);

// //   // Handle role-based redirection after login
// //   useEffect(() => {
// //     if (user) {
// //       if (user.role === "Student") {
// //         navigate("/dashboard/student");
// //       } else if (user.role === "Teacher") {
// //         navigate("/dashboard/teacher");
// //       }
// //     }
// //   }, [user, navigate]);

// //   return (
// //     <Router>
// //       <Navbar />
// //       <div className="container mx-auto p-4">
// //         <Routes>
// //           <Route path="/" element={user ? <RequestStatus /> : <LoginPage />} />
// //           <Route path="/register" element={<RegisterPage />} />
// //           <Route path="/login" element={<LoginPage />} />
// //           <Route path="/dashboard/student" element={<StudentDashboard />} />
// //           <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
// //           {/* <Route path="/request-status" element={<RequestStatus />} />
// //           <Route path="*" element={<NotFound />} /> */}
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;

// // import React, { useContext, useEffect } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import { AuthContext } from "./context/AuthContext";
// // import LoginPage from "./pages/LoginPage";
// // import RegisterPage from "./pages/RegisterPage";
// // import StudentDashboard from "./pages/StudentDashboard";
// // import TeacherDashboard from "./pages/TeacherDashboard";

// // const App = () => {
// //   const { user, loading } = useContext(AuthContext);

// //   if (loading) return <div>Loading...</div>;

// //   return (
// //     <Routes>
// //       <Route path="/" element={user ? <StudentDashboard /> : <LoginPage />} />
// //       <Route path="/register" element={<RegisterPage />} />
// //       <Route
// //         path="/login"
// //         element={user ? <StudentDashboard /> : <LoginPage />}
// //       />
// //       <Route path="/dashboard/student" element={<StudentDashboard />} />
// //       <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
// //     </Routes>
// //   );
// // };

// // export default App;

// import React, { useContext, useEffect, useState } from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import { AuthContext } from "./context/AuthContext";
// import { PermissionContext } from "./context/PermissionContext";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import StudentDashboard from "./pages/StudentDashboard";
// import TeacherDashboard from "./pages/TeacherDashboard";

// const App = () => {
//   const { user, logout } = useContext(AuthContext); // Get user state from AuthContext
//   const { permissions, fetchPermissions } = useContext(PermissionContext); // Get permissions state from PermissionContext
//   const [loading, setLoading] = useState(true); // To track loading state

//   // Use navigate to programmatically redirect if needed
//   const navigate = useNavigate();

//   // Check if the user is logged in and has a valid token
//   useEffect(() => {
//     if (user) {
//       // If user is logged in, check role and redirect to the respective dashboard
//       if (user.role === "Student") {
//         navigate("/dashboard/student");
//       } else if (user.role === "Teacher") {
//         navigate("/dashboard/teacher");
//       }
//     }
//     setLoading(false); // Set loading to false after checking
//   }, [user, navigate]);

//   if (loading) return <div>Loading...</div>; // Render loading while checking the user status

//   return (
//     <div className="container mx-auto p-4">
//       <Routes>
//         {/* Homepage route */}
//         <Route path="/" element={!user ? <RegisterPage /> : <LoginPage />} />

//         {/* Login route */}
//         <Route
//           path="/login"
//           element={user ? <StudentDashboard /> : <LoginPage />}
//         />

//         {/* Register route */}
//         <Route path="/register" element={<RegisterPage />} />

//         {/* Dashboard routes */}
//         <Route path="/dashboard/student" element={<StudentDashboard />} />
//         <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

// import React, { useContext, useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useNavigate,
// } from "react-router-dom";
// import { AuthContext } from "./context/AuthContext";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import HomePage from "./pages/HomePage"; // Import HomePage
// import StudentDashboard from "./pages/StudentDashboard";
// import TeacherDashboard from "./pages/TeacherDashboard";

// const App = () => {
//   const { user } = useContext(AuthContext); // Get user state from AuthContext
//   const [loading, setLoading] = useState(true); // To track loading state

//   // Use navigate to programmatically redirect if needed
//   const navigate = useNavigate();

//   // Check if the user is logged in and has a valid token
//   useEffect(() => {
//     if (user) {
//       // If user is logged in, check role and redirect to the respective dashboard
//       if (user.role === "Student") {
//         navigate("/dashboard/student");
//       } else if (user.role === "Teacher") {
//         navigate("/dashboard/teacher");
//       }
//     }
//     setLoading(false); // Set loading to false after checking
//   }, [user, navigate]);

//   if (loading) return <div>Loading...</div>; // Render loading while checking the user status

//   return (
//     <div className="container mx-auto p-4">
//       <Routes>
//         {/* Home page route */}
//         <Route path="/" element={<HomePage />} /> {/* Home page route */}
//         {/* Login route */}
//         <Route
//           path="/login"
//           element={user ? <StudentDashboard /> : <LoginPage />}
//         />
//         {/* Register route */}
//         <Route path="/register" element={<RegisterPage />} />
//         {/* Dashboard routes */}
//         <Route path="/dashboard/student" element={<StudentDashboard />} />
//         <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;
//-------
// import "./index.css";
// import React, { useContext, useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useNavigate,
// } from "react-router-dom";
// import { AuthContext } from "./context/AuthContext";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import HomePage from "./pages/HomePage";
// import StudentDashboard from "./pages/StudentDashboard";
// import TeacherDashboard from "./pages/TeacherDashboard";
// import NavBar from "./pages/Navbar"; // Import NavBar component

// const App = () => {
//   const { user } = useContext(AuthContext); // Get user state from AuthContext
//   const [loading, setLoading] = useState(true); // To track loading state

//   // Use navigate to programmatically redirect if needed
//   const navigate = useNavigate();

//   // Check if the user is logged in and has a valid token
//   useEffect(() => {
//     if (user) {
//       // If user is logged in, check role and redirect to the respective dashboard
//       if (user.role === "Student") {
//         navigate("/dashboard/student");
//       } else if (user.role === "Teacher") {
//         navigate("/dashboard/teacher");
//       }
//     }
//     setLoading(false); // Set loading to false after checking
//   }, [user, navigate]);

//   if (loading) return <div>Loading...</div>; // Render loading while checking the user status

//   return (
//     <div className="container mx-auto p-4">
//       <NavBar /> {/* Add NavBar here */}
//       <Routes>
//         {/* Home page route */}
//         <Route path="/" element={<HomePage />} />
//         {/* Login route */}
//         <Route
//           path="/login"
//           element={user ? <StudentDashboard /> : <LoginPage />}
//         />
//         {/* Register route */}
//         <Route path="/register" element={<RegisterPage />} />
//         {/* Dashboard routes */}
//         <Route path="/dashboard/student" element={<StudentDashboard />} />
//         <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

import "./index.css";
import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import NavBar from "./pages/Navbar"; // Import NavBar component

const App = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.role === "Student") {
        navigate("/dashboard/student");
      } else if (user.role === "Teacher") {
        navigate("/dashboard/teacher");
      }
    }
    setLoading(false);
  }, [user, navigate]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 animate-fadeIn">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 text-white mx-auto">
      <NavBar />
      <div className="container mx-auto p-4 animate-fadeIn">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={user ? <StudentDashboard /> : <LoginPage />}
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
