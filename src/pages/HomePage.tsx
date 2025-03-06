import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const HomePage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-mint-50 via-lavender-50 to-soft-blue-50"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-mint-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-lavender-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute w-96 h-96 -bottom-48 left-48 bg-soft-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {/* Avatar Cotainer */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden hover:scale-105 transition-transform duration-300"
        >
          <img
            src="/kenzavatar.png"
            alt="Your Name"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Text Content */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-4xl font-bold text-gray-00 mb-6"
          >
            Hi, I'm <span className="text-mint-600">Kenza ABOU-EL KASEM</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 mb-12"
          >
            A passionate developer crafting beautiful digital experiences
          </motion.p>

          <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex gap-4"
          >
<div className="flex flex-wrap gap-4">
  <Link 
    to="/projects" 
    className="bg-mint-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:bg-mint-700 transition-colors inline-flex items-center justify-center gap-2 min-w-[200px] md:min-w-[180px]"
  >
    View My Work
    <ArrowRight size={20} />
  </Link>
  
  <Link 
    to="/contact" 
    className="bg-white text-mint-600 px-8 py-4 rounded-lg font-medium shadow-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center min-w-[200px] md:min-w-[180px]"
  >
    Get in Touch
  </Link>
</div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </motion.div>
    </motion.section>
  );
};
