'use client';

import { motion } from 'framer-motion';
// เปิดการใช้งาน Image component
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { FaArrowRight, FaHeart, FaStar, FaMagic } from 'react-icons/fa';
import { useEffect, useState } from 'react';


// Homepage component
export default function Home() {
  // State for switching between titles
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["UI/UX Designer", "Graphic Designer"];
  
  // Auto switch between titles
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // ตัวอักษรของคำว่า Chi Chi เพื่อทำเอนิเมชัน
  const chichiLetters = "Nawarat Ratchakit".split("");


  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="min-h-screen w-full flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            {/* Introduction text */}
            <motion.div
              className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="relative mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <motion.div
                  className="absolute -top-10 -left-5 md:-left-10 text-[#ff9bd2] opacity-80"
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.7, duration: 0.5, type: 'spring' }}
                >
                  <FaStar className="w-7 h-7 md:w-10 md:h-10" />
                </motion.div>
                
                <motion.div
                  className="absolute -top-3 right-5 md:right-20 text-[#ff85a2] opacity-70"
                  initial={{ scale: 0, rotate: 20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.9, duration: 0.5, type: 'spring' }}
                >
                  <FaMagic className="w-6 h-6 md:w-8 md:h-8" />
                </motion.div>
                
                <motion.div
                  className="absolute bottom-0 right-0 md:right-10 text-[#ff9bd2]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.5, type: 'spring' }}
                >
                  <FaHeart className="w-5 h-5 md:w-7 md:h-7" />
                </motion.div>
                
                <motion.h1
                  className="text-4xl md:text-5xl font-bold mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                <span className="block mb-1 bg-gradient-to-r from-[#ff9bd2] to-[#ff85a2] bg-clip-text text-transparent">
                  Hello, <span className="text-[#efaeb4]">I&apos;m</span>
                </span>

                  
                </motion.h1>
                
                <div className="flex justify-center md:justify-start overflow-hidden ">
                  {chichiLetters.map((letter, index) => (
                    <motion.span
                      key={index}
                      className={`inline-block text-4xl md:text-5xl font-bold ${letter !== " " ? "text-[#ff9bd2]" : ""}`}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        delay: 0.3 + index * 0.1, 
                        duration: 0.6,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.2, 
                        color: '#ff85a2',
                        rotate: [-5, 5, 0],
                        transition: { duration: 0.3 }
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </div>

                <motion.div 
                  className="h-1 w-0 bg-gradient-to-r from-[#ff9bd2] to-[#ff85a2] mx-auto md:mx-0 mt-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </motion.div>
              
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.h2 
                  className="text-lg md:text-xl text-gray-700 font-medium"
                  key={titleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  {titles[titleIndex]}
                </motion.h2>
              </motion.div>
              
              <motion.div
                className="flex flex-wrap gap-4 justify-center md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Link href="/portfolio">
                  <motion.button
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ff9bd2] to-[#ff85a2] text-white font-medium shadow-md hover:shadow-lg relative overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span 
                      className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                    View My Projects <FaArrowRight className="inline ml-2" />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    className="px-6 py-3 rounded-full bg-white border-2 border-[#ff9bd2] text-gray-700 font-medium hover:bg-[#ff9bd2]/5 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Profile image area (PNG transparent) */}
            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] md:w-[400px] md:h-[450px]">
                {/* ใส่รูปโปรไฟล์จากโฟลเดอร์ images */}
                <motion.div
                  className="w-full h-full relative"
                  animate={{ 
                    x: [0, -3, 3, -3, 0],
                    y: [0, -5, 2, -2, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src="/images/home-picture.png"
                    alt="Profile Picture"
                    fill
                    sizes="(max-width: 768px) 90vw, 450px"
                    className="object-contain"
                    priority
                  />
                </motion.div>
                
                {/* ลูกบอลประดับตกแต่ง */}
                <motion.div
                  className="absolute top-10 right-10 w-5 h-5 rounded-full bg-[#ff85a2]"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: [0, 1, 1, 1, 0],
                    y: [0, -20, -40, -60, -80]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
                <motion.div
                  className="absolute bottom-20 left-5 w-4 h-4 rounded-full bg-[#ffb8e0]"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: [0, 1, 1, 1, 0],
                    y: [0, -15, -30, -45, -60]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 1,
                    delay: 1.5
                  }}
                />
                <motion.div
                  className="absolute top-40 left-10 w-6 h-6 rounded-full bg-[#ff9bd2]"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: [0, 1, 1, 1, 0],
                    y: [0, -20, -40, -60, -80]
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    repeatDelay: 1,
                    delay: 0.5
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-[#ff9bd2]">Services</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {/* Service 1 */}
            <motion.div 
              className="p-5 md:p-6 rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#ff9bd2]/10 flex items-center justify-center mb-4">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#ff9bd2]"></div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">UI/UX Design</h3>
              <p className="text-sm md:text-base text-gray-600">Creating beautiful and intuitive user experiences that delight users</p>
            </motion.div>
            
            {/* Service 2 */}
            <motion.div 
              className="p-5 md:p-6 rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#ff85a2]/10 flex items-center justify-center mb-4">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#ff85a2]"></div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Graphic Design</h3>
              <p className="text-sm md:text-base text-gray-600">Crafting visually stunning graphics that capture attention</p>
            </motion.div>
            
            {/* Service 3 */}
            <motion.div 
              className="p-5 md:p-6 rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1 mx-auto sm:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              style={{ maxWidth: '100%', width: '100%' }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#ffb8e0]/10 flex items-center justify-center mb-4">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#ffb8e0]"></div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Brand Identity</h3>
              <p className="text-sm md:text-base text-gray-600">Developing unique brand identities that stand out in the market</p>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* Contact CTA */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="bg-[#fff5fa] p-6 md:p-8 rounded-2xl text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">Let&apos;s Work Together</h2>
            <p className="text-sm md:text-base text-gray-600 mb-5 md:mb-6">
            </p>
            <Link href="/contact">
              <motion.button
                className="px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-[#ff9bd2] to-[#ff85a2] text-white text-sm md:text-base font-medium shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
