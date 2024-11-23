import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Evelet?",
      answer:
        "Evelet is a platform that allows you to buy event tickets seamlessly using our proprietary Evelet Tokens. It simplifies the purchasing process and offers secure transactions.",
    },
    {
      question: "How do I purchase tickets using Evelet Tokens?",
      answer:
        "To purchase tickets, first ensure you have Evelet Tokens in your wallet. Then, browse events on our platform, select your desired tickets, and complete the transaction using the tokens.",
    },
    {
      question: "Are Evelet Tokens secure to use?",
      answer:
        "Yes, Evelet Tokens are based on blockchain technology, ensuring secure and transparent transactions for all users.",
    },
    {
      question: "Can I refund tickets purchased with Evelet Tokens?",
      answer:
        "Refund policies vary by event organizer. Please refer to the event details for refund eligibility or contact support for assistance.",
    },
    {
      question: "How can I contact support for further assistance?",
      answer:
        "If you need help, you can reach out to us at support@evelet.com. Our team is here to assist you.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-lg mb-10 text-center">
          Click on a question to see the answer.
        </p>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4"
            >
              {/* Question */}
              <button
                className="w-full text-left flex justify-between items-center font-semibold text-green-700 text-lg"
                onClick={() => toggleQuestion(index)}
              >
                {item.question}
                <span className="ml-2">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {activeIndex === index && (
                <p className="mt-3 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
