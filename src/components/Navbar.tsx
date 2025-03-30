import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainMenuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Practice Areas', href: '#practice-areas' },
    { label: 'Lawyers', href: '#team' },
    { label: 'Cases', href: '#cases' },
  ];

  const dropdownItems = [
    { label: 'Blog', href: '#blog' },
    { label: 'News', href: '#news' },
    { label: 'Student Careers', href: '#careers' },
    { label: 'About Us', href: '#about' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg py-2' : 'bg-black py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src='ideOdLshlE_1738851349532.jpeg' className="h-12 w-12 " />
            <div>
              <span className="text-2xl font-itc galliard font-bold text-white block">Koskie Minsky</span>
              <span className="text-sm text-gray-400 hidden sm:block">Leading Canadian Law Firm</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {mainMenuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-200 hover:text-blue-400 transition-colors font-medium relative group"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}
            
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                className="flex items-center text-gray-200 hover:text-blue-400 transition-colors font-medium"
              >
                More <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-black/95 backdrop-blur-sm rounded-lg shadow-xl py-2"
                >
                  {dropdownItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-blue-500/10 hover:text-blue-400 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-200 hover:text-blue-400 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800 mt-2"
        >
          <div className="px-4 py-4 space-y-2">
            {[...mainMenuItems, ...dropdownItems].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-gray-200 hover:text-blue-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}