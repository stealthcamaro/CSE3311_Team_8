import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdditionalInfo.css';
import axios from 'axios';

function AdditionalInfo({ email, password }) {
  const navigate = useNavigate();
  const [mavID, setMavID] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [college, setCollege] = useState('');
  const [major, setMajor] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
      mavID, // Correct variable name
      firstName, // Correct variable name
      lastName, // Correct variable name
      college,
      major,
      graduationYear, // Correct variable name
    };

    try {
      const response = await axios.post('http://localhost:8080/api/register', userData);
      console.log('User registered:', response.data);
      navigate('/success'); // Redirect to success page
    } catch (error) {
      console.error('There was an error registering the user!', error);
      setErrorMessage('There was an error registering the user. Please try again.');
    }
  };

  return (
    <div className="additional-registration-page">
      <div className="form-container">
        <h1>Additional Information</h1>
        {errorMessage && <div className="error-message" role="alert">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="MavID"
            value={mavID}
            onChange={(e) => setMavID(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <select value={college} onChange={(e) => setCollege(e.target.value)} required>
            <option value="">Select College</option>
            <option value="CAPPA">College of Architecture, Planning, and Public Affairs (CAPPA)</option>
            <option value="Business">College of Business</option>
            <option value="Education">College of Education</option>
            <option value="Engineering">College of Engineering</option>
            <option value="Liberal Arts">College of Liberal Arts</option>
            <option value="Nursing">College of Nursing and Health Innovation</option>
            <option value="Science">College of Science</option>
            <option value="Social Work">School of Social Work</option>
            <option value="Urban Affairs">School of Urban and Public Affairs</option>
            <option value="Honors">Honors College</option>
          </select>
          <select value={major} onChange={(e) => setMajor(e.target.value)} required>
            <option value="">Select Major</option>
            <option value="Architecture">Architecture</option>
            <option value="Interior Design">Interior Design</option>
            <option value="Sustainable Urban Design">Sustainable Urban Design</option>
            <option value="Urban and Public Affairs">Urban and Public Affairs</option>
            <option value="Accounting">Accounting</option>
            <option value="Economics">Economics</option>
            <option value="Finance">Finance</option>
            <option value="Information Systems">Information Systems</option>
            <option value="Management">Management</option>
            <option value="Marketing">Marketing</option>
            <option value="Operations and Supply Chain Management">Operations and Supply Chain Management</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Business Analytics">Business Analytics</option>
            <option value="Elementary Education">Elementary Education</option>
            <option value="Middle-Level Education">Middle-Level Education</option>
            <option value="Special Education">Special Education</option>
            <option value="Secondary Education">Secondary Education (various disciplines)</option>
            <option value="Aerospace Engineering">Aerospace Engineering</option>
            <option value="Architectural Engineering">Architectural Engineering</option>
            <option value="Biomedical Engineering">Biomedical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Industrial Engineering">Industrial Engineering</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Resource and Energy Engineering">Resource and Energy Engineering</option>
            <option value="Art">Art</option>
            <option value="Communication Studies">Communication Studies</option>
            <option value="Criminology and Criminal Justice">Criminology and Criminal Justice</option>
            <option value="English">English</option>
            <option value="History">History</option>
            <option value="Linguistics">Linguistics</option>
            <option value="Modern Languages">Modern Languages (Spanish, French, German, Russian)</option>
            <option value="Music">Music</option>
            <option value="Philosophy">Philosophy</option>
            <option value="Political Science">Political Science</option>
            <option value="Sociology">Sociology</option>
            <option value="Theatre Arts">Theatre Arts</option>
            <option value="Anthropology">Anthropology</option>
            <option value="Nursing">Nursing</option>
            <option value="Kinesiology">Kinesiology</option>
            <option value="Public Health">Public Health</option>
            <option value="Biology">Biology</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biochemistry">Biochemistry</option>
            <option value="Environmental and Earth Sciences">Environmental and Earth Sciences</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Psychology">Psychology</option>
            <option value="Social Work">Social Work</option>
            <option value="Interdisciplinary Studies">Interdisciplinary Studies</option>
            <option value="University Studies">University Studies</option>
          </select>
          <select value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} required>
            <option value="">Select Graduation Year</option>
            {Array.from({ length: 10 }, (_, index) => {
              const year = new Date().getFullYear() + index; // Next 10 years
              return <option key={year} value={year}>{year}</option>;
            })}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AdditionalInfo;
