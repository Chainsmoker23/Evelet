import React from 'react';

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">We'd love to hear from you! Feel free to reach out to us.</p>
      </div>

      {/* Address Section */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Office</h2>
        <p className="text-lg text-gray-600">
          Address: Kalasipalya, Bangalore, India
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
        <form action="#" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="col-span-1">
              <label htmlFor="name" className="block text-lg text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* Email Input */}
            <div className="col-span-1">
              <label htmlFor="email" className="block text-lg text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="mt-6">
            <label htmlFor="message" className="block text-lg text-gray-700 mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here"
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 px-7 py-3 text-white bg-green-600 hover:bg-green-500 rounded-md shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
