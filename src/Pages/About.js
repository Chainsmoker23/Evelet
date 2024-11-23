import React from "react";
import teamImage1 from "../Assets/About/WhatsApp Image 2024-11-21 at 11.21.08 PM.jpeg"; // Replace with actual paths
import teamImage2 from "../Assets/About/WhatsApp Image 2024-11-22 at 9.09.02 PM.jpeg";
import teamImage3 from "../Assets/About/WhatsApp Image 2024-11-22 at 9.13.28 PM.jpeg";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
        About Us
      </h1>
      <p className="text-gray-600 text-lg max-w-2xl text-center mb-10">
        Welcome to Evelet! We are dedicated to revolutionizing the way you buy event tickets. 
        Our platform ensures secure and seamless transactions while delivering the best user experience. 
        Meet our talented team who makes it all possible.
      </p>

      {/* Team Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {/* Team Member 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img
            src={teamImage1}
            alt="Team Member 1"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h2 className="text-lg font-semibold text-green-700">Divesh Sarkar</h2>
          <p className="text-gray-500 text-sm mt-2">Founder & CEO</p>
        </div>

        {/* Team Member 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img
            src={teamImage2}
            alt="Team Member 2"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h2 className="text-lg font-semibold text-green-700">Sarang sujeesh</h2>
          <p className="text-gray-500 text-sm mt-2">Chief Technology Officer</p>
        </div>

        {/* Team Member 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img
            src={teamImage3}
            alt="Team Member 3"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h2 className="text-lg font-semibold text-green-700">Ajay Nikumbhe</h2>
          <p className="text-gray-500 text-sm mt-2">Marketing Head</p>
        </div>
      </div>
    </div>
  );
};

export default About;
