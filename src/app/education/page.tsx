'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { FaGraduationCap, FaCertificate, FaBook, FaTrophy } from 'react-icons/fa';

interface Education {
  year: string;
  degree: string;
  institution: string;
  description: string;
  icon: React.ReactNode;
}

interface Certificate {
  year: string;
  title: string;
  organization: string;
  skills: string[];
}

export default function EducationPage() {
  const educationItems: Education[] = [
    {
      year: '2019 - 2023',
      degree: 'Bachelor\'s Degree in Digital Media Design',
      institution: 'Leading University, Thailand',
      description: 'Studied design principles, user research, UI/UX design, graphic design, and brand design. Graduated with First Class Honors.',
      icon: <FaGraduationCap size={24} />,
    },
    {
      year: '2016 - 2019',
      degree: 'High School, Arts-Math Program',
      institution: 'Premier School, Thailand',
      description: 'Focused on arts, mathematics, and sciences. Participated in art and design clubs. Received outstanding student award in arts.',
      icon: <FaBook size={24} />,
    },
  ];

  const certificates: Certificate[] = [
    {
      year: '2022',
      title: 'Advanced UI/UX Design Certification',
      organization: 'Udemy',
      skills: ['UI Design', 'UX Research', 'Wireframing', 'Prototyping'],
    },
    {
      year: '2021',
      title: 'Graphic Design Masterclass',
      organization: 'Creative Design Academy',
      skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Brand Identity'],
    },
    {
      year: '2021',
      title: 'Web Design for Designers',
      organization: 'Coursera',
      skills: ['HTML/CSS', 'Responsive Design', 'Web Animation'],
    },
    {
      year: '2020',
      title: 'Color Theory and Application',
      organization: 'Design School Online',
      skills: ['Color Theory', 'Color Psychology', 'Branding'],
    },
  ];

  const achievements = [
    {
      year: '2023',
      title: 'Outstanding Thesis Award',
      description: 'Received outstanding thesis award for UI/UX design',
    },
    {
      year: '2022',
      title: 'University-Level UI/UX Design Competition',
      description: 'Won first place in the UI/UX design competition',
    },
    {
      year: '2021',
      title: 'Logo Design Contest',
      description: 'Awarded first runner-up in the logo design contest',
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
              <span className="gradient-text">Education</span>
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"
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
              My educational background and knowledge development journey
            </motion.p>
          </div>

          {/* Education Timeline */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Education History</h2>
            
            <div className="relative pl-8 border-l-2 border-gray-200 ml-4 md:ml-0">
              {educationItems.map((education, index) => (
                <motion.div
                  key={index}
                  className="mb-12 relative"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="absolute -left-12 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white shadow-lg">
                    {education.icon}
                  </div>
                  <div className="card ml-2">
                    <div className="text-primary font-semibold mb-1">{education.year}</div>
                    <h3 className="text-xl font-bold mb-2">{education.degree}</h3>
                    <div className="text-gray-600 mb-3">{education.institution}</div>
                    <p>{education.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certificates Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">
              <span className="gradient-text">Certifications</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certificates.map((certificate, index) => (
                <motion.div
                  key={index}
                  className="card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white shadow-lg mr-4">
                      <FaCertificate size={20} />
                    </div>
                    <div>
                      <div className="text-primary font-semibold">{certificate.year}</div>
                      <h3 className="text-lg font-bold">{certificate.title}</h3>
                      <div className="text-gray-600 text-sm">{certificate.organization}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {certificate.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-light-bg rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Awards & <span className="gradient-text">Achievements</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="card text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                    <FaTrophy size={24} />
                  </div>
                  <div className="text-primary font-semibold mb-1">{achievement.year}</div>
                  <h3 className="text-lg font-bold mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-animation text-white" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-5xl font-serif mb-6">&ldquo;</div>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Education is not just about getting a degree, but lifelong learning. I believe in continuous learning and development as a designer.
            </p>
            <div className="text-5xl font-serif">&rdquo;</div>
            <div className="mt-8">
              <div className="font-bold text-xl">Chi Chi</div>
              <div className="text-white/80">UI/UX and Graphic Designer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Education */}
      <section className="py-20 bg-light-bg" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Future <span className="gradient-text">Learning Plans</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              I plan to continue developing my skills and knowledge in the future
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card p-8 mb-8" data-aos="fade-up">
              <h3 className="text-xl font-bold mb-4">Future Learning Goals</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <FaBook className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">3D Design & Animation</p>
                    <p className="text-sm text-gray-600">Expand skills in 3D design and animation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary/10 p-2 rounded-full mr-3">
                    <FaBook className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold">AI in Design</p>
                    <p className="text-sm text-gray-600">Learn how to use AI in design work</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent-1/10 p-2 rounded-full mr-3">
                    <FaBook className="text-accent-1" />
                  </div>
                  <div>
                    <p className="font-semibold">Advanced Motion Graphics</p>
                    <p className="text-sm text-gray-600">Develop advanced motion graphics skills</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent-2/10 p-2 rounded-full mr-3">
                    <FaBook className="text-accent-2" />
                  </div>
                  <div>
                    <p className="font-semibold">VR/AR Design</p>
                    <p className="text-sm text-gray-600">Learn design for VR and AR experiences</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <motion.button
                className="colorful-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Future Education Plans
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 