import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./index";
import ProfilePage from "./components/ProfilePage";
import MainPage from "./components/MainPage";
//import Chat from "./components/Chat";
import Header from "./components/Header";
import PostComponent from "./components/Post";
import ConnectionsComponent from "./components/Connections";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("profile");
  //const [connectionEmail, setConnectionEmail] = useState("");

  const [isEditProfileModalOpen, setEditProfileModalOpen] = useState(false);
  const [isPostModalOpen, setPostModalOpen] = useState(false);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [isConnectionsModalOpen, setConnectionsModalOpen] = useState(false);
  //const [isChatVisible, setChatVisible] = useState(false);
  const {
    email,
    setEmail,
    setMajor,
    bio,
    setBio,
    connections,
    setConnections,
    setUserId,
    setGradyear,
  } = useContext(AuthContext);

  //const [isPanelOpen, setPanelOpen] = useState(false); // Connection panel state

  const switchToProfilePage = () => setCurrentPage("profile");
  const switchToMainPage = () => setCurrentPage("main");
  const navigate = useNavigate();
  const openPostModal = () => setPostModalOpen(true);
  const closePostModal = () => setPostModalOpen(false);
  const openSettingsModal = () => setSettingsModalOpen(true);
  const closeSettingsModal = () => setSettingsModalOpen(false);
  const openConnectionsModal = () => setConnectionsModalOpen(true);
  const closeConnectionsModal = () => setConnectionsModalOpen(false);

  //const toggleChat = () => setChatVisible(!isChatVisible);

  // Toggle the Connection Panel
  //const toggleConnectionPanel = () => setPanelOpen(!isPanelOpen);

  // Function to handle logout

  const handleLogOut = () => {
    setEmail(null);
    setMajor(null);
    setBio(null);
    setGradyear(null);
    setConnections(null);
    setUserId(null);
    navigate("/"); // Redirect to login page
  };

  const handleEditProfile = () => {
    setEditProfileModalOpen(true);
  };

  const handleSaveBio = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:8080/api/auth/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          bio,
          connections,
        }),
      });
    } catch (error) {
      console.error("An update error occurred:", error);
    }
    setEditProfileModalOpen(false);
  };

  // const handleFindConnection = async (e) => {
  //   e.preventDefault();
  //   //create a list of all emails avaialable on the database
  //   //make them available to be clicked
  //   try {
  //     const response = await fetch("http://localhost:8080/api/auth/findConnection", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         connectionEmail,
  //       }),
  //     });
  //   } catch (error) {
  //     console.error("An update error occurred:", error);
  //   }

  // }

  return (
    <div className="App">
      <Header />
      {currentPage === "profile" ? <ProfilePage /> : <MainPage />}
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
            <p></p>
            <button onClick={handleEditProfile}>Edit Profile</button>
            <button onClick={handleLogOut}>Logout</button>
            <button onClick={closeSettingsModal}>Close</button>
          </div>
        </div>
      )}

      {/* Connections Modal */}
      {isConnectionsModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Connections</h2>
            <p></p>
            <ConnectionsComponent onClose={closeConnectionsModal} />
            <button type="button" onClick={closeConnectionsModal}>
              Close
            </button>
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
              onChange={(e) => setBio(e.target.value)}
            />
            <button onClick={handleSaveBio}>Save</button>
            <button onClick={() => setEditProfileModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="bottom-bar">
        <button
          className="bar-button"
          id="profile-button"
          onClick={switchToProfilePage}
        >
          Profile
        </button>
        <button
          className="bar-button"
          id="main-button"
          onClick={switchToMainPage}
        >
          Main
        </button>

        <button className="bar-button" id="post-button" onClick={openPostModal}>
          Post
        </button>

        <button
          className="bar-button"
          id="connections-button"
          onClick={openConnectionsModal}
        >
          Connect
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
