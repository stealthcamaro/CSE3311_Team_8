// import React, { useContext, useState, useEffect } from "react";
// import axios from "axios";
// import { AuthContext } from "../index";

// function ConnectionsComponent({ onClose }) {
//   const [connectionEmail, setConnectionEmail] = useState("");
//   const [users, setUsers] = useState([]);
//   const { bio, email, connections, setConnections } = useContext(AuthContext);

//   //create a function that get all the emails in the database
//   //then displays these emails in connection pop up
//   //then allows you to select them and add them to your connections

//   //first fetch all users
//   // Function to fetch posts from the backend
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/posts/feed"); // Adjust the endpoint if needed
//       // const allFetchedPosts = response.data; // Fetch all posts
//       // const filteredPosts = allFetchedPosts.filter(
//       //   (post) => post.email !== email
//       // );
//       // setPosts(filteredPosts);

//       const allFetchedUsers = response.data; // Fetch all posts

//       // Convert connections string to an array of emails
//       //const connectionEmails = connections ? connections.split(" ") : [];

//       const connectionEmails = connections ? connections.split(" ") : [];

//       //Dont care about any users that include us or current connections
//       const filteredUsers = allFetchedUsers.filter(
//         (user) => user.email !== email && !connectionEmails.includes(user.email)
//       );

//       setUsers(filteredUsers); // Set the filtered posts
//     } catch (error) {
//       console.error("Error fetching posts:", error); // Handle any errors
//     }
//   };
//   const handleFindConnection = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         "http://localhost:8080/api/auth/findConnection",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             connectionEmail,
//           }),
//         }
//       );

//       if (response.ok) {
//         const updatedConnections = connections + " " + connectionEmail;
//         setConnections(updatedConnections);

//         try {
//           await fetch("http://localhost:8080/api/auth/update", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               email,
//               bio,
//               connections: updatedConnections,
//             }),
//           });
//         } catch (error) {
//           console.error("An update error occurred:", error);
//         }

//         onClose();
//       } else {
//         //if nothing is found make the user try again
//         setConnectionEmail("Not found try again");
//       }
//     } catch (error) {
//       console.error("Error finding connection:", error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <input
//         type="text"
//         value={connectionEmail}
//         onChange={(e) => setConnectionEmail(e.target.value)}
//         placeholder="Who are you looking for?"
//       />
//       <button onClick={handleFindConnection}>Find</button>
//     </div>
//   );
// }

// export default ConnectionsComponent;
//----------------------------------
// import React, { useContext, useState, useEffect } from "react";
// import axios from "axios";
// import { AuthContext } from "../index";

// function ConnectionsComponent({ onClose }) {
//   const [connectionEmail, setConnectionEmail] = useState("");
//   const [users, setUsers] = useState([]);
//   const { bio, email, connections, setConnections } = useContext(AuthContext);

//   // Fetch all users from the backend
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/users/all"); // Adjust the endpoint if needed
//       const allFetchedUsers = response.data;

//       // Convert connections string to an array of emails
//       const connectionEmails = connections ? connections.split(" ") : [];

//       // Exclude the current user and already connected users
//       const filteredUsers = allFetchedUsers.filter(
//         (user) => user.email !== email && !connectionEmails.includes(user.email)
//       );

//       setUsers(filteredUsers); // Set the filtered users
//     } catch (error) {
//       console.error("Error fetching users:", error); // Handle any errors
//     }
//   };

//   const handleFindConnection = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         "http://localhost:8080/api/auth/findConnection",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             connectionEmail,
//           }),
//         }
//       );

//       if (response.ok) {
//         const updatedConnections = connections + " " + connectionEmail;
//         setConnections(updatedConnections);

//         try {
//           await fetch("http://localhost:8080/api/auth/update", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               email,
//               bio,
//               connections: updatedConnections,
//             }),
//           });
//         } catch (error) {
//           console.error("An update error occurred:", error);
//         }

//         onClose();
//       } else {
//         alert("Connection not found. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error finding connection:", error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <select
//         value={connectionEmail}
//         onChange={(e) => setConnectionEmail(e.target.value)}
//       >
//         <option value="">Select a user</option>
//         {users.map((user) => (
//           <option key={user.email} value={user.email}>
//             {user.email}
//           </option>
//         ))}
//       </select>
//       <button onClick={handleFindConnection}>Find</button>
//     </div>
//   );
// }

// export default ConnectionsComponent;
//--------

import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../index";

function ConnectionsComponent({ onClose }) {
  const [connectionEmail, setConnectionEmail] = useState("");
  const [users, setUsers] = useState([]);
  const { bio, email, connections, setConnections } = useContext(AuthContext);

  // Fetch all users from the backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/users/all"); // Adjust the endpoint if needed
      const allFetchedUsers = response.data;

      // Convert connections string to an array of emails
      const connectionEmails = connections ? connections.split(" ") : [];

      // Exclude the current user and already connected users
      const filteredUsers = allFetchedUsers.filter(
        (user) => user.email !== email && !connectionEmails.includes(user.email)
      );

      setUsers(filteredUsers); // Set the filtered users
    } catch (error) {
      console.error("Error fetching users:", error); // Handle any errors
    }
  };

  const handleFindConnection = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8080/api/auth/findConnection",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            connectionEmail,
          }),
        }
      );

      if (response.ok) {
        const updatedConnections = connections + " " + connectionEmail;
        setConnections(updatedConnections);

        try {
          await fetch("http://localhost:8080/api/auth/update", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              bio,
              connections: updatedConnections,
            }),
          });
        } catch (error) {
          console.error("An update error occurred:", error);
        }

        onClose();
      } else {
        alert("Connection not found. Please try again.");
      }
    } catch (error) {
      console.error("Error finding connection:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {/* Input field with a datalist for suggestions */}
      <input
        list="user-options"
        type="text"
        value={connectionEmail}
        onChange={(e) => setConnectionEmail(e.target.value)}
        placeholder="Type or select an email"
      />
      {/* Datalist for dropdown suggestions */}
      <datalist id="user-options">
        {users.map((user) => (
          <option key={user.email} value={user.email} />
        ))}
      </datalist>
      <button onClick={handleFindConnection}>Find</button>
    </div>
  );
}

export default ConnectionsComponent;
