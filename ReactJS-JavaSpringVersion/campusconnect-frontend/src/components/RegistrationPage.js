import React, { useState } from 'react';
import './RegistrationPage.css';
import OtpVerificationPage from './OtpVerificationPage';

const RegistrationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [otpSent, setOtpSent] = useState(false);

    const sendOtpToEmail = () => {
        // Simulating API call to send OTP
        console.log('Sending OTP to:', email);
        setOtpSent(true);
        // Here, you would typically call your backend API
    };

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

        setErrorMessage('');
        setIsRegistered(true);
        sendOtpToEmail();
    };

    if (isRegistered && otpSent) {
        return <OtpVerificationPage email={email} />;
    }

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
                </form>
                {otpSent && <div className="otp-sent-message">OTP sent to your email!</div>}
            </div>
        </div>
    );
};

export default RegistrationPage;
