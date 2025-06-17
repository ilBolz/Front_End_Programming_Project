import React from "react";
import { Categories } from "../assets/mockData";
import HomePage from "../assets/Images/homePage.jpg";

const Home = () => {
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-black text-white text-xs font-bold px-2 py-2.5">
            SHOP BY CATEGORIES
          </div>
          <ul className="space-y-4 bg-gray-100 p-3">
            {Categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border border-blue-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
          <img src={HomePage} alt="HomePage Image" />
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-white font-bold text-center">
            <p className="text-5xl font-extrabold">Everything you love,</p>
            <p className="text-5xl font-extrabold">just a click away.</p>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
            <button className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200 hover:scale-105 transition duration-300">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
