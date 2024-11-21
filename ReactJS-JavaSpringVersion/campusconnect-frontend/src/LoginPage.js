import React, { useState, useContext } from "react";
import { AuthContext } from "./index"; // Import the context
//import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const {
    setEmail,
    setMajor,
    setGradyear,
    setBio,
    setConnections,
    connections,
    setUserId,
  } = useContext(AuthContext);

  const [email, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    //validate school email
    const schoolDomain = "@mavs.uta.edu";
    if (!email.endsWith(schoolDomain)) {
      setErrorMessage("Email must be from the school domain");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Include all required fields in the request body
        body: JSON.stringify({
          email,
          password,
        }),
      });

      // Reset error message if validation passes
      setErrorMessage("");

      if (response.ok) {
        // Registration successful,
        //const m = await response.text();
        const data = await response.json();
        setEmail(email);
        setMajor(data.major);
        setGradyear(data.gradyear);
        setBio(data.bio);
        setConnections(data.connections);
        console.log(data);
        console.log(connections);
        console.log("Hello");
        setUserId(data.userId);

        //redirect to login
        //setTimeout(() => navigate("/"), 0);
        navigate("/App");
      } else {
        setErrorMessage("Login failed. Please try again.");
        // change this to send credentials to profile page so it can fetch aprropriatley
      }
    } catch (error) {
      setErrorMessage("An error occurred during login");
    }
  };
  return (
    <div className="login-page">
      <div className="form-container">
        <h1>Login</h1>
        <form className="login-body" onSubmit={handleLogin}>
          {errorMessage && (
            <div className="error-message" role="alert">
              {errorMessage}
            </div>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmailInput(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <div className="registration-link">
          <p>Don't have an account?</p>
          <a onClick={() => navigate("/register")} href="#!">
            Register here
          </a>{" "}
          {/* Link to Registration Page */}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
