import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center"
          >
            <NavLink
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-mint-600 via-lavender-600 to-soft-blue-600 bg-clip-text text-transparent"
            >
              Kenza's Portfolio
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `relative text-base font-medium transition-colors duration-200 group ${
                    isActive
                      ? 'text-mint-600'
                      : 'text-gray-700 hover:text-mint-600'
                  }`
                }
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  className="px-3 py-2 rounded-md inline-block"
                >
                  {item.name}
                </motion.span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-mint-600 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
              </NavLink>
            ))}

            {/* Resume Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/ABOU-EL KASEM Kenza Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 rounded-lg text-mint-600 border-2 border-mint-600 hover:bg-gradient-to-r hover:from-mint-600 hover:to-soft-blue-600 hover:text-white transition-all duration-300"
            >
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </motion.a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-mint-600 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={
            isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden bg-white/95 backdrop-blur-sm rounded-b-2xl shadow-lg ${
            isOpen ? 'border-t border-gray-100' : ''
          }`}
        >
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-mint-600 bg-mint-50'
                      : 'text-gray-700 hover:text-mint-600 hover:bg-gray-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile Resume Button */}
            <a
              href="/ABOU-EL KASEM Kenza Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full px-4 py-3 mt-2 rounded-lg text-white bg-gradient-to-r from-mint-600 to-soft-blue-600 hover:from-mint-700 hover:to-soft-blue-700 transition-colors"
            >
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};
