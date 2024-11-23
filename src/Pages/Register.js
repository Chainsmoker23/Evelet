import React, { useState } from "react";
import onlyFansImage from "../Assets/Register/onlyfans-seeklogo.svg"; // Replace with your OnlyFans image path
import googleImage from "../Assets/Register/google-color-svgrepo-com.svg"; // Replace with your Google image path

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showManualForm, setShowManualForm] = useState(false); // State to toggle the form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleOnlyFansSignup = () => {
    alert("Redirecting to OnlyFans signup...");
  };

  const handleGoogleSignup = () => {
    alert("Redirecting to Google signup...");
  };

  const toggleManualForm = () => {
    setShowManualForm((prev) => !prev); // Toggle form visibility
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-700 flex flex-col items-center justify-center px-4 py-12">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Signup</h1>
        <p className="text-lg text-gray-600">
          Create an account to get started with Evelet.
        </p>
      </div>

      {/* Signup Options */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md mb-6">
        <button
          onClick={handleOnlyFansSignup}
          className="flex items-center justify-center w-full mb-4 px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200"
        >
          <img
            src={onlyFansImage}
            alt="OnlyFans logo"
            className="w-6 h-6 mr-3"
          />
          Signup with OnlyFans
        </button>

        <button
          onClick={handleGoogleSignup}
          className="flex items-center justify-center w-full px-4 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-200"
        >
          <img
            src={googleImage}
            alt="Google logo"
            className="w-6 h-6 mr-3"
          />
          Signup with Google
        </button>

        <button
          onClick={toggleManualForm}
          className="flex items-center justify-center w-full mt-4 px-4 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-all duration-200"
        >
          Manual Signup
        </button>
      </div>

      {/* Manual Signup Form (Hidden Initially) */}
      {showManualForm && (
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-lg text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-lg text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-7 py-3 text-white bg-green-600 hover:bg-green-500 rounded-md shadow-md"
            >
              Register
            </button>
          </form>
        </div>
      )}

      {/* Login Redirect */}
      <div className="text-center mt-6">
        <p className="text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-green-600 hover:text-green-500">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
