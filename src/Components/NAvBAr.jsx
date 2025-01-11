import React, { useContext, useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, LogIn, LogOut, User, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import AuthContext from "../Provider/AuthContext";

const StyledNavLink = ({ to, children, onClick, className }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) => `
      text-white  transition-all duration-200
      ${isActive ? " font-semibold text-xl" : ""}
      ${className || ""}
    `}
  >
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      {children}
    </motion.div>
  </NavLink>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) => `
      block px-4 py-2 rounded-lg text-base font-bold font-medium transition-all duration-200
      ${isActive ? "bg-indigo-50 text-indigo-600" : "hover:bg-gray-50"}
    `}
  >
    {children}
  </NavLink>
);

const UserMenu = ({ user, handleLogOut, isOpen, setIsOpen }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 focus:outline-none"
      >
        <div className="h-8 w-8 rounded-full overflow-hidden">
          <img 
            src={user.photoURL} 
            alt="" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50"
          >
            <div className="px-4 py-2 border-b">
              <p className="text-sm font-medium text-gray-900">{user.displayName}</p>
              <p className="text-sm text-white truncate">{user.email}</p>
            </div>
            
            <NavLink 
              to="/profile" 
              className="block px-4 py-2 text-sm text-white hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Profile Settings
            </NavLink>
            
            <button
              onClick={() => {
                handleLogOut();
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
  }, [location]);

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success('Logout Successful');
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-indigo-500 shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <StyledNavLink to="/">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-indigo-500 font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-bold text-white">
                RECO FIND
              </span>
            </motion.div>
          </StyledNavLink>

          <div className="hidden md:flex items-center gap-6">
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/queries">Queries</StyledNavLink>
            
            {user ? (
              <>
                <StyledNavLink to="/recommendationsfor-me">
                  Recommendations For Me
                </StyledNavLink>
                <StyledNavLink to="/my-queries">
                  My Queries
                </StyledNavLink>
                <StyledNavLink to="/my-recomandation">
                  My Recommendations
                </StyledNavLink>
              </>
            ) : (
              <StyledNavLink to="/login">Login</StyledNavLink>
            )}
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <UserMenu 
                user={user} 
                handleLogOut={handleLogOut}
                isOpen={isUserMenuOpen}
                setIsOpen={setIsUserMenuOpen}
              />
            ) : (
              <StyledNavLink to="/login" className="md:hidden">
                <User className="w-6 h-6" />
              </StyledNavLink>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn btn-ghost btn-sm md:hidden"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-2 flex flex-col gap-1">
              <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/queries" onClick={() => setIsMobileMenuOpen(false)}>
                Queries
              </MobileNavLink>
              
              {user ? (
                <>
                  <MobileNavLink to="/recommendationsfor-me" onClick={() => setIsMobileMenuOpen(false)}>
                    Recommendations For Me
                  </MobileNavLink>
                  <MobileNavLink to="/my-queries" onClick={() => setIsMobileMenuOpen(false)}>
                    My Queries
                  </MobileNavLink>
                  <MobileNavLink to="/my-recomandation" onClick={() => setIsMobileMenuOpen(false)}>
                    My Recommendations
                  </MobileNavLink>
                </>
              ) : (
                <MobileNavLink to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  Login
                </MobileNavLink>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}