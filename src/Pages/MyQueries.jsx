import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Eye, Edit2, Trash2, AlertCircle } from 'lucide-react';

export default function MyQueries() {
    const queries = [
        {
          id: 1,
          productName: "Product A",
          productBrand: "Brand X",
          imageUrl: "/api/placeholder/300/200",
          queryTitle: "Looking for better alternatives",
          timestamp: "2024-03-22T10:30:00"
        },
        {
          id: 2,
          productName: "Product B",
          productBrand: "Brand Y",
          imageUrl: "/api/placeholder/300/200",
          queryTitle: "Is there any Better product?",
          timestamp: "2024-03-21T15:20:00"
        }
      ];
    
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Banner Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 mb-8 text-white"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">My Queries</h1>
            <p className="text-indigo-100">Track and manage all your product queries</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold 
                     shadow-lg hover:shadow-xl transition-shadow"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Query
          </motion.button>
        </div>
      </motion.div>

      {/* Queries Grid */}
      {queries.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {queries.map((query, index) => (
            <motion.div
              key={query.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <img 
                src={query.imageUrl} 
                alt={query.productName}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{query.productName}</h3>
              <p className="text-gray-600 mb-2">{query.productBrand}</p>
              <p className="text-sm text-gray-500 mb-4">{query.queryTitle}</p>
              
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                >
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-3 py-2 text-green-600 hover:bg-green-50 rounded-lg"
                >
                  <Edit2 className="w-4 h-4 mr-1" />
                  Update
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center p-8 text-center"
        >
          <AlertCircle className="w-16 h-16 text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Queries Found</h2>
          <p className="text-gray-500 mb-6">Start by adding your first query</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold 
                     shadow-lg hover:shadow-xl transition-shadow"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Query
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}
