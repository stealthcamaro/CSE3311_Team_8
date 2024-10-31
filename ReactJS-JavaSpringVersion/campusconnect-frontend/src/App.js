import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import Chat from './components/Chat';
import Header from './components/Header';
import PostComponent from './components/Post';
import './App.css';

function App() {
  const [isPostModalOpen, setPostModalOpen] = useState(false);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [isChatVisible, setChatVisible] = useState(false);
  const navigate = useNavigate();

  const openPostModal = () => setPostModalOpen(true);
  const closePostModal = () => setPostModalOpen(false);

  const openSettingsModal = () => setSettingsModalOpen(true);
  const closeSettingsModal = () => setSettingsModalOpen(false);

  const toggleChat = () => setChatVisible(!isChatVisible);

  // Function to handle logout
  const handleLogOut = () => {
    // Log out logic (optional)
    navigate('/login'); // Redirect to login page
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
            <button type="button" onClick={closePostModal}>Close</button>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {isSettingsModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Settings</h2>
            <p>Settings content here...</p>
            <button onClick={handleLogOut}>Logout</button>
            {' '}
            {/* Log Out button */}
            <button onClick={closeSettingsModal}>Close</button>
          </div>
        </div>
      )}

      {/* Chat Component */}
      {isChatVisible && <Chat />}

      <div className="bottom-bar">
        <button className="bar-button" id="post-button" onClick={openPostModal}>Post</button>
        <button className="bar-button" id="connect-button">Connect</button>
        <button className="bar-button" id="chat-button" onClick={toggleChat}>Chat</button>
        <button className="bar-button" id="settings-button" onClick={openSettingsModal}>Settings</button>
      </div>
    </div>
  );
}

export default App;
