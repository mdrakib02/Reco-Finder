import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Search, LogIn, LogOut, User, UserPlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../Provider/AuthProvider";
import { button, div, img } from "framer-motion/client";
import toast from "react-hot-toast";

// Individual NavLink component
const StyledNavLink = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      text-gray-600 hover:text-indigo-600 transition-colors duration-200
      ${isActive ? "text-indigo-600 font-semibold" : ""}
      ${className || ""}
    `}
  >
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      {children}
    </motion.div>
  </NavLink>
);

// Mobile NavLink component
const MobileNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      block px-3 py-2 rounded-md text-base font-medium
      ${
        isActive
          ? "text-indigo-600 bg-indigo-50"
          : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
      }
    `}
  >
    <motion.div
      variants={{
        closed: { opacity: 0, x: -10 },
        open: { opacity: 1, x: 0 },
      }}
    >
      {children}
    </motion.div>
  </NavLink>
);

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
const handleLogOut =async()=>{
  
  try {
    await logOut()

    toast.success('Logout Successful')
    
  } catch (err) {
    console.log(err)
    toast.error(err?.message)
  }
}
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <StyledNavLink  to="/">
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
          </StyledNavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/queries">Queries</StyledNavLink>
            <StyledNavLink to="/recommendations">
              Recommendations For Me
            </StyledNavLink>
            <StyledNavLink to="/my-queries">My Queries</StyledNavLink>
            <StyledNavLink to="/add-queries">Add Queries</StyledNavLink>
            <StyledNavLink to="/my-recomandation">
              My Recommendations
            </StyledNavLink>
          </div>

          {/* User Menu */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <div
                data-tip={user?.displayNAme}
                className="h-8 tooltip tooltip-bottom w-8 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200"
              >
                {user ? (
                  <img referrerPolicy="no-referrer" src={user?.photoURL} alt="" className="rounded-2xl" />
                ) : (
                  <User className="h-5 w-5 text-indigo-600" />
                )}
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
                  {user ? (
                    <button onClick={handleLogOut}>
                      <StyledNavLink  to="/" className="block w-full">
                        <motion.div
                          variants={{
                            closed: { opacity: 0, x: -10 },
                            open: { opacity: 1, x: 0 },
                          }}
                          whileHover={{
                            backgroundColor: "#EEF2FF",
                            color: "#4F46E5",
                          }}
                          className="px-4 py-2 text-left text-gray-600 flex items-center"
                        >
                          <LogOut className="h-5 w-5 mr-2" />
                          <span>Log Out</span>
                        </motion.div>
                      </StyledNavLink>
                    </button>
                  ) : (
                    <div>
                      <StyledNavLink to="/login" className="block w-full">
                        <motion.div
                          variants={{
                            closed: { opacity: 0, x: -10 },
                            open: { opacity: 1, x: 0 },
                          }}
                          whileHover={{
                            backgroundColor: "#EEF2FF",
                            color: "#4F46E5",
                          }}
                          className="px-4 py-2 text-left text-gray-600 flex items-center"
                        >
                          <LogIn className="h-5 w-5 mr-2" />
                          <span>Login</span>
                        </motion.div>
                      </StyledNavLink>
                      <StyledNavLink to="/register" className="block w-full">
                        <motion.div
                          variants={{
                            closed: { opacity: 0, x: -10 },
                            open: { opacity: 1, x: 0 },
                          }}
                          whileHover={{
                            backgroundColor: "#EEF2FF",
                            color: "#4F46E5",
                          }}
                          className="px-4 py-2 text-left text-gray-600 flex items-center"
                        >
                          <UserPlus className="h-5 w-5 mr-2" />
                          <span>Sign Up</span>
                        </motion.div>
                      </StyledNavLink>
                    </div>
                  )}
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
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              <MobileNavLink to="/">Home</MobileNavLink>
              <MobileNavLink to="/queries">Queries</MobileNavLink>
              <MobileNavLink to="/recommendations">
                Recommendations For Me
              </MobileNavLink>
              <MobileNavLink to="/my-queries">My Queries</MobileNavLink>
              <MobileNavLink to="/add-queries">Add Queries</MobileNavLink>
              <MobileNavLink to="/my-recomandation">
                My Recommendations
              </MobileNavLink>

              {/* Mobile Auth Links */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
