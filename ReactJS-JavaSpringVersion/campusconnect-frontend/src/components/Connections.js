import React, { useContext, useState, useEffect } from "react";
// import axios from "axios";
import { AuthContext } from "../index";

function ConnectionsComponent({ onClose }) {
  const [connectionEmail, setConnectionEmail] = useState("");
  const { connections, setConnections } = useContext(AuthContext);

  const handleFindConnection = async (e) => {
    e.preventDefault();

    //check if user exists in our database
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
        //if response is ok add it to the list of our connections
        const data = await response.json();
        console.log(data);
        setConnections(connections + " " + connectionEmail);
      }
    } catch (error) {
      console.error("Error finding connection:", error);
    }
  };

  //   useEffect(() => {
  //     //fetchPosts();
  //   }, []);

  return (
    <div>
      <input
        type="text"
        value={connectionEmail}
        onChange={(e) => setConnectionEmail(e.target.value)}
        placeholder="Who are you looking for?"
      />
      <button onClick={handleFindConnection}>Find</button>
    </div>
  );
}

export default ConnectionsComponent;
