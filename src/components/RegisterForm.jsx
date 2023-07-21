import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    age: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUserData({ ...userData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://0.0.0.0:2000/api/register', userData);
      alert('User registered successfully!');
      setUserData({ name: '', email: '', age: '', phoneNumber: '' });
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} method='POST'>
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="number"
        name="age"
        value={userData.age}
        onChange={handleChange}
        placeholder="Age"
        required
      />
      <input
        type="tel"
        name="phoneNumber"
        value={userData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
