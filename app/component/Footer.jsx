const Footer = () => {
    return (
      <footer className="bg-gray-50">
        {/* Newsletter Section */}
        <div className="bg-black text-white py-6 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-xl md:text-2xl font-bold text-center md:text-left mb-4 md:mb-0">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
              <div className="flex items-center bg-white rounded-md overflow-hidden w-full md:w-72">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="p-2 w-full outline-none text-gray-700"
                />
                <span className="px-3 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 6.487a2.487 2.487 0 10-4.97 0 2.487 2.487 0 104.97 0zM6.9 18.4h10.2c.154-.01.308-.01.462 0a5.973 5.973 0 014.338 2.138H2.1c.986-1.152 2.563-2.138 4.8-2.138z"
                    />
                  </svg>
                </span>
              </div>
              <button className="px-6 py-2 bg-gray-200 rounded-md hover:bg-gray-300 text-gray-800">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
  
        {/* Footer Links Section */}
        <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">SHOP.CO</h3>
            <p className="text-gray-600">
              We have clothes that suit your style and which you’re proud to wear. From women to men.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">COMPANY</h4>
            <ul className="text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Career
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">HELP</h4>
            <ul className="text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-black">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">FAQ</h4>
            <ul className="text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-black">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Manage Deliveries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Payments
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">RESOURCES</h4>
            <ul className="text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-black">
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Development Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  How-to Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  YouTube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="bg-gray-100 py-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <p className="text-sm text-gray-500">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <img src="/Badge.png" alt="Visa" className="w-auto" />
              <img src="/Badge1.png" alt="Mastercard" className="w-auto" />
              <img src="/Badge2.png" alt="PayPal" className="w-auto" />
              <img src="/Badge3.png" alt="Apple Pay" className="w-auto" />
              <img src="/Badge4.png" alt="Apple Pay" className="w-auto" />
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  