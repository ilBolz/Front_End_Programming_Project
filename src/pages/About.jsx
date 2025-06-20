import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 py-12 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl border border-gray-100">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
          About Us
        </h1>
        <p className="text-gray-700 text-lg mb-6 text-center">
          Welcome to our E-Commerce! We are passionate about technology, fashion,
          and innovation. Our mission is to offer our customers a simple, safe,
          and enjoyable shopping experience, with quality products and
          always-available customer service.
        </p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-500 mb-2">
            What We Offer
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>A wide selection of products from top brands</li>
            <li>Fast and trackable shipping</li>
            <li>Secure and flexible payments</li>
            <li>Dedicated customer support</li>
            <li>Exclusive promotions and offers</li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-500 mb-2">Our Team</h2>
          <p className="text-gray-700">
            We are a group of professionals with experience in the digital and
            commercial sector, united by the desire to innovate and meet every
            need of our customers.
          </p>
        </div>
        <div className="text-center mt-8">
          <span className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
