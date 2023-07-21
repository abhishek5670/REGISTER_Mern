import React from 'react';
import RegisterForm from './components/RegisterForm';
import RegisteredUsers from './components/RegisteredUsers';

const App = () => {
  return (
    <div>
      <h1>User Registration</h1>
      <RegisterForm />
      <RegisteredUsers />
    </div>
  );
};

export default App;