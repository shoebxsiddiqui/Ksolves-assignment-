import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center mb-8 md:mb-0 md:items-start">
          <h4 className="text-lg font-bold mb-4">About Us</h4>
          <p className="text-sm text-gray-400">
            Learn more about our company, values, and mission.
          </p>
        </div>
        <div className="flex flex-col items-center mb-8 md:mb-0 md:items-start">
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="text-sm text-gray-400">
            <li>Home</li>
            <li>Shop</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
          <p className="text-sm text-gray-400">Email: shoeb@gmail.com</p>
          <p className="text-sm text-gray-400">Phone: +91 8822882288</p>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; 2024 @Flipkart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
