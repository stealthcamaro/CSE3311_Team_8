import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import './index.css';
import { UserProvider } from './UserContext'; // Ensure the path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/Profile" element={<App />} />
          {/* Main App */}
          <Route path="/login" element={<LoginPage />} />
          {/* Login Page */}
          <Route path="/register" element={<RegistrationPage />} />
          {/* Registration Page */}
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
);

reportWebVitals();
