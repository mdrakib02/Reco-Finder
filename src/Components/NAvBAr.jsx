import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Search, LogIn, LogOut, User, UserPlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 }
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/queries", text: "Queries" },
    { to: "/recommendations", text: "Recommendations For Me" },
    { to: "/my-queries", text: "My Queries" },
    { to: "/add-queries", text: "Add Queries" },
    { to: "/my-recommendations", text: "My Recommendations" }
  ];

  const authLinks = [
    { icon: LogIn, text: "Login", to: "/login" },
    { icon: UserPlus, text: "Sign Up", to: "/register" },
    { icon: LogOut, text: "Log Out", to: "/logout" }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Website Name */}
          <NavLink to="/">
            <motion.div 
              className="flex-shrink-0 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-800">
                RECO FIND
              </span>
            </motion.div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `
                  text-gray-600 hover:text-indigo-600 transition-colors duration-200
                  ${isActive ? 'text-indigo-600 font-semibold' : ''}
                `}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.text}
                </motion.div>
              </NavLink>
            ))}
          </div>

          {/* User Section */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200">
                <User className="h-5 w-5 text-indigo-600" />
              </div>
            </motion.button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={menuVariants}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                >
                  {authLinks.map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.to}
                      className={({ isActive }) => `block w-full`}
                    >
                      <motion.div
                        variants={itemVariants}
                        whileHover={{ backgroundColor: "#EEF2FF", color: "#4F46E5" }}
                        className="px-4 py-2 text-left text-gray-600 flex items-center"
                      >
                        <item.icon className="h-5 w-5 mr-2" />
                        <span>{item.text}</span>
                      </motion.div>
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `
                    block px-3 py-2 rounded-md text-base font-medium
                    ${isActive 
                      ? 'text-indigo-600 bg-indigo-50' 
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'}
                  `}
                >
                  <motion.div
                    variants={itemVariants}
                  >
                    {link.text}
                  </motion.div>
                </NavLink>
              ))}

              {/* Mobile Auth Links */}
              {authLinks.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.to}
                  className={({ isActive }) => `
                    block px-3 py-2 rounded-md text-base font-medium
                    ${isActive 
                      ? 'text-indigo-600 bg-indigo-50' 
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'}
                  `}
                >
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center"
                  >
                    <item.icon className="h-5 w-5 mr-2" />
                    <span>{item.text}</span>
                  </motion.div>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}