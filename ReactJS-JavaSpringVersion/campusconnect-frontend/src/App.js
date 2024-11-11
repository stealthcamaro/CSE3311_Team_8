import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./index";
import ProfilePage from "./components/ProfilePage";
import Chat from "./components/Chat";
import Header from "./components/Header";
import PostComponent from "./components/Post";
//import LoginPage from "./LoginPage";
import "./App.css";

function App() {
  const [isEditProfileModalOpen, setEditProfileModalOpen] = useState(false);
  const [isPostModalOpen, setPostModalOpen] = useState(false);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [isChatVisible, setChatVisible] = useState(false);
  //const [email, setEmail] = useState(null); // Add email state
  const { email, setEmail, setMajor, bio, setBio } = useContext(AuthContext);
  const navigate = useNavigate();

  const openPostModal = () => setPostModalOpen(true);
  const closePostModal = () => setPostModalOpen(false);

  const openSettingsModal = () => setSettingsModalOpen(true);
  const closeSettingsModal = () => setSettingsModalOpen(false);

  const toggleChat = () => setChatVisible(!isChatVisible);

  // Function to handle logout
  const handleLogOut = () => {
    // Log out logic (optional)
    setEmail(null);
    setMajor(null);
    navigate("/login"); // Redirect to login page
  };

  const handleEditProfile = () => {
    setEditProfileModalOpen(true);
  };

  //change it so that 'setBio' is used in here and not prior to save
  const handleSaveBio = async (e) => {
    e.preventDefault();
    // Logic to save the new bio (e.g., send to backend or update context)
    try {
      const response = await fetch("http://localhost:8080/api/auth/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          bio,
        }),
      });
    } catch (error) {
      console.error("An update error occurred:", error);
    }

    setEditProfileModalOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <ProfilePage />
      {/* Post Modal */}
      {isPostModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Create a Post</h2>
            <PostComponent onClose={closePostModal} />
            <button type="button" onClick={closePostModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {isSettingsModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Settings</h2>
            <p>Settings content here...</p>
            <button onClick={handleEditProfile}>Edit Profile</button>
            <button onClick={handleLogOut}>Logout</button>{" "}
            <button onClick={closeSettingsModal}>Close</button>
          </div>
        </div>
      )}

      {/* Edit Profile Modal */}
      {isEditProfileModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Bio</h2>
            <input
              type="text"
              placeholder="New Bio"
              //value="value" // Display current bio or empty string
              onChange={(e) => setBio(e.target.value)} // Update bio state
            />
            <button onClick={handleSaveBio}>Save</button>
            <button onClick={() => setEditProfileModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Chat Component */}
      {isChatVisible && <Chat />}

      <div className="bottom-bar">
        <button className="bar-button" id="post-button" onClick={openPostModal}>
          Post
        </button>
        <button className="bar-button" id="connect-button">
          Connect
        </button>
        <button className="bar-button" id="chat-button" onClick={toggleChat}>
          Chat
        </button>
        <button
          className="bar-button"
          id="settings-button"
          onClick={openSettingsModal}
        >
          Settings
        </button>
      </div>
    </div>
  );
}

export default App;
