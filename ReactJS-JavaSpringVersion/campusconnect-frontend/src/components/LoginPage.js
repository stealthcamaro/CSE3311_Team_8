import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';  // Styling file

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            setErrorMessage('Please fill in all fields');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Redirect to the main page if login is successful
                navigate('/main');
            } else {
                setErrorMessage('Invalid credentials');
            }
        } catch (error) {
            setErrorMessage('An error occurred during login');
        }
    };

    return (
        <div className="login-page">
            <div className="form-container">
                <h1>Login</h1>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                <div className="registration-link">
                    <p>Don't have an account?</p>
                    <button onClick={() => navigate('/register')}>Register here</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
