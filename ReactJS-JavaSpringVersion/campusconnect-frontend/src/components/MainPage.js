import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../index"; // Import AuthContext
import "./MainPage.css";

function MainPage() {
  //const [biography, setBio] = useState("");

  const { email } = useContext(AuthContext); // Access email from context
  const userProfilePicture = null;

  const [posts, setPosts] = useState([]);

  // Function to fetch posts from the backend
  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/posts/feed"); // Adjust the endpoint if needed
      setPosts(response.data); // Set the posts in state
    } catch (error) {
      console.error("Error fetching posts:", error); // Handle any errors
    }
  };

  // Function to delete a post
  const handleDeletePost = async (postId) => {
    await axios.delete(`http://localhost:8080/api/posts/${postId}`);
    fetchPosts(); // Refresh the posts after deletion
  };

  // Function to handle edit post
  const handleEditPost = async (postId) => {
    const newContent = prompt("Edit your post:", ""); // Prompt user for new content
    if (newContent) {
      const postData = { content: newContent }; // Prepare data for update
      await axios.put(`http://localhost:8080/api/posts/${postId}`, postData);
      fetchPosts(); // Refresh the posts after editing
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="main-page">
      {/* Profile Header */}
      <div className="main-profile-header">
        <img
          src={userProfilePicture || "/default-profile.png"} // Default image fallback
          alt="Profile"
          className="main-profile-picture"
        />
        <div className="main-profile-info">
          <h1>{email || "User email"}</h1> {/* Display email */}
        </div>
      </div>
  
      {/* Profile Body */}
      <div className="main-profile-body">
        <div className="main-profile-posts">
          <h2>My Feed</h2>
          {/* Display fetched posts dynamically */}
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post.id}
                className="main-post"
                onClick={() => {
                  const action = prompt("Choose an action: edit or delete");
                  if (action === "delete") {
                    handleDeletePost(post.id);
                  } else if (action === "edit") {
                    handleEditPost(post.id);
                  }
                }}
              >
                <p>
                  <strong>{post.username}</strong>{" "}
                  <span>{new Date(post.timestamp).toLocaleString()}</span>
                </p>
                <p>{post.content}</p>
              </div>
            ))
          ) : (
            <div>No posts available.</div>
          )}
        </div>
      </div>
    </div>
  );
  
}

export default MainPage;
