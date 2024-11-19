import React, { useContext, useState, useEffect } from "react";
// import axios from "axios";
import { AuthContext } from "../index";

function PostComponent({ onClose }) {
  const [content, setContent] = useState("");
  // const [setPosts] = useState([]);
  const { email } = useContext(AuthContext);

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
