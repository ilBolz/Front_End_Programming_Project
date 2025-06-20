import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const isEmailValid = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid =
    form.name.trim() !== "" &&
    isEmailValid(form.email) &&
    form.message.trim() !== "";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 py-12 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl border border-gray-100">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-gray-700 text-lg mb-8 text-center">
          Do you have questions, suggestions, or need support? Fill out the form
          below or contact us directly. Our team will get back to you as soon as
          possible!
        </p>
        <form className="mb-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Type your message..."
              rows={4}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={form.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isFormValid}
            onClick={(e) => {
              e.preventDefault();
              if (!isFormValid) return;
              alert("Message sent! We will get back to you soon.");
              navigate("/");
            }}
          >
            Send Message
          </button>
        </form>
        <div className="border-t pt-6 text-center">
          <h2 className="text-xl font-semibold text-blue-500 mb-2">
            Contact Information
          </h2>
          <p className="text-gray-700">Email: info@ecommerce.com</p>
          <p className="text-gray-700">Phone: +1 234 567 8901</p>
          <p className="text-gray-700">
            Address: Main Street 123, City, Country
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
