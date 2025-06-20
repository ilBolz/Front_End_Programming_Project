import React from "react";
import { FaHeadset, FaLock, FaShippingFast, FaTag } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-blue-400" />,
      title: "Free shipping",
      description: "Get your order deliverd with no extra cost",
    },
    {
      icon: <FaHeadset className="text-3xl text-blue-400" />,
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icon: <FaMoneyBill1Wave className="text-3xl text-blue-400" />,
      title: "Discount",
      description: "Full refound policy",
    },
    {
      icon: <FaLock className="text-3xl text-blue-400" />,
      title: "Payment",
      description: "Safe payment",
    },
    {
      icon: <FaTag className="text-3xl text-blue-400" />,
      title: "Discount",
      description: "Enjoy the best prices on our products",
    },
  ];
  return (
    <div className="bg-blue-50 pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-md bg-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-blue-400 cursor-default"
          >
            {item.icon}
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600 ">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
