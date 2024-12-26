import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "The Best Products with Reco Finder",
      description:
        "A personalized platform that helps you discover the right products based on your preferences.",
      image: "https://i.ibb.co.com/Lxw4m6x/rb-56033.png",
      color: "bg-indigo-500",
    },
    {
      title: "Your Guide to Perfect Product Choices",
      description:
        "Get recommendations for the best products tailored just for you, making shopping easier and smarter.",
      image: "https://i.ibb.co.com/KGVHG1H/rb-2148431747.png",
      color: "bg-purple-500",
    },
    {
      title: "Discover Top Product Picks with Reco Finder",
      description:
        "Let ReCo Finder guide you to the best products that match your needs and style.",
      image: "https://i.ibb.co.com/sC749mg/rb-5860.png",
      color: "bg-blue-500",
    },
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full min-h-[590px] overflow-hidden bg-gray-100 ">
      {/* Main Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="relative h-full w-full flex items-center">
            {/* Background Color Block */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className={`absolute inset-0 ${slides[currentSlide].color} opacity-10`}
            />

            {/* Content Container */}
            <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center md:text-left"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {slides[currentSlide].title}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {slides[currentSlide].description}
                  </p>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative rounded-lg overflow-hidden shadow-xl"
                >
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full max-h-96 object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-4">
        {/* Previous Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </motion.button>

        {/* Slide Indicators */}
        <div className="flex items-center space-x-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                currentSlide === index ? "bg-indigo-600" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </motion.button>
      </div>
    </div>
  );
}
