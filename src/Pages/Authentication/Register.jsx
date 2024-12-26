import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { User, Mail, Lock, Link, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Provider/AuthContext';

export default function Register() {
  const navigate = useNavigate()
  const { createUser, updateUserProfile, setUser } =
    useContext(AuthContext)
    const registrationAnimation = {
        "v": "5.7.1",
        "fr": 29.9700012207031,
        "ip": 0,
        "op": 180.00000733155,
        "w": 500,
        "h": 500,
        "nm": "Registration",
        // Note: This is a placeholder. You'll need to replace with your actual Lottie animation data
        "assets": [],
        "layers": []
      };



      // SignUp 
      const handleSignUp = async e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const photo = form.photo.value
        const password = form.password.value
        
        if (password > 6) {
          toast.error("Password length must be at least 6 character");
          return;
        }
        if (!/[A-Z]/.test(password)) {
          toast.error("Must have an Uppercase letter in the password!");
          return;
        }
        if (!/[a-z]/.test(password)) {
          toast.error("Must have an Lowercase letter in the password!");
          return;
        }
        // console.log({ email, password, name, photo })
        try {
          
          //2. User Registration
          const result = await createUser(email, password)
          // console.log(result)
          await updateUserProfile(name, photo)
          setUser({ ...result.user, photoURL: photo, displayName: name })
          toast.success('Signup Successful')
          navigate('/')
          form.reset("")
        } catch (err) {
          // console.log(err)
          toast.error(err?.message)
        }
      }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row items-center justify-center p-4">
      {/* Left side - Registration Form */}
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

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Create Account</h2>
        <p className="text-center text-gray-600 mb-8">Join our community today!</p>

        {/* Registration Form */}

        <form onSubmit={handleSignUp} className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <label className="text-sm font-medium text-gray-700 mb-1 block">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                name='name'
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                         focus:ring-indigo-500 focus:border-transparent transition-colors"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="relative">
            <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                name='email'
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                         focus:ring-indigo-500 focus:border-transparent transition-colors"
                placeholder="example@email.com"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative">
            <label className="text-sm font-medium text-gray-700 mb-1 block">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="password"
                name='password'
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                         focus:ring-indigo-500 focus:border-transparent transition-colors"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Photo URL Input */}
          <div className="relative">
            <label className="text-sm font-medium text-gray-700 mb-1 block">Photo URL</label>
            <div className="relative">
              <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
              name='photo'
                type="url"
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                         focus:ring-indigo-500 focus:border-transparent transition-colors"
                placeholder="Enter photo URL"
              />
            </div>
          </div>

          {/* Register Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 
                     transition-colors flex items-center justify-center space-x-2"
          >
            <span>Create Account</span>
            <ArrowRight className="h-4 w-4" />
          </motion.button>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <a href="/login" className="text-indigo-600 hover:text-indigo-500 font-medium">
              Sign in
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
          animationData={registrationAnimation}
          className="w-full"
          loop={true}
        />
      </motion.div>
    </div>
  )
}
