import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(cart.totalPrice);

  useEffect(() => {
    setTotalPrice(cart.totalPrice);
    cart.products.forEach((product) => {
      dispatch(removeFromCart(product.id));
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 py-12 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md border border-gray-100 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Thank you for your purchase!
        </h1>
        <p className="text-lg text-gray-700 mb-4">The total amount paid is:</p>
        <p className="text-4xl font-bold text-blue-700 mb-8">
          ${totalPrice.toFixed(2)}
        </p>
        <p className="text-lg text-gray-700 mb-4">It will be sent to: </p>
        <p className="text-4xl font-bold text-blue-700 mb-8">{cart.address}</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition cursor-pointer"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Checkout;
