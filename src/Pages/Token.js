 import React from "react";
import video1 from "../Videos/Huobi Token.mp4"; // Replace with actual video paths
import video2 from "../Videos/WhatsApp Video 2024-11-24 at 1.42.14 AM.mp4";
import video3 from "../Videos/WhatsApp Video 2024-11-24 at 1.42.15 AM.mp4";
import { useNavigate } from "react-router-dom";


const TokenUses = () => {
     const navigate = useNavigate();
     const handleBuyClick = () => {
     navigate('/buy'); 
 }
  
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Evelet Token Use Cases</h1>
        <p className="text-gray-700 text-lg">
          Discover how Evelet Tokens make event ticketing smarter, faster, and more rewarding.
        </p>
      </div>

      {/* Use Cases Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Use Case 1 */}
        <div className="bg-white p-11 shadow-2xl rounded-br-[70px] text-center flex flex-col items-center">
          <video
            src={video1}
            className="w-40 h-40 mb-6 rounded-full object-cover"
            autoPlay
            muted
            loop
          />
          <h2 className="text-xl font-bold text-green-700 mb-4">Priority Booking</h2>
          <p className="text-gray-600">
            Use Evelet Tokens to access early bird tickets before anyone else.
          </p>
         
          <button  onClick={handleBuyClick} className="mt-11 px-11 py-4 text-white bg-green-600 hover:bg-green-900 rounded-lg ">
         Buy
     </button>
        </div>

        {/* Use Case 2 */}
        <div className="bg-white p-11 shadow-2xl rounded-br-[70px] text-center flex flex-col items-center">
          <video
            src={video2}
            className="w-40 h-40 mb-6 rounded-full object-cover"
            autoPlay
            muted
            loop
          />
          <h2 className="text-xl font-bold text-green-700 mb-4">Discounted Tickets</h2>
          <p className="text-gray-600">
            Redeem tokens for discounted tickets to your favorite events and shows.
          </p>
          <button className="mt-10 px-11 py-4 text-white bg-gray-400 hover:bg-green-900 rounded-lg ">
          Coming Soon..
          </button>
        </div>

        {/* Use Case 3 */}
        <div className="bg-white p-11 shadow-2xl rounded-br-[70px] text-center flex flex-col items-center">
          <video
            src={video3}
            className="w-40 h-40 mb-6 rounded-full object-cover"
            autoPlay
            muted
            loop
          />
          <h2 className="text-xl font-bold text-green-700 mb-4">Exclusive Perks</h2>
          <p className="text-gray-600">
            Unlock VIP access, premium seats, and backstage passes with Evelet Tokens.
          </p>
          <button className="mt-10 px-11 py-4 text-white bg-gray-400 hover:bg-green-900 rounded-lg ">
            Coming Soon..
         </button>
        </div>
      </div>
    </div>
  );
};

export default TokenUses