import React from 'react';
import { Link } from 'react-router-dom'; // if you're using react-router for navigation

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-lg">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-6">
          Oops! The page you are looking for doesn't exist.
        </p>
        <p className="text-lg text-gray-500 mb-6">
          It might have been moved, or the URL might be incorrect. Try returning to the homepage.
        </p>
        <Link
          to="/"
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-500 transition-all duration-200"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
