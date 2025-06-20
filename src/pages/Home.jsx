import React, { useEffect } from "react";
import { Categories, ProductList } from "../assets/mockData";
import HomePage from "../assets/Images/homePage.jpg";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(ProductList));
  });
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full mt-8 md:mt-0 h-96 relative">
          <img
            src={HomePage}
            alt="HomePage Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <p className="text-3xl md:text-5xl font-extrabold leading-tight">
              Everything you love,
            </p>
            <p className="text-3xl md:text-5xl font-extrabold leading-tight">
              just a click away.
            </p>
            <button className="mt-6 bg-white text-black px-4 py-2 rounded shadow transform transition-transform hover:scale-105 duration-300 cursor-pointer">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />

      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.products.slice(0, 5).map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
