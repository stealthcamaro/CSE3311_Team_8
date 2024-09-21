import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {

    const userProfilePicture = null;
    return (
      <div className="profile-page">
        {/* Profile Header */}
        <div className="profile-header">
          {/* <img src="https://via.placeholder.com/150" alt="Profile" className="profile-picture" /> */}
          <img
            src={userProfilePicture || '/default-profile.png'} // Default image fallback
            alt="Profile"
            className="profile-picture"
          />
          <div className="profile-info">
            <h1>John Doe</h1>
            <p>Class of 2024 | Computer Science</p>
            <p>Bio: Passionate about coding, music, and gaming.</p>
          </div>
        </div>
  
        {/* Profile Body */}
        <div className="profile-body">
          <div className="profile-posts">
            <h2>Recent Posts</h2>
            {/* Placeholder for posts */}
            <div className="post">Post 1: Just finished my project!</div>
            <div className="post">Post 2: Looking forward to the next class.</div>
          </div>
  
          <div className="profile-connections">
            <h2>Connections</h2>
            {/* Placeholder for connections */}
            <div className="connection">Alice Johnson</div>
            <div className="connection">Bob Smith</div>
          </div>
        </div>
      </div>
    );
  };

  export default ProfilePage;

