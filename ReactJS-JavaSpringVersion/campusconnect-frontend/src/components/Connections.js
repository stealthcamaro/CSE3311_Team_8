import React, { useContext, useState, useEffect } from "react";
// import axios from "axios";
import { AuthContext } from "../index";

function ConnectionsComponent({ onClose }) {
  const [connectionEmail, setConnectionEmail] = useState("");
  const { bio, email, connections, setConnections } = useContext(AuthContext);

  // const handleUpdateUser = async () => {
  //   console.log("updated connections", connections);
  //   try {
  //     await fetch("http://localhost:8080/api/auth/update", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email,
  //         bio,
  //         connections,
  //       }),
  //     });
  //   } catch (error) {
  //     console.error("An update error occurred:", error);
  //   }
  // };

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
        //if nothing is found make the user try again
        setConnectionEmail("Not found try again");
      }
    } catch (error) {
      console.error("Error finding connection:", error);
    }
  };

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
