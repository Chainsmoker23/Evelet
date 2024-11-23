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
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleBuyClick = () => {
        navigate('/buy'); // Redirect to the Buy page route
    };

    return (
        <>
            <div
                className="relative h-screen w-full bg-cover bg-center rounded-br-[150px]"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                {/* Hero Content */}
                <div className="relative z-10 h-full flex flex-col justify-center items-start bg-green-800/ p-8 rounded-lg shadow-lg ml-10 max-w-lg">
                    <h1 className="text-center font-bold text-white mb-7">
                        Revolutionizing Ticketing
                    </h1>
                    <p className="text-lg text-gray-200 mb-5">
                        Evelet simplifies the way you buy event tickets by leveraging the power of tokens. With Evelet Tokens, you unlock priority booking, exclusive discounts, and premium perks for concerts, sports.
                    </p>
                    
                    <button
                        onClick={handleBuyClick} // Add onClick handler
                        className="px-11 py-4 text-white bg-green-400 hover:bg-green-900 rounded-lg translate-x-11"
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
