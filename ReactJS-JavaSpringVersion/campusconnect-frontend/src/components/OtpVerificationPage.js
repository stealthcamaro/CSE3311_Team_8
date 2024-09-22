import React, { useState } from 'react';
import axios from 'axios';
import './OtpVerificationPage.css';

const OtpVerificationPage = ({ email }) => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    setMessage('');

    try {
      // Replace with your actual API endpoint
      const response = await axios.post('/api/verify-otp', { email, otp });

      if (response.data.success) {
        setIsVerified(true);
        setMessage('OTP verified successfully!');
      } else {
        setMessage('Incorrect OTP. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-verification-page">
      <h2>Email Verification</h2>

      {isVerified ? (
        <div className="success-message">
          <h3>{message}</h3>
        </div>
      ) : (
        <div className="otp-form">
          <p>Enter the OTP sent to your email: {email}</p>
          <input
            type="text"
            value={otp}
            onChange={handleChange}
            placeholder="Enter OTP"
            maxLength={6}
            className="otp-input"
          />
          <button onClick={handleVerifyOtp} className="verify-btn" disabled={loading}>
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
          {message && <p className="error-message">{message}</p>}
        </div>
      )}
    </div>
  );
};

export default OtpVerificationPage;
