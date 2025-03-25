'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';
import { FaGraduationCap, FaAward, FaLaptopCode, FaPalette } from 'react-icons/fa';

export default function AboutPage() {


  const experiences = [
    {
      year: '2023',
      title: 'Graduated',
      desc: 'Completed Bachelor&apos;s Degree in Digital Media Design',
      icon: <FaGraduationCap size={24} />,
    },
    {
      year: '2022',
      title: 'Internship at Design Studio',
      desc: 'Gained real-world experience at a leading design company',
      icon: <FaLaptopCode size={24} />,
    },
    {
      year: '2021',
      title: 'UI/UX Design Competition Winner',
      desc: 'Won first place in a university-level UI/UX design competition',
      icon: <FaAward size={24} />,
    },
    {
      year: '2020',
      title: 'Started Learning Graphic Design',
      desc: 'Began serious study and practice in graphic design',
      icon: <FaPalette size={24} />,
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-animation opacity-10 z-0"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About <span className="gradient-text">Me</span>
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Profile Image */}
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/images/profile-aboutme.jpg"
                    alt="Profile Picture"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Hello! I&apos;m <span className="gradient-text">Nawarat Ratchakit</span>
              </h2>
              <p className="text-lg mb-6">
              Hello, I&apos;m a recent MMIT graduate from Chiang Mai University with a passion for UX/UI Design. I love creating intuitive, user-friendly experiences and constantly learning new tools to enhance my skills. Though I lack formal experience, I&apos;m a fast learner, adaptable, and eager to grow in this field.
              </p>
              <p className="text-lg mb-6">
                
              </p>
              <div className="relative mt-10 mb-4 p-6 rounded-xl overflow-hidden">
                {/* ใช้รูปภาพเป็นพื้นหลังสำหรับส่วน hashtag */}
                <div className="absolute inset-0 w-full h-full">
                  <Image 
                    src="/images/cute.jpeg"
                    alt="Background Image"
                    fill
                    className="object-cover opacity-80 rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 mix-blend-overlay"></div>
                </div>
                
                <div className="relative z-10 flex flex-wrap justify-center gap-5 py-8">
                  {[
                    { tag: 'UIDesign', delay: 0 },
                    { tag: 'UXDesign', delay: 0.1 },
                    { tag: 'GraphicDesign', delay: 0.2 },
                    { tag: 'Creativity', delay: 0.3 }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="px-6 py-3 backdrop-blur-md bg-white/20 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform border border-white/30"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: item.delay,
                        type: "spring", 
                        stiffness: 100 
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                      }}
                    >
                      #{item.tag}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Timeline Section */}
      <section className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Experience</span>
            </h2>

          </div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="flex mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mr-8 relative">
                  <div className="bg-pink-300 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg">
                    {exp.icon}
                  </div>
                  {index !== experiences.length - 1 && (
                    <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
                  )}
                </div>
                <div className="card flex-1">
                  <div className="text-primary font-semibold">{exp.year}</div>
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <p>{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 