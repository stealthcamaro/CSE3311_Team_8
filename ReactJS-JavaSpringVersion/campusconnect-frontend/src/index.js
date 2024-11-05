// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
// import App from './App';
// import LoginPage from './LoginPage';
// import RegistrationPage from './RegistrationPage';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         {' '}
//         {/* Main App */}
//         <Route path="/login" element={<LoginPage />} />
//         {' '}
//         {/* Login Page */}
//         <Route path="/register" element={<RegistrationPage />} />
//         {' '}
//         {/* Registration Page */}
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
// );

// reportWebVitals();

import React, { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import "./index.css";

export const AuthContext = createContext();

const RootComponent = () => {
  const [email, setEmail] = useState(null);

  return (
    <AuthContext.Provider value={{ email, setEmail }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);

reportWebVitals();
