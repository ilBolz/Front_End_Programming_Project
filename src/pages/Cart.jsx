import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import EmptyCart from "../assets/Images/emptycart.png";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const products = cart?.products || [];
  const navigate = useNavigate();

  return (
    <div className="px-4 md:px-16 lg:px-24 py-8">
      {products.length > 0 ? (
        <div>
          <div className="max-w-6xl mx-auto bg-white rounded-lg shadow p-6 border border-gray-100">
            <h3 className="text-xl font-bold mb-4">SHOPPING CART</h3>
            <div className="w-full">
              {/* Header */}
              <div className="grid grid-cols-12 font-semibold border-b pb-2 mb-2 text-center">
                <div className="col-span-5 text-left pl-2">PRODUCTS</div>
                <div className="col-span-2">PRICE</div>
                <div className="col-span-2">QUANTITY</div>
                <div className="col-span-2">SUBTOTAL</div>
                <div className="col-span-1">REMOVE</div>
              </div>
              {products.map((product) => (
                <div
                  key={product.id}
                  className="grid grid-cols-12 items-center border-b py-4 text-center"
                >
                  <div className="col-span-5 flex items-center text-left pl-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{product.name}</h3>
                    </div>
                  </div>
                  <div className="col-span-2">${product.price.toFixed(2)}</div>
                  <div className="col-span-2 flex justify-center items-center space-x-2">
                    <button
                      className="px-2 py-1 border rounded"
                      aria-label="Decrease quantity"
                      onClick={() => dispatch(decreaseQuantity(product.id))}
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      className="px-2 py-1 border rounded"
                      aria-label="Increase quantity"
                      onClick={() => dispatch(increaseQuantity(product.id))}
                    >
                      +
                    </button>
                  </div>
                  <div className="col-span-2">
                    <p> ${(product.quantity * product.price).toFixed(2)}</p>
                  </div>
                  <div className="col-span-1 flex justify-center">
                    <button
                      className="text-blue-500 hover:text-blue-700 cursor-pointer"
                      aria-label="Remove product"
                      onClick={() => dispatch(removeFromCart(product.id))}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="max-w-md ml-auto mt-8 bg-white rounded-lg shadow p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-blue-600 mb-4">TOTAL</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Total items:</span>
                <span className="font-semibold">{cart.totalQuantity}</span>
              </div>
              <div className="mb-2">
                <p className="text-gray-600 mb-1">Shipping:</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">
                      Shipping to:{" "}
                      <span className="text-sm font-medium">
                        {cart.address}
                      </span>
                    </p>
                  </div>
                  <button
                    className="ml-4 px-3 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 text-xs font-semibold transition cursor-pointer"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Change address
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Total Price:</span>
                <span className="font-bold text-lg text-blue-700">
                  ${cart.totalPrice.toFixed(2)}
                </span>
              </div>
              <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition cursor-pointer"
                onClick={() => navigate("/checkout")}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ChangeAddress onCancel={() => setIsModalOpen(false)} />
          </Modal>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16">
          <p className="text-4xl font-bold text-blue-600 mb-8">
            Your cart is empty
          </p>
          <img src={EmptyCart} alt="Empty Cart" className="h-96" />
        </div>
      )}
    </div>
  );
};

export default Cart;
