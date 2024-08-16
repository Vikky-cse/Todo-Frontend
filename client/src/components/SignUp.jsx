import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


function Signup() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
  
    if (name.trim() === '') {
      setNameError('Please enter your name');
      isValid = false;
    } else {
      setNameError('');
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }
  
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password should be at least 8 characters long, contain at least 1 special character, and at least 1 number'
      );
      isValid = false;
    } else {
      setPasswordError('');
    }
  
    return isValid;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      axios
        .post('https://todo-frontend-i1de.onrender.com/register', { name, email, password })
        .then((res) => {
          console.log(res);
          navigate('/login');
        })
        .catch((er) => console.log(er));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 ">
      <div className="bg-white p-5 rounded w-10">
        <h2>Register</h2>
        <form id ="signupform" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <br />
            <input
              type="text"
              autoComplete="off"
              name="name"
              placeholder="Enter your name"
              className="form-controlled rounded-0"
              onChange={(e) => {
                setName(e.target.value);
                setNameError('');
              }}
            />
            {nameError && <span className="text-danger">{nameError}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <br />
            <input
              type="email"
              autoComplete="off"
              name="email"
              placeholder="Enter your email"
              className="form-controlled rounded-0"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError('');
              }}
            />
            {emailError && <span className="text-danger">{emailError}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <br />
            <input
              type="password"
              autoComplete="off"
              name="password"
              placeholder="Enter your password"
              className="form-controlled rounded-0"
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError('');
              }}
            />
            {passwordError && (
              <span className="text-danger">{passwordError}</span>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 rounded-0"
          >
            Register
          </button>
        </form>
        <p>Already Having an Account</p>
        <Link
          to="/login"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
