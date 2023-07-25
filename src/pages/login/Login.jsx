import React, { useState } from 'react';
import './login.css';

const Login = () => {
  // State to store login credentials
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log(loginData);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
