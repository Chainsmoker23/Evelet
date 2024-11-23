 const Footer = () => {
  return (
    <footer className="bg-green-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-semibold text-white">Evelet</h2>
          <p className="mt-4 text-gray-400">
            Building the future with elegant, scalable, and secure solutions.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="3" className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.56v15.36c0 .74-.59 1.33-1.33 1.33H1.33C.59 21.25 0 20.66 0 19.92V4.56C0 3.82.59 3.23 1.33 3.23h21.34c.74 0 1.33.59 1.33 1.33zm-8.94 3.92v3.83h-2.86V8.48h-2.86v3.83h-2.86v4.05h2.86v3.83h2.86v-3.83h2.86v-4.05h-2.86z" />
              </svg>
            </a>
            <a href="7" className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.667 3.333H3.333A3.336 3.336 0 0 0 0 6.667v10.666A3.336 3.336 0 0 0 3.333 20.667h17.334A3.336 3.336 0 0 0 24 17.333V6.667A3.336 3.336 0 0 0 20.667 3.333zM12 17.333A5.333 5.333 0 1 1 12 6.667a5.333 5.333 0 0 1 0 10.666zm6.667-10.667a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0z" />
              </svg>
            </a>
            <a href="9" className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.67 5.015A8.48 8.48 0 0 1 20.136 6c.023.277.023.554.023.832 0 8.508-6.467 18.342-18.342 18.342-.268 0-.536-.023-.803-.045a12.94 12.94 0 0 0 7.02-2.047A6.38 6.38 0 0 1 4.21 19.3c.49.046.98.069 1.47.069.705 0 1.382-.092 2.03-.268a6.37 6.37 0 0 1-5.1-6.245v-.092c.857.481 1.845.771 2.885.8a6.36 6.36 0 0 1-2.835-5.29c.482.268.982.446 1.51.446a6.35 6.35 0 0 1-2.83-5.289 18.012 18.012 0 0 0 13.064 6.617c-.045-.285-.068-.571-.068-.857A6.37 6.37 0 0 1 22.67 5.015z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-medium text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="/about"
                className="hover:text-white transition-all duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/career"
                className="hover:text-white transition-all duration-200"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="3"
                className="hover:text-white transition-all duration-200"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="contact"
                className="hover:text-white transition-all duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* Resources */}
        <div>
          <h3 className="font-medium text-white">Resources</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="faq"
                className="hover:text-white transition-all duration-200"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="privacy"
                className="hover:text-white transition-all duration-200"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="7"
                className="hover:text-white transition-all duration-200"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <h3 className="font-medium text-white">Stay Connected</h3>
          <p className="mt-4 text-gray-400">
            Subscribe to our newsletter to get the latest updates.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-gray-900 rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 text-white rounded-r-md hover:bg-blue-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center py-6 border-t border-gray-700 mt-6">
        <p className="text-sm text-gray-500">
          © 2024 YourBrand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
