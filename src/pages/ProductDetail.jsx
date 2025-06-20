import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/ProductSlice";
import { addToCart } from "../redux/CartSlice";
import { ProductList } from "../assets/mockData";

const ProductDetail = () => {
  const { id } = useParams();
  const [products, setProductsState] = useState([]);
  const product = products && products.find((p) => String(p.id) === String(id));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(ProductList));
    setProductsState(ProductList);
  }, [dispatch]);

  if (!products || products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md border border-gray-100 text-center">
          <h2 className="text-xl font-bold text-blue-600 mb-4">
            Loading product details...
          </h2>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md border border-gray-100 text-center">
          <h2 className="text-xl font-bold text-blue-600 mb-4">
            Product not found
          </h2>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert("Product added to cart!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 py-12 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
        <img
          src={product.image}
          alt={product.title || product.name}
          className="w-64 h-64 object-contain rounded mb-4 md:mb-0"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-blue-700 mb-2">
            {product.title || product.name}
          </h1>
          <p className="text-gray-700 mb-4">
            {product.description || "No description available."}
          </p>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price}
            </span>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition cursor-pointer"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
