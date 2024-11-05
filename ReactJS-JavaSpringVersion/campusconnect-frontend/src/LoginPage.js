import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
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
    
    if (!email.endsWith('@mavs.uta.edu')) {
      setErrorMessage('Please use your university email address');
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
        const responseData = await response.json(); // Get the response as JSON
        const { userId } = responseData; // Extract userId from the response
        setErrorMessage('');
        
        // Store userId in local storage or context state
        localStorage.setItem('userId', userId); // Store user ID in local storage
  
        navigate('/profile'); // Redirect to user's profile page
      } else {
        const errorData = await response.text();
        setErrorMessage(errorData);
      }
    } catch (error) {
      setErrorMessage('Server error. Please try again later.');
      console.error('Login error:', error);
    }
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
          <a onClick={() => navigate('/register')} href="#!">Register here</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
