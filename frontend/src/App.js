import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('resume', resume);

    try {
      const res = await axios.post('http://localhost:5000/api/upload', formData);
      alert('Resume uploaded successfully');
    } catch (error) {
      alert('Failed to upload resume');
    }
  };

  return (
    <div className="App">
      <h1>Resume form submission</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="file" accept="application/pdf" onChange={(e) => setResume(e.target.files[0])} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
