import React, { useState, useCallback } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false); // Add a loading state

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading while uploading

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('resume', resume);

    try {
      const res = await axios.post('https://kudosware-internship.onrender.com/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 15000, // Set a reasonable timeout of 15 seconds
      });
      alert('Resume uploaded successfully');
    } catch (error) {
      alert('Failed to upload resume');
    } finally {
      setLoading(false); // Stop loading after request is complete
    }
  }, [firstName, lastName, email, resume]);

  return (
    <>
      <Navbar />
      <div className="App">
        <h1>Resume form submission</h1>
        <form onSubmit={handleSubmit}>
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
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? (
              <span className="loader"></span>
            ) : (
              'Submit'
            )}
          </button>
        </form>
        {loading && <p>Uploading resume, please wait...</p>} {/* Loading indicator */}
      </div>
    </>
  );
}

export default App;
