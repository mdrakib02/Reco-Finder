import React, { useContext } from 'react';
import Slider from '../Components/HomeComponets/Slider';
import FindFavoriteProducts from '../Components/FindFavoriteProducts';
import TrendingProducts from '../Components/TrendingProducts';
import ContactUS from '../Components/ContactUS';
import AuthContext from '../Provider/AuthContext';
import { motion } from 'framer-motion';

const Spinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
    <motion.div 
      className="w-16 h-16 border-4 border-indigo-500 rounded-full border-t-transparent"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

export default function Home() {
  const { loader } = useContext(AuthContext);

  return (
    <div className="relative">
      {loader && <Spinner />}
      <Slider />
      <div>
        <FindFavoriteProducts />
        <TrendingProducts />
        <ContactUS />
      </div>
    </div>
  );
}
