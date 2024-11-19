import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../index'; // Import AuthContext

function ConnectionPanel({ isOpen, onClose }) {
    const [suggestions, setSuggestions] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const { userId } = useContext(AuthContext); // Retrieve userId from context

    // Log the AuthContext values
    console.log("AuthContext in ConnectionPanel:", AuthContext);

    useEffect(() => {
        // Fetch suggested users based on major and gradYear when panel is open and no search term is entered
        if (isOpen && !searchTerm) {
            axios.get(`http://localhost:8080/users/suggestions?major=CS&gradYear=2024`)
                .then(response => setSuggestions(response.data))
                .catch(error => console.error("Error fetching suggestions:", error));
        }
    }, [isOpen, searchTerm]);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (term) {
            // Fetch users by email for search results
            axios.get(`http://localhost:8080/users/search?email=${term}`)
                .then(response => setSearchResults([response.data])) // Assuming the response is a single user object
                .catch(error => console.error("Error searching user:", error));
        } else {
            setSearchResults([]);
        }
    };

    const handleConnect = async (connectUserId) => {
        if (!userId) {
            alert("You must be logged in to send a connection request.");
            return;
        }

        try {
            // Post connection request to the backend with userId and connectUserId
            await axios.post(`http://localhost:8080/connections/request`, null, {
                params: { userId, connectUserId }, // Send as query params
            });
            alert("Connection request sent!");
        } catch (error) {
            console.error("Error sending connection request:", error);
            alert("Failed to send connection request.");
        }
    };

    return (
        <div className={`connection-panel ${isOpen ? 'open' : ''}`}>
            <button onClick={onClose}>Close</button>
            <input
                type="text"
                placeholder="Search by email"
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="results">
                {searchTerm ? (
                    searchResults.length ? (
                        searchResults.map(user => (
                            <div key={user.id} className="user-item">
                                <p>{user.name} ({user.email})</p>
                                <button onClick={() => handleConnect(user.id)}>Connect</button>
                            </div>
                        ))
                    ) : <p>No users found</p>
                ) : (
                    suggestions.map(user => (
                        <div key={user.id} className="user-item">
                            <p>{user.name} - Major: {user.major}, Grad Year: {user.gradYear}</p>
                            <button onClick={() => handleConnect(user.id)}>Connect</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default ConnectionPanel;
