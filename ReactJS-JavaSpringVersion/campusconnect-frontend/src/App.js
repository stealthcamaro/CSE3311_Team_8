// import React from 'react';
// import ProfilePage from './components/ProfilePage';
// import Chat from './components/Chat';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <ProfilePage />
//       <div className="bottom-bar">
//         <button className="bar-button" id="post-button">Post</button>
//         <button className="bar-button" id="connect-button">Connect</button>
//         <button className="bar-button" id="chat-button">Chat</button>
//         <button className="bar-button" id="settings-button">Settings</button>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import ProfilePage from './components/ProfilePage';
import RegistrationPage from './components/RegistrationPage';
//import Chat from './components/Chat';
import Header from './components/Header';
import './App.css';

function App() {
  // State for modal visibility
  const [isPostModalOpen, setPostModalOpen] = useState(false);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);

  const openPostModal = () => setPostModalOpen(true);
  const closePostModal = () => setPostModalOpen(false);

  const openSettingsModal = () => setSettingsModalOpen(true);
  const closeSettingsModal = () => setSettingsModalOpen(false);

  // return (
  //    <div className="App">
  //       <RegistrationPage />
  //    </div>
  // );

  return (
    <div className="App">
      <Header />
      <ProfilePage />

      {/* Post Modal */}
      {isPostModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Create a Post</h2>
            <form>
              <textarea placeholder="What's on your mind?" rows="5" cols="40"></textarea>
              <br />
              <button type="submit">Post</button>
              <button type="button" onClick={closePostModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {isSettingsModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Settings</h2>
            <p>Settings content here...</p>
            <button onClick={closeSettingsModal}>Close</button>
          </div>
        </div>
      )}

      <div className="bottom-bar">
        <button className="bar-button" id="post-button" onClick={openPostModal}>Post</button>
        <button className="bar-button" id="connect-button">Connect</button>
        <button className="bar-button" id="chat-button">Chat</button>
        <button className="bar-button" id="settings-button" onClick={openSettingsModal}>Settings</button>
      </div>
    </div>
  );
}

export default App;
