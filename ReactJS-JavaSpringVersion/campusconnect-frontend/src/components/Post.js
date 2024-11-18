import React, { useContext, useState, useEffect } from "react";
// import axios from "axios";
import { AuthContext } from "../index";

function PostComponent({ onClose }) {
  const [content, setContent] = useState("");
  // const [setPosts] = useState([]);
  const { email } = useContext(AuthContext);

  // // Fetch all posts when the component mounts
  // const fetchPosts = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8080/api/posts/feed");
  //     setPosts(response.data);
  //   } catch (error) {
  //     console.error("Error fetching posts:", error);
  //     // Handle error appropriately (e.g., show a notification)
  //   }
  // };

  // Create a new post
  // const createPost = async (postData) => {
  //   try {
  //     await axios.post("http://localhost:8080/api/posts/create", postData); // Use the correct endpoint
  //   } catch (error) {
  //     console.error("Error creating post:", error);
  //     // Handle error appropriately (e.g., show a notification)
  //   }
  // };

  // Handle post creation
  // const handleCreatePost = async () => {
  //   const postData = { userId: 1, content }; // Replace 1 with the actual user ID
  //   await createPost(postData);
  //   setContent(""); // Clear input field
  //   fetchPosts(); // Refresh posts after creating
  //   onClose(); // Close the modal after posting
  // };

  const handleUploadPost = async (e) => {
    e.preventDefault();
    console.log(content);

    try {
      await fetch("http://localhost:8080/api/auth/postU", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          content,
        }),
      });
      console.log("Post uploaded successfully.");
      setContent(""); // Clear the input field
      onClose(); // Close the modal after posting
    } catch (error) {
      console.error("Error uploading pooooooost:", error);
    }

    console.log(content);
  };

  // // Handle post deletion
  // const handleDeletePost = async (postId) => {
  //   try {
  //     await axios.delete(`http://localhost:8080/api/posts/delete/${postId}`); // Use the correct endpoint
  //     fetchPosts(); // Refresh the posts after deletion
  //   } catch (error) {
  //     console.error("Error deleting post:", error);
  //     // Handle error appropriately (e.g., show a notification)
  //   }
  // };

  // Format the date from the timestamp
  // const formatDate = (timestamp) => new Date(timestamp).toLocaleString(); // Converts to a readable format
  // Fetch posts on component mount

  useEffect(() => {
    //fetchPosts();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button onClick={handleUploadPost}>Upload Post</button>
    </div>
  );
}

export default PostComponent;
