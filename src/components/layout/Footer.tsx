'use client';

import { FaInstagram, FaLinkedinIn, FaBehance, FaDribbble, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaInstagram size={20} />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaLinkedinIn size={20} />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaBehance size={20} />, url: 'https://behance.net', label: 'Behance' },
    { icon: <FaDribbble size={20} />, url: 'https://dribbble.com', label: 'Dribbble' },
    { icon: <FaEnvelope size={20} />, url: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-[#e5629b] text-white">
      <div className="absolute top-0 left-0 w-full h-14 bg-white" style={{ clipPath: 'ellipse(60% 100% at 50% 0%)' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="absolute -top-8 -left-8 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Logo & Bio */}
          <div className="col-span-1">
            <Link href="/">
              <h2 className="text-3xl font-bold mb-4">Chi Chi</h2>
            </Link>
            <p className="mb-4 text-white/90">
              UI/UX Designer & Graphic Designer focused on creating colorful, beautiful, and user-friendly designs
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white/70 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white/70 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white/70 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white/70 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
            <p className="mb-2">
              <span className="block">Email: contact@example.com</span>
              <span className="block">Tel: (+66) 98-765-4321</span>
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Chi Chi Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 