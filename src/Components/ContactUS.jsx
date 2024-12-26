import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactUS() {
  const colors = ["#4F46E5", "#7C3AED", "#2563EB", "#4338CA"];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            Contact Us
          </h3>
          <p className="text-lg text-slate-600">Get in touch with our team</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Phone className="w-8 h-8 text-indigo-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Call Us</h4>
            <p className="text-slate-600">+1 (234) 567-8900</p>
            <motion.button
              animate={{
                backgroundColor: colors,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="mt-6 w-full py-3 text-white rounded-xl"
            >
              Call Now
            </motion.button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Mail className="w-8 h-8 text-indigo-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Email Us</h4>
            <p className="text-slate-600">support@recofinder.com</p>
            <motion.button
              animate={{
                backgroundColor: colors,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="mt-6 w-full py-3 text-white rounded-xl"
            >
              Send Email
            </motion.button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <MapPin className="w-8 h-8 text-indigo-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Visit Us</h4>
            <p className="text-slate-600">123 Business Ave, Suite 100</p>
            <motion.button
              animate={{
                backgroundColor: colors,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="mt-6 w-full py-3 text-white rounded-xl"
            >
              Get Directions
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
