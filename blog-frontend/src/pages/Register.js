import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        alert('Registered successfully!');
      } else {
        alert(data);
      }
    } catch (err) {
      alert('Something went wrong');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} required />
        <br />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
