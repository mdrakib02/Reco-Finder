import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function FindFavoriteProducts() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAllProducts(searchTerm.trim());
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async (name) => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products?limit=${6}&${name ? `name=${name}` : ''}`);
    setProducts(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-800">
            Find Your Favorite Products
          </h3>
          <p className="text-lg text-indigo-600">
            Discover amazing items from our collection
          </p>
        </motion.div>

        <form onSubmit={handleSearch} className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full px-6 py-4 text-lg text-gray-700 bg-white border-2 border-indigo-200 rounded-xl focus:outline-none focus:border-indigo-500 shadow-lg"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-4 text-lg font-semibold text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl shadow-lg transition-colors duration-200 sm:w-auto w-full"
            >
              Search
            </motion.button>
          </div>
        </form>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="mb-6 flex justify-center">
                  <img
                    src={product?.img}
                    alt={product?.title}
                    className="rounded-xl object-cover h-48 w-48"
                  />
                </div>
                <span className="text-sm text-indigo-500 font-medium">
                  Brand: {product?.brand}
                </span>
                <h2 className="text-xl font-bold mt-2 text-gray-800">
                  {product?.name}
                </h2>
                <div className="mt-6">
                  <Link to="/queries">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl font-medium transition-colors duration-200"
                    >
                      View Details
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}