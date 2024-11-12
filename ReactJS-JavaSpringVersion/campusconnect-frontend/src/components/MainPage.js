import React, { useContext } from "react";
//import axios from "axios";
import { AuthContext } from "../index"; // Import AuthContext
import "./ProfilePage.css";

function MainPage() {
  //const [biography, setBio] = useState("");

  const { email } = useContext(AuthContext); // Access email from context
  const userProfilePicture = null;

  return (
    <div className="main-page">
      {/* Still uses Profile Header for the time being*/}
      <div className="profile-header">
        <img
          src={userProfilePicture || "/default-profile.png"} // Default image fallback
          alt="Profile"
          className="profile-picture"
        />
        <div className="profile-info">
          <h1>{email || "User email"}</h1>{" "}
          {/* Display email instead of "John Doe" */}
        </div>
      </div>

      {/* Profile Body */}
      <div className="profile-body"></div>
    </div>
  );
}

export default MainPage;
