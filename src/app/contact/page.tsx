'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaInstagram, 
  FaLinkedinIn,
  FaPaperPlane
} from 'react-icons/fa';
import MainLayout from '@/components/layout/MainLayout';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: <FaInstagram size={24} />, 
      url: 'https://instagram.com', 
      color: 'bg-gradient-to-r from-purple-500 to-pink-500' 
    },
    { 
      name: 'LinkedIn', 
      icon: <FaLinkedinIn size={24} />, 
      url: 'https://linkedin.com', 
      color: 'bg-blue-600' 
    },

  ];

  const contactInfos = [
    {
      icon: <FaMapMarkerAlt className="text-primary" size={24} />,
      title: 'Address',
      details: 'Bangkok, Thailand',
    },
    {
      icon: <FaEnvelope className="text-primary" size={24} />,
      title: 'Email',
      details: 'Nawarat.ratchakit@gmail.com',
    },
    {
      icon: <FaPhone className="text-primary" size={24} />,
      title: 'Phone',
      details: '095-6876298',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-animation opacity-10 z-0"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact <span className="gradient-text">Me</span>
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-[#ff69b4] to-[#00bfff] mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
            <motion.p
              className="text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfos.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="p-3 bg-[#f8f9fa] rounded-full mr-3">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold">{info.title}</h3>
                      <p className="text-gray-600">{info.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <h2 className="text-2xl font-bold mb-6">Social Media</h2>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} p-4 rounded-full text-[#ffffff] shadow-md`}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              

            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <div className="bg-[#ffffff] p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                
                {submitted ? (
                  <motion.div 
                    className="bg-green-50 p-6 rounded-lg text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-green-500 mb-4 flex justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-16 w-16" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700">
                      Thank you for contacting me. I will get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) :
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff69b4] focus:border-transparent outline-none transition-all duration-300"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff69b4] focus:border-transparent outline-none transition-all duration-300"
                          placeholder="example@email.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff69b4] focus:border-transparent outline-none transition-all duration-300"
                          placeholder="Your subject"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff69b4] focus:border-transparent outline-none transition-all duration-300 resize-none"
                          placeholder="Type your message here..."
                        />
                      </div>
                      
                      <div>
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="colorful-btn w-full flex items-center justify-center"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#ffffff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending message...
                            </>
                          ) : (
                            <>
                              <FaPaperPlane className="mr-2" /> Send Message
                            </>
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </form>
                }
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (If you want to use Google Maps for real, you need to add an API Key) */}
      <section className="py-12 bg-[#f8f9fa]" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">My <span className="gradient-text">Location</span></h2>
            <p className="max-w-2xl mx-auto mt-4">
              You can meet me here, or we can talk online.
            </p>
          </div>
          
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg" data-aos="zoom-in">
            {/* Replace with Google Map API if you have a key */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <div className="text-center p-4">
                <div className="text-5xl text-[#ff69b4] mb-4">
                  <FaMapMarkerAlt className="mx-auto" />
                </div>
                <h3 className="text-xl font-bold">Bangkok, Thailand</h3>
                <p className="mt-2 text-gray-600">
                  To show an actual map, please add a Google Maps API Key
                </p>
                <button className="mt-4 px-6 py-2 bg-[#ff69b4] text-[#ffffff] rounded-full font-medium hover:bg-opacity-90 transition-all">
                  View Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 