import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RegisteredUsers = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    axios.get('http://0.0.0.0:2000/api/registered')
      .then((response) => setRegisteredUsers(response.data.registeredUsers))
      .catch((error) => console.error('Error fetching registered users:', error));
  }, []);

  return (
    <div>
      <h2>Registered Users</h2>
      <ul>
        {registeredUsers.map((user, index) => (
          <li key={index}>
            <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}, <strong>Age:</strong> {user.age}, <strong>Phone Number:</strong> {user.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegisteredUsers;
