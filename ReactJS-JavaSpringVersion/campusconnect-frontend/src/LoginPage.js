import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Here, you can add your login logic (API call, etc.)
        if (email === '' || password === '') {
            setErrorMessage('Please fill in all fields');
            return;
        }

        // Reset error message if validation passes
        setErrorMessage('');

        // Redirect to profile or any other page after successful login
        navigate('/');
    };

    return (
        <div className="login-page">
            <div className="form-container">
                <h1>Login</h1>
                <form className="login-body" onSubmit={handleLogin}>
                    {errorMessage && (
                        <div className="error-message" role="alert">
                            {errorMessage}
                        </div>
                    )}
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
                    <a onClick={() => navigate('/register')} href="#!">Register here</a> {/* Link to Registration Page */}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;