import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationPage.css';

const RegistrationPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        const utaEmailRegex = /^[a-zA-Z0-9._%+-]+@(mavs\.uta\.edu|uta\.edu)$/;

        if (!utaEmailRegex.test(email)) {
            setErrorMessage('Email must contain "@mavs.uta.edu" or "@uta.edu"');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        // Reset error message if validation passes
        setErrorMessage('');

        // Navigate to additional registration page with email and password
        navigate({
            pathname: '/additional-registration',
            state: { email, password } // Pass email and password
        });
    };

    return (
        <div className="registration-page">
            <div className="form-container">
                <h1>Register</h1>
                <form className="registration-body" onSubmit={handleRegister}>
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
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Register</button>
                    <div className="login-link">
                       <p>Already have an account?</p>
                       <a onClick={() => navigate('/login')} href="#!">Login here</a> {/* Link to Login Page */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;