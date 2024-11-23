import React, { useState } from "react";
import googleImage from "../Assets/Register/google-color-svgrepo-com.svg"; // Replace with your Google image path
import onlyFansImage from "../Assets/Register/onlyfans-seeklogo.svg"; // Replace with your OnlyFans image path

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showLoginForm, setShowLoginForm] = useState(false); // Toggle form visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  const handleGoogleLogin = () => {
    alert("Redirecting to Google login...");
  };

  const handleOnlyFansLogin = () => {
    alert("Redirecting to OnlyFans login...");
  };

  const toggleLoginForm = () => {
    setShowLoginForm((prev) => !prev); // Toggle login form visibility
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 to-green-300 flex flex-col items-center justify-center px-4 py-12">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Login</h1>
        <p className="text-lg text-gray-600">
          Welcome back! Please log in to access your account.
        </p>
      </div>

      {/* Login Options */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md mb-6">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full mb-4 px-4 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-200"
        >
          <img
            src={googleImage}
            alt="Google login"
            className="w-6 h-6 mr-3"
          />
          Login with Google
        </button>

        <button
          onClick={handleOnlyFansLogin}
          className="flex items-center justify-center w-full px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200"
        >
          <img
            src={onlyFansImage}
            alt="OnlyFans login"
            className="w-6 h-6 mr-3"
          />
          Login with OnlyFans
        </button>
      </div>

      {/* Toggle Button */}
      {!showLoginForm && (
        <button
          onClick={toggleLoginForm}
          className="px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-500 transition-all duration-200"
        >
          Show Login Form
        </button>
      )}

      {/* Login Form */}
      {showLoginForm && (
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md mt-6">
          <form onSubmit={handleSubmit}>
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
              Login
            </button>
          </form>
        </div>
      )}

      {/* Register Redirect */}
      <div className="text-center mt-6">
        <p className="text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-green-600 hover:text-green-500">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
