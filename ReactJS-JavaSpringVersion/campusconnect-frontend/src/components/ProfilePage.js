// ProfilePage.js

import React, { useEffect, useState } from 'react';
import { useUser } from '../UserContext'; // Use the hook instead
import axios from 'axios';
import './ProfilePage.css';

function ProfilePage() {
  const userId = localStorage.getItem('userId');
// Use this userId to fetch posts

  // const { userId } = useUser(); // Get userId from the context
  console.log("Current User ID:", userId); // Check if userId is set correctly
  const [posts, setPosts] = useState([]);
  const userProfilePicture = null;

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/posts/feed/${userId}`); // Adjusted endpoint to include userId
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleDeletePost = async (postId) => {
    await axios.delete(`http://localhost:8080/api/posts/${postId}`);
    fetchPosts();
  };

  const handleEditPost = async (postId) => {
    const newContent = prompt('Edit your post:', '');
    if (newContent) {
      const postData = { content: newContent };
      await axios.put(`http://localhost:8080/api/posts/${postId}`, postData);
      fetchPosts();
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [userId]); // Depend on userId to refetch when it changes

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img
          src={userProfilePicture || '/default-profile.png'}
          alt="Profile"
          className="profile-picture"
        />
        <div className="profile-info">
          <h1>John Doe</h1>
          <p>Class of 2024 | Computer Science</p>
          <p>Bio: Passionate about coding, music, and gaming.</p>
        </div>
      </div>

      <div className="profile-body">
        <div className="profile-posts">
          <h2>Recent Posts</h2>
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post.id}
                className="post"
                onClick={() => {
                  const action = prompt('Choose an action: edit or delete');
                  if (action === 'delete') {
                    handleDeletePost(post.id);
                  } else if (action === 'edit') {
                    handleEditPost(post.id);
                  }
                }}
              >
                <p>
                  <strong>{post.username}</strong>
                  {' '}
                  <span>{new Date(post.timestamp).toLocaleString()}</span>
                </p>
                <p>{post.content}</p>
              </div>
            ))
          ) : (
            <div>No posts available.</div>
          )}
        </div>

        <div className="profile-connections">
          <h2>Connections</h2>
          <div className="connection">Alice Johnson</div>
          <div className="connection">Bob Smith</div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
