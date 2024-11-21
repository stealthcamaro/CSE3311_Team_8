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
  const [major, setMajor] = useState(null);
  const [bio, setBio] = useState(null);
  const [gradyear, setGradyear] = useState(null);
  const [connections, setConnections] = useState(null);
  const [userId, setUserId] = useState(null); // Add userId to the state

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        major,
        setMajor,
        bio,
        setBio,
        gradyear,
        setGradyear,
        connections,
        setConnections,
        userId, // Provide userId to context
        setUserId, // Provide setter for userId
      }}
    >
      {console.log("AuthContext values:", {
        // printing AuthContex for debugging purposes
        email,
        major,
        bio,
        gradyear,
        userId,
      })}
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<App />} />
          <Route path="/" element={<LoginPage />} />
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
