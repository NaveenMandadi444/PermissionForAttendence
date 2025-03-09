// // import { StrictMode } from 'react'
// // import { createRoot } from 'react-dom/client'
// // import './index.css'
// // import App from './App.jsx'

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>,
// // )
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App"; // Import App component
// import { AuthProvider } from "./context/AuthContext"; // Import AuthContext
// import { PermissionProvider } from "./context/PermissionContext"; // Import PermissionContext

// const rootElement = document.getElementById("root");
// const root = ReactDOM.createRoot(rootElement);

// root.render(
//   <AuthProvider>
//     <PermissionProvider>
//       <App />
//     </PermissionProvider>
//   </AuthProvider>
// );

// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom"; // Import Router
// import App from "./App"; // Import App component
// import { AuthProvider } from "./context/AuthContext"; // Import AuthContext
// import { PermissionProvider } from "./context/PermissionContext"; // Import PermissionContext

// const rootElement = document.getElementById("root");
// const root = ReactDOM.createRoot(rootElement);

// root.render(
//   <Router>
//     {" "}
//     {/* Wrap everything in Router */}
//     <AuthProvider>
//       <PermissionProvider>
//         <App />
//       </PermissionProvider>
//     </AuthProvider>
//   </Router>
// );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App"; // Import your main App component
// import { AuthProvider } from "./context/AuthContext"; // Import AuthContext provider
// import { PermissionProvider } from "./context/PermissionContext"; // Import PermissionContext provider
// import "./index.css"; // Ensure to import your global styles

// // Ensure the root element exists
// const rootElement = document.getElementById("root");
// const root = ReactDOM.createRoot(rootElement);

// root.render(
//   <AuthProvider>
//     <PermissionProvider>
//       <App />
//     </PermissionProvider>
//   </AuthProvider>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import your main App component
import { AuthProvider } from "./context/AuthContext"; // Import AuthContext provider
import { PermissionProvider } from "./context/PermissionContext"; // Import PermissionContext provider
import { BrowserRouter as Router } from "react-router-dom"; // Import Router from react-router-dom
import "./index.css"; // Ensure to import your global styles

// Ensure the root element exists
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Router>
    <AuthProvider>
      <PermissionProvider>
        <App />
      </PermissionProvider>
    </AuthProvider>
  </Router>
);
