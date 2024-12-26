import React from 'react';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Smart Watch Pro', price: '$299', image: 'https://i.ibb.co.com/p2BCSw3/pngwing-com-5.png' },
  { id: 2, name: 'Wireless Earbuds', price: '$159', image: 'https://i.ibb.co.com/j6Nfvcb/pngwing-com-4.png' },
  { id: 3, name: 'Ultra HD Camera', price: '$899', image: 'https://i.ibb.co.com/j6Nfvcb/pngwing-com-4.png' },
  { id: 4, name: 'Gaming Console', price: '$499', image: 'https://i.ibb.co.com/j6Nfvcb/pngwing-com-4.png' },
  { id: 5, name: 'Laptop Elite', price: '$1299', image: 'https://i.ibb.co.com/j6Nfvcb/pngwing-com-4.png' },
  { id: 6, name: 'Smartphone X', price: '$799', image: 'https://i.ibb.co.com/Rv82nmP/pngwing-com-1.png' },
  { id: 7, name: 'Tablet Pro', price: '$649', image: 'https://i.ibb.co.com/Rv82nmP/pngwing-com-1.png' },
  { id: 8, name: 'Smart Speaker', price: '$199', image: 'https://i.ibb.co.com/yqtv3nW/pngwing-com.png' },
];






const colors = ['#4F46E5', '#7C3AED', '#2563EB', '#4338CA'];

export default function TrendingProducts() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <motion.h3 
          animate={{ 
            color: colors,
            transition: { 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse" 
            }
          }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Trending Products
        </motion.h3>
        <p className="text-lg text-gray-600">
          Discover our most popular items this season
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: colors.map(color => `linear-gradient(to bottom, ${color}20, ${color}40)`),
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
              <p className="text-gray-600 mb-4">{product.price}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  backgroundColor: colors,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="w-full text-white py-2 px-4 rounded-lg"
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
