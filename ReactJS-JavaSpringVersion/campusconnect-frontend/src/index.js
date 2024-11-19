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
      }}
    >
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
