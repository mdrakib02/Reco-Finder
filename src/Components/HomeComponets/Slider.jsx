import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const colors = ['#EEF2FF', '#F5F3FF', '#EFF6FF', '#F0F9FF'];
  const slides = [
    {
      title: "The Best Products with Reco Finder",
      description: "A personalized platform that helps you discover the right products based on your preferences.",
      image: "https://i.ibb.co.com/Lxw4m6x/rb-56033.png",
    },
    {
      title: "Your Guide to Perfect Product Choices",
      description: "Get recommendations for the best products tailored just for you, making shopping easier and smarter.",
      image: "https://i.ibb.co.com/KGVHG1H/rb-2148431747.png",
    },
    {
      title: "Discover Top Product with Reco Finder",
      description: "Let ReCo Finder guide you to the best products that match your needs and style.",
      image: "https://i.ibb.co.com/sC749mg/rb-5860.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <motion.div
      className="relative w-full min-h-[420px] sm:min-h-[300px] overflow-hidden"
      animate={{ background: colors }}
      transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(79, 70, 229, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)",
            "linear-gradient(45deg, rgba(124, 58, 237, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
            "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(96, 165, 250, 0.1) 100%)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <div className="h-full flex flex-col">
        <motion.div 
          className="text-center pt-6 sm:pt-8 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            animate={{ 
              color: ['#4F46E5', '#6366F1', '#4338CA', '#4F46E5'],
              textShadow: [
                '0 0 8px rgba(79, 70, 229, 0.3)',
                '0 0 16px rgba(99, 102, 241, 0.3)',
                '0 0 8px rgba(67, 56, 202, 0.3)',
                '0 0 8px rgba(79, 70, 229, 0.3)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Discover Amazing Products
          </motion.h2>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="flex-1 flex items-center px-4 py-6 sm:py-8"
          >
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="text-center md:text-left space-y-3 sm:space-y-4 order-2 md:order-1">
                <motion.h3 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800"
                >
                  {slides[currentSlide].title}
                </motion.h3>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm sm:text-base text-gray-600"
                >
                  {slides[currentSlide].description}
                </motion.p>
              </div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative mx-auto w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] order-1 md:order-2"
              >
                <img
                  src={slides[currentSlide].image}
                  alt="slider"
                  className="w-full h-[180px] sm:h-[220px] md:h-[300px] object-cover rounded-xl shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-4 sm:space-x-6 px-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="p-1.5 sm:p-2 rounded-full bg-indigo-500 text-white shadow-lg"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>

          <div className="flex space-x-1.5 sm:space-x-2">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentSlide(index)}
                className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${
                  currentSlide === index ? "bg-indigo-500" : "bg-indigo-200"
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="p-1.5 sm:p-2 rounded-full bg-indigo-500 text-white shadow-lg"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}