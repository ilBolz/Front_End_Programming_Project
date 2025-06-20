import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAddress } from "../redux/CartSlice";

const ChangeAddress = ({ onCancel }) => {
  const [newAddress, setNewAddress] = useState("");
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setNewAddress(cart.address);
    // eslint-disable-next-line
  }, []);

  const onSave = () => {
    if (newAddress.trim() === "") {
      alert("Address cannot be empty");
      return;
    }
    dispatch(changeAddress(newAddress));
    // Dispatch action to save the new address
    // Assuming you have an action like setAddress in your cart slice
    // dispatch(setAddress(address));
    onCancel(); // Close the modal after saving
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter new address"
        className="border p-2 w-full mb-4"
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={onSave}
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
