import React from "react";
import tokenVideo1 from "../Videos/Huobi Token.mp4"; // Replace with hosted video URLs if needed
import tokenVideo2 from "../Videos/WhatsApp Video 2024-11-24 at 1.42.14 AM.mp4";
import tokenVideo3 from "../Videos/WhatsApp Video 2024-11-24 at 1.42.15 AM.mp4";

const Features = () => {
  const tokenData = {
    name: "Evelet Token",
    totalSupply: "10,000,000",
    tokens: [
      {
        name: "General Token",
        video: tokenVideo1,
        description: `The General Token is your gateway to all regular events. It offers 
        affordable access while maintaining the convenience of blockchain technology. Ideal for 
        everyday users who want a secure and straightforward ticketing experience.`,
        features: [
          "Access to standard event areas.",
          "Secure transactions via blockchain.",
          "Affordable pricing for all users.",
        ],
      },
      {
        name: "Premium Token",
        video: tokenVideo2,
        description: `Step up with the Premium Token for an elevated event experience. With added 
        perks and premium seating options, it’s perfect for those who want to enjoy events in 
        style.`,
        features: [
          "Priority access to premium areas.",
          "Exclusive perks and giveaways.",
          "Discounts on future purchases.",
        ],
      },
      {
        name: "VIP Token",
        video: tokenVideo3,
        description: `The VIP Token is the ultimate ticket to exclusive experiences. Enjoy 
        first-class treatment with backstage passes, meet-and-greet opportunities, and much more. 
        Reserved for the most enthusiastic and loyal event-goers.`,
        features: [
          "Backstage access to events.",
          "Meet-and-greet opportunities with artists.",
          "Exclusive VIP lounge access.",
        ],
      },
    ],
    benefits: [
      "Effortless event ticket purchases using blockchain technology.",
      "Enhanced security and transparency for ticket transactions.",
      "Access to exclusive events and early-bird offers.",
      "Significant savings on transaction fees.",
      "Participation in decentralized event planning and voting.",
    ],
  };

  return (
    <div className="min-h-screen bg-green-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-4xl font-bold text-green-800 text-center mb-10">
          Features of {tokenData.name}
        </h1>

        {/* Total Supply Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-green-800">
            Total Supply
          </h2>
          <p className="text-3xl font-bold text-green-800 mt-1">
            {tokenData.totalSupply}
          </p>
          <p className="text-gray-700 mt-2">
            Total tokens available for seamless event ticketing.
          </p>
        </div>

        {/* Tokens Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-green-800 mb-12 text-center">
            Token Types
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {tokenData.tokens.map((token, index) => (
              <div
                key={index}
                className="bg-white p-6 flex flex-col items-center"
              >
                {/* Token Video */}
                <video
                  src={token.video}
                  autoPlay
                  loop
                  muted
                  className="w-40 h-40  mb-6  object-cover"
                ></video>
                {/* Token Details */}
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  {token.name}
                </h3>
                <p className="text-gray-700 text-center mb-4">
                  {token.description}
                </p>
                <ul className="text-left space-y-2">
                  {token.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-600"
                    >
                      <span className="w-4 h-4 bg-green-500 text-white flex items-center justify-center rounded-full mr-3">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">
            Benefits of {tokenData.name}
          </h2>
          <ul className="space-y-4">
            {tokenData.benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center text-lg text-gray-700"
              >
                <span className="w-5 h-5 bg-green-500 text-white flex items-center justify-center rounded-full mr-3">
                  ✓
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
