'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Education', href: '/education' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Check scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
          : 'bg-white/50 backdrop-blur-sm py-2 md:py-3'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <motion.div
                className="font-bold text-xl md:text-2xl flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div 
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#ff9bd2] mr-2 flex items-center justify-center text-white"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "loop", 
                    duration: 2.5
                  }}
                >
                  C
                </motion.div>
                <span className="text-[#ff9bd2]">Chi Chi</span>
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link href={link.href} key={link.name}>
                    <motion.div
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#ff9bd2] text-white shadow-sm' 
                          : 'text-gray-600 hover:bg-[#ff9bd2]/10 hover:text-[#ff9bd2]'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.name}
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full bg-[#ff9bd2]/10 text-[#ff9bd2] hover:bg-[#ff9bd2]/20"
              whileTap={{ scale: 0.9 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="px-4 py-2 bg-white shadow-inner rounded-b-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link href={link.href} key={link.name}>
                <motion.div
                  className={`block px-3 py-2.5 my-1 rounded-lg text-sm font-medium ${
                    isActive 
                      ? 'bg-[#ff9bd2]/20 text-[#ff9bd2]' 
                      : 'text-gray-600 hover:bg-[#ff9bd2]/10 hover:text-[#ff9bd2]'
                  }`}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 