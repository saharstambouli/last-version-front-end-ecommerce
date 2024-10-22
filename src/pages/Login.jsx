// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { login } from '../Reducers/userSlice'; 
import axios from 'axios';

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let formErrors = {};
    if (!inputs.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      formErrors.email = 'Email must be a valid email address';
    }
    if (!inputs.password) {
      formErrors.password = 'Password is required';
    }
    if (isSignup) {
      if (!inputs.firstName) {
        formErrors.firstName = 'First Name is required';
      }
      if (!inputs.lastName) {
        formErrors.lastName = 'Last Name is required';
      }
      if (inputs.password !== inputs.confirmPassword) {
        formErrors.confirmPassword = 'Passwords must match';
      }
    }
    return formErrors;
  };

  const fetchRegister = async () => {
    try {
      await axios.post('http://localhost:5000/User/register', {
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        email: inputs.email,
        password: inputs.password
      });
      dispatch(login({
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        email: inputs.email
      })); // Dispatch the login action after registration
      navigate('/HomeLogin');
    } catch (error) {
      setErrors({ ...errors, server: error.response?.data?.message || 'Registration failed. Please try again.' });
    }
  };

  const fetchLogin = async () => {
    console.log(inputs.email, inputs.password)
    try {
      const response = await axios.post('http://localhost:5000/User/login', {
        email: inputs.email,
        password: inputs.password
      });
  
      const { accessToken, user } = response.data;
  
      // Use response data to dispatch user information to Redux store
      dispatch(login({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }));
  
      // Optionally, store the token in localStorage or a global state
      localStorage.setItem('accessToken', accessToken); // Save token if needed
  
      navigate('/HomeLogin');
    } catch (error) {
      console.error('Error in login request:', error.response?.data);
      setErrors({ ...errors, server: 'Login failed. Please check your credentials.' });
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setFormSubmitted(true);
      if (isSignup) {
        await fetchRegister();
        setSuccessMessage('Sign Up Done');
      } else {
        await fetchLogin();
        setSuccessMessage('Login Done');
      }
    } else {
      setErrors(validationErrors);
      setFormSubmitted(false);
    }
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setErrors({});
    setFormSubmitted(false);
    setSuccessMessage('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg flex w-3/4 max-w-4xl">
        <div className="w-1/2">
          <img
            src="/top.jpg"
            alt="Signup illustration"
            className="object-cover w-full h-full rounded-l-lg"
          />
        </div>

        <div className="w-1/2 p-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            {isSignup ? 'Sign Up' : 'Login'}
          </h2>

          <form className="w-full" onSubmit={handleSubmit}>
            {isSignup && (
              <>
                <div className="flex flex-col mb-4 w-3/4">
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 ${errors.firstName ? 'border-red-500' : ''}`}
                    placeholder="Enter your first name"
                    value={inputs.firstName}
                    onChange={handleInputs}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>

                <div className="flex flex-col mb-4 w-3/4">
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 ${errors.lastName ? 'border-red-500' : ''}`}
                    placeholder="Enter your last name"
                    value={inputs.lastName}
                    onChange={handleInputs}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </>
            )}

            <div className="flex flex-col mb-4 w-3/4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 ${errors.email ? 'border-red-500' : ''}`}
                placeholder="Enter your email"
                value={inputs.email}
                onChange={handleInputs}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-4 w-3/4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 ${errors.password ? 'border-red-500' : ''}`}
                placeholder="Enter your password"
                value={inputs.password}
                onChange={handleInputs}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Forgot Password Link */}
            {!isSignup && (
              <div className="flex w-3/4 mb-4">
                <Link
                  to="/reset-password"
                  className="text-sm text-indigo-500 hover:text-indigo-700"
                >
                  Forgot Password?
                </Link>
              </div>
            )}

            {isSignup && (
              <div className="mb-6 w-3/4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                  placeholder="Confirm your password"
                  value={inputs.confirmPassword}
                  onChange={handleInputs}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>
            )}

            <button
              type="submit"
              className="w-3/4 bg-indigo-500 text-black font-semibold py-3 rounded-lg hover:bg-indigo-600 transition duration-200"
              style={{ color: '#B88E2F' }}
            >
              {isSignup ? 'Sign Up' : 'Login'}
            </button>
          </form>

          {/* Success Message */}
          {formSubmitted && successMessage && (
            <div className="mt-4 text-green-500 text-lg">
              {successMessage}
            </div>
          )}

          {/* Below the form toggle link */}
          <div className="mt-6 text-center">
            <p className="text-gray-700">
              {isSignup ? 'Already have an account?' : "Don't have an account?"}
            </p>
            <Link
              to="#"
              onClick={toggleForm}
              className="text-decoration-none font-bold hover:text-gray-400"
              style={{ color: "#B88E2F" }}
            >
              {isSignup ? 'Login' : 'Sign Up'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
