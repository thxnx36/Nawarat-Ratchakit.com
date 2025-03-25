'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { FaGraduationCap, FaBook } from 'react-icons/fa';

interface Education {
  year: string;
  degree: string;
  institution: string;
  description: string;
  icon: React.ReactNode;
}


export default function EducationPage() {
  const educationItems: Education[] = [
    {
      year: '2021 - 2025',
      degree: 'Bachelor\'s Degree in Modern Management Information Technology',
      institution: 'Chiang Mai University, Thailand',
      description: 'Focused on UX/UI design principles and digital product development. Specialized in user research methodologies, interaction design, visual design systems, and prototyping. Completed projects in responsive web design, mobile app interfaces, and brand identity design. Graduated with First Class Honors.',
      icon: <FaGraduationCap size={24} />,
    },
    {
      year: '2018 - 2020',
      degree: 'High School, Arts-Math Program',
      institution: 'Dara Academy, Chiang Mai, Thailand',
      description: '',
      icon: <FaBook size={24} />,
    },
    {
      year: '2015 - 2017',
      degree: 'Junior high school',
      institution: 'Dara Academy, Chiang Mai, Thailand',
      description: '',
      icon: <FaBook size={24} />,
    },
    {
      year: '2009 - 2014',
      degree: 'Primary school',
      institution: 'Dara Academy, Chiang Mai, Thailand',
      description: '',
      icon: <FaBook size={24} />,
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

          </div>

          {/* Education Timeline */}
          <div className="max-w-4xl mx-auto mb-20">
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
                  <div className="absolute -left-12 w-10 h-10 rounded-full bg-gradient-to-r from-pink-300 to-pink-500 flex items-center justify-center text-white shadow-lg">
                    {education.icon}
                  </div>
                  <div className="card ml-2">
                    <div className="text-primary font-semibold mb-1">{education.year}</div>
                    <h3 className="text-xl font-bold mb-2">{education.degree}</h3>
                    <div className="text-gray-600 mb-3">{education.institution}</div>
                    {education.description && (
                      <p className="text-gray-600">{education.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 