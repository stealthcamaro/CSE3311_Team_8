// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoginPage.css";

// function LoginPage() {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Here, you can add your login logic (API call, etc.)
//     if (email === "" || password === "") {
//       setErrorMessage("Please fill in all fields");
//       return;
//     }

//     // Reset error message if validation passes
//     setErrorMessage("");

//     // Redirect to profile or any other page after successful login
//     navigate("/");
//   };

//   return (
//     <div className="login-page">
//       <div className="form-container">
//         <h1>Login</h1>
//         <form className="login-body" onSubmit={handleLogin}>
//           {errorMessage && (
//             <div className="error-message" role="alert">
//               {errorMessage}
//             </div>
//           )}
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>
//         <div className="registration-link">
//           <p>Don't have an account?</p>
//           <a onClick={() => navigate("/register")} href="#!">
//             Register here
//           </a>{" "}
//           {/* Link to Registration Page */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [mavid, setMavid] = useState('');  // New
  // const [college, setCollege] = useState('');  // New
  // const [major, setMajor] = useState('');  // New
  // const [gradyear, setGradyear] = useState('');  // New
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    //validate school email
    const schoolDomain = "@mavs.uta.edu";
    if (!email.endsWith(schoolDomain)) {
      setErrorMessage("Email must be from the school domain");
      return;
    }

    const mavid = "1001648877";
    const college = "eng";
    const major = "fake";
    const gradyear = "fake";
    const firstName = "luis";
    const lastName = "del";
    try {
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
        }),
      });

      // Reset error message if validation passes
      setErrorMessage("");

      if (response.ok) {
        // Registration successful, redirect to login
        setErrorMessage("Login failed. Please try again.");
      } else {
        navigate("/");
      }
    } catch (error) {
      setErrorMessage("An error occurred during registration");
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
