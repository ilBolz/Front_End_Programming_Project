import React from "react";
import ManProduct from "../assets/images/menProduct.jpg";
import WomanProduct from "../assets/images/womanproduct.jpg";
import KidsProduct from "../assets/images/kidsproduct.jpg";

const categories = [
  {
    title: "Men",
    imageUrl: ManProduct,
  },
  {
    title: "Women",
    imageUrl: WomanProduct,
  },
  {
    title: "Kids",
    imageUrl: KidsProduct,
  },
];

const CategorySection = () => {
  return (
    <div className="px-4 md:px-16 lg:px-24 py-8">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex-1 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-blue-300 cursor-default"
          >
            <img
              src={category.imageUrl}
              alt={`${category.title} category`}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center font-semibold text-lg text-gray-800">
              {category.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
