import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { Mail, Lock, ArrowRight,  } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../Provider/AuthContext';

export default function Login() {
  const { signIn, signInWithGoogle } = useContext(AuthContext)
  const navigate = useNavigate()
   const location = useLocation()
  const form = location?.state || '/'
    const loginAnimation = {
        "v": "5.7.1",
        "fr": 29.9700012207031,
        "ip": 0,
        "op": 180.00000733155,
        "w": 500,
        "h": 500,
        "nm": "Login",
        "ddd": 0,
        // Note: This is a placeholder. You'll need to replace with your actual Lottie animation data
        "assets": [],
        "layers": []
      };

      // Google Login
      const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            navigate(form, { replace: true });
            toast.success('Signin Successful');
        } catch (err) {
            console.log(err);
            toast.error(err?.message);
        }
    };
    

      // SignIn 
      const handleSignIn = async e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const pass = form.password.value
        console.log({ email, pass })
        try {
          //User Login
          await signIn(email, pass)
          toast.success('Signin Successful')
          navigate(from, { replace: true })
           form.reset("")
           navigate("/")
        } catch (err) {
          console.log(err)
          toast.error(err?.message)
        }
      }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row items-center justify-center p-4">
      {/* Left side - Login Form */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md lg:mr-8"
      >
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-12 w-12 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-2xl">R</span>
          </div>
          <span className="ml-2 text-2xl font-bold text-gray-800">Reco Finder</span>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back!</h2>

        {/* Login Form */}
        <form onSubmit={handleSignIn} className="space-y-6">
          <div className="relative">
            <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                name='email'
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="relative">
            <label className="text-sm font-medium text-gray-700 mb-1 block">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="password"
                name='password'
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 
                     transition-colors flex items-center justify-center space-x-2"
          >
            <span>Sign In</span>
            <ArrowRight className="h-4 w-4" />
          </motion.button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <motion.button
          onClick={handleGoogleSignIn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 
                     transition-colors flex items-center justify-center space-x-2"
          >
            <span><FcGoogle /></span>
            <span>Sign in with Google</span>
          </motion.button>

          <p className="text-center text-sm text-gray-600 mt-8">
            Don't have an account?{' '}
            <a href="/register" className="text-indigo-600 hover:text-indigo-500 font-medium">
              Sign up
            </a>
          </p>
        </form>
      </motion.div>

      {/* Right side - Animation */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:block w-full max-w-md"
      >
        <Lottie 
          animationData={loginAnimation}
          className="w-full"
          loop={true}
        />
      </motion.div>
    </div>
  )
}
