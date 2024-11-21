import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationPage.css";

function RegistrationPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mavid] = useState("10000000"); // New
  const [college, setCollege] = useState(""); // New
  const [major, setMajor] = useState(""); // New
  const [bio] = useState(""); // New
  const [gradyear, setGradyear] = useState(""); // New
  const [errorMessage, setErrorMessage] = useState("");
  const [connections] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    //validate school email
    const schoolDomain = "@mavs.uta.edu";
    if (!email.endsWith(schoolDomain)) {
      setErrorMessage("Email must be from the school domain");
      return;
    }

    try {
      console.log("handleRegister json body");
      console.log("email:", email);
      console.log("password:", password);
      console.log("mavid:", mavid);
      console.log("college:", college);
      console.log("major:", major);
      console.log("gradyear:", gradyear);
      console.log("firstName:", firstName);
      console.log("lastName:", lastName);
      console.log("bio:", bio);
      console.log("connections:", connections);
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Include all required fields in the request body
        body: JSON.stringify({
          email,
          password,
          mavid,
          college,
          major,
          gradyear,
          firstName,
          lastName,
          bio,
          connections,
        }),
      });

      // Reset error message if validation passes
      setErrorMessage("");

      if (response.ok) {
        // Registration successful, redirect to login
        navigate("/");
      } else {
        setErrorMessage("Registration failed. Please try again.");
        //setErrorMessage(response);
      }
    } catch (error) {
      setErrorMessage("An error occurred during registration");
    }
  };
  return (
    <div className="registration-page">
      <div className="form-container">
        <h1>Register</h1>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="College"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Major"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Graduation Year"
            value={gradyear}
            onChange={(e) => setGradyear(e.target.value)}
            required
          />
          <button type="submit">Register</button>
          <div className="login-link">
            <p>Already have an account?</p>
            <a onClick={() => navigate("/")} href="#!">
              Login here
            </a>{" "}
            {/* Link to Login Page */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
