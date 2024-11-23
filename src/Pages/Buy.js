import React, { useState } from 'react';
// Import all your SVG images
import buyIllustration from '../Assets/wallet/metamask-vector-logo-seeklogo/bitcoin-svgrepo-com.svg';
import tokenIllustration from '../Assets/wallet/metamask-vector-logo-seeklogo/ethereum-svgrepo-com.svg';
import secureIllustration from '../Assets/wallet/metamask-vector-logo-seeklogo/google-pay-icon-svgrepo-com.svg';
import fastIllustration from '../Assets/wallet/metamask-vector-logo-seeklogo/metamask-seeklogo.svg';
import eventIllustration from '../Assets/wallet/metamask-vector-logo-seeklogo/paypal-svgrepo-com.svg';
import rewardIllustration from '../Assets/wallet/metamask-vector-logo-seeklogo/usdt-svgrepo-com.svg';

const BuyPage = () => {
  const [tokenAmount, setTokenAmount] = useState('');

  const handleBuyTokens = () => {
    alert(`You entered: ${tokenAmount} tokens`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 to-green-300 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side: Text and Input */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Buy Tokens Easily
            </h1>
            <p className="text-gray-600 mb-6">
              Securely purchase tokens for your favorite events or services. Fast and reliable!
            </p>

            <input
              type="text"
              value={tokenAmount}
              onChange={(e) => setTokenAmount(e.target.value)}
              placeholder="Enter token amount"
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              onClick={handleBuyTokens}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-200"
            >
              Buy Tokens
            </button>
          </div>

          {/* Right Side: Images */}
          <div className="md:w-1/2 w-full grid grid-cols-3 gap-1">
            <img
              src={buyIllustration}
              alt="Buy illustration"
              className="w-16 h-16 mx-auto"
            />
            <img
              src={tokenIllustration}
              alt="Token illustration"
              className="w-16 h-16 mx-auto"
            />
            <img
              src={secureIllustration}
              alt="Secure illustration"
              className="w-16 h-16 mx-auto"
            />
            <img
              src={fastIllustration}
              alt="Fast illustration"
              className="w-16 h-16 mx-auto"
            />
            <img
              src={eventIllustration}
              alt="Event illustration"
              className="w-16 h-16 mx-auto"
            />
            <img
              src={rewardIllustration}
              alt="Reward illustration"
              className="w-16 h-16 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
