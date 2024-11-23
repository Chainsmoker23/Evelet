import React from "react";
import { useNavigate } from "react-router-dom";
import './Css/Home.css';
import backgroundImage from "../Assets/pexels-perfect-lens-8268996.jpg"; 
import Token from "./Token";
import About from "./About";
import FAQ from "./FQA";
import Features from "./Features";
import ContactUs from "./Contact";

const Home = () => {
    const navigate = useNavigate();

    const handleBuyClick = () => {
        navigate('/buy'); // Redirect to the Buy page route
    };

    return (
        <>
            <div
                className="relative h-screen w-full bg-cover bg-center max-w-full"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                {/* Hero Content */}
                <div className="relative z-10 h-full flex flex-col justify-center items-start bg-green-800/60 p-8 rounded-lg shadow-lg ml-10 max-w-lg sm:max-w-full">
                    <h1 className="text-2xl sm:text-4xl font-bold text-white mb-7 text-center sm:text-left">
                        Revolutionizing Ticketing
                    </h1>
                    <p className="text-base sm:text-lg text-gray-200 mb-5 text-center sm:text-left">
                        Evelet simplifies the way you buy event tickets by leveraging the power of tokens. With Evelet Tokens, you unlock priority booking, exclusive discounts, and premium perks for concerts, sports.
                    </p>
                    
                    <button
                        onClick={handleBuyClick} 
                        className="px-6 py-3 sm:px-11 sm:py-4 text-white bg-green-400 hover:bg-green-900 rounded-lg translate-x-11 mt-4 sm:mt-8"
                    >
                        Buy
                    </button>
                </div>
            </div>
            <Token />
            <Features />
            <FAQ />
            <About />
            <ContactUs />
        </>
    );
};

export default Home;
