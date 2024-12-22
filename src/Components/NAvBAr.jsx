import React, { useState } from 'react';
import { Menu, X, Search, LogOut, User } from 'lucide-react';



export default function NAvBAr() {
    
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo and Website Name */}
        <div className="flex-shrink-0 flex items-center">
          <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <span className="ml-2 text-xl font-bold text-gray-800">RECO FIND</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-600 hover:text-indigo-600">Home</a>
          <a href="/queries" className="text-gray-600 hover:text-indigo-600">Queries</a>
          <a href="/recommendations" className="text-gray-600 hover:text-indigo-600">Recommendations For Me</a>
          <a href="/my-queries" className="text-gray-600 hover:text-indigo-600">My Queries</a>
          <a href="/my-recommendations" className="text-gray-600 hover:text-indigo-600">My Recommendations</a>
        </div>

        {/* User Section */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-600 hover:text-indigo-600">
            <LogOut className="h-5 w-5" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
              <User className="h-5 w-5 text-indigo-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">John Doe</span>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile menu */}
    <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
      <div className="px-2 pt-2 pb-3 space-y-1">
        <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
          Home
        </a>
        <a href="/queries" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
          Queries
        </a>
        <a href="/recommendations" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
          Recommendations For Me
        </a>
        <a href="/my-queries" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
          My Queries
        </a>
        <a href="/my-recommendations" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
          My Recommendations
        </a>
        <div className="px-3 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
              <User className="h-5 w-5 text-indigo-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">John Doe</span>
          </div>
          <button className="text-gray-600 hover:text-indigo-600">
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </nav>
  )
}
