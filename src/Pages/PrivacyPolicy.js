import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-lg mb-8 text-center">
          Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p>

        {/* Section 1: Information Collection */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            1. Information We Collect
          </h2>
          <p className="text-gray-600">
            We collect personal information such as your name, email address, and payment details when you use our platform to purchase event tickets. Non-personal information like your device type, browser, and usage data may also be collected.
          </p>
        </div>

        {/* Section 2: How We Use Information */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600">
            The information we collect is used to:
          </p>
          <ul className="list-disc list-inside text-gray-600 ml-4">
            <li>Process your transactions securely.</li>
            <li>Provide customer support.</li>
            <li>Enhance and personalize your experience.</li>
            <li>Send updates about our services and promotions.</li>
          </ul>
        </div>

        {/* Section 3: Sharing Your Information */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            3. Sharing Your Information
          </h2>
          <p className="text-gray-600">
            We do not sell your personal information. However, we may share your data with trusted third-party services to process transactions, comply with legal obligations, or improve our services.
          </p>
        </div>

        {/* Section 4: Data Security */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            4. Data Security
          </h2>
          <p className="text-gray-600">
            We use industry-standard security measures to protect your data from unauthorized access, alteration, or destruction. However, no system is 100% secure, and we cannot guarantee absolute security.
          </p>
        </div>

        {/* Section 5: Your Rights */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            5. Your Rights
          </h2>
          <p className="text-gray-600">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-600 ml-4">
            <li>Access the information we hold about you.</li>
            <li>Request corrections to inaccurate information.</li>
            <li>Request the deletion of your data.</li>
          </ul>
        </div>

        {/* Section 6: Changes to This Policy */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            6. Changes to This Policy
          </h2>
          <p className="text-gray-600">
            We may update this privacy policy periodically. Changes will be posted on this page with an updated revision date.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions or concerns about this privacy policy, please contact us at:
          </p>
          <p className="text-gray-600 mt-2">
            Email: <a href="mailto:support@evelet.com" className="text-green-600 underline">support@evelet.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
