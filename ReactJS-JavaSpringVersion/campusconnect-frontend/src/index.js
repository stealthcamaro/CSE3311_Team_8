// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
// import App from './App';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {' '}
        {/* Main App */}
        <Route path="/login" element={<LoginPage />} />
        {' '}
        {/* Login Page */}
        <Route path="/register" element={<RegistrationPage />} />
        {' '}
        {/* Registration Page */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
