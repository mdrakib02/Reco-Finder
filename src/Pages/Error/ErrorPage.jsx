import React from 'react';
import { Home, AlertCircle } from 'lucide-react';
export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
    {/* Container with animation */}
    <div className="max-w-lg w-full text-center space-y-8 animate-fade-in">
      {/* Error Icon with bounce animation */}
      <div className="flex justify-center">
        <div className="animate-bounce">
          <AlertCircle className="h-24 w-24 text-indigo-600" />
        </div>
      </div>

      {/* Logo */}
      <div className="flex items-center justify-center space-x-2">
        <div className="h-12 w-12 bg-indigo-600 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-white font-bold text-2xl">R</span>
        </div>
        <span className="text-2xl font-bold text-gray-800">Reco Finder</span>
      </div>

      {/* Error Message with slide-up animation */}
      <div className="space-y-4 animate-slide-up">
        <h1 className="text-6xl md:text-8xl font-bold text-indigo-600">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Page Not Found</h2>
        <p className="text-gray-600 text-lg max-w-md mx-auto">
          Oops! The page you're looking for seems to have vanished into thin air.
        </p>
      </div>

      {/* Home Button with hover animation */}
      <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg
                   transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-indigo-700
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Home
        </a>
      </div>

      {/* Additional Message with fade-in animation */}
      <p className="text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '400ms' }}>
        If you think this is a mistake, please contact our support team.
      </p>
    </div>

    <style jsx>{`
      @keyframes slide-up {
        from {
          transform: translateY(20px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @keyframes fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .animate-slide-up {
        animation: slide-up 0.6s ease-out forwards;
      }

      .animate-fade-in {
        animation: fade-in 0.8s ease-out forwards;
      }
    `}</style>
  </div>
  )
}
