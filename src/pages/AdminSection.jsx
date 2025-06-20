import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsThunk } from "../redux/AdminThunks";

const AdminSection = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.admin);

  useEffect(() => {
    return () => {
      dispatch({ type: "admin/reset" });
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl mx-auto border border-gray-100">
        <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Admin Product Management
        </h1>
        <div className="flex justify-center mb-6">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition cursor-pointer"
            onClick={() => dispatch(fetchProductsThunk())}
            disabled={loading}
          >
            {loading ? "Loading..." : "Fetch Products"}
          </button>
        </div>
        {error && <p className="text-center text-red-500">Error: {error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-sm bg-blue-50"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-32 mx-auto mb-2 object-contain"
              />
              <h2 className="font-semibold text-lg text-blue-700 mb-1 text-center">
                {product.title}
              </h2>
              <p className="text-gray-600 text-sm mb-2 text-center">
                {product.category}
              </p>
              <p className="text-blue-600 font-bold text-center mb-2">
                ${product.price}
              </p>
              <p className="text-gray-500 text-xs text-center line-clamp-2">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminSection;
