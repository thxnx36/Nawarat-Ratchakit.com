'use client';

import { motion } from 'framer-motion';
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { FaLaptopCode, FaPaintBrush, FaMobileAlt, FaBrain } from 'react-icons/fa';

interface Skill {
  name: string;
  percentage: number;
  color?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export default function SkillsPage() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'UI/UX Design',
      icon: <FaPaintBrush className="text-primary" size={24} />,
      skills: [
        { name: 'UI Design', percentage: 95, color: 'from-primary to-pink-400' },
        { name: 'UX Research', percentage: 85, color: 'from-primary to-pink-400' },
        { name: 'Wireframing', percentage: 92, color: 'from-primary to-pink-400' },
        { name: 'Prototyping', percentage: 90, color: 'from-primary to-pink-400' },
        { name: 'User Testing', percentage: 82, color: 'from-primary to-pink-400' },
      ],
    },
    {
      title: 'Graphic Design',
      icon: <FaPaintBrush className="text-secondary" size={24} />,
      skills: [
        { name: 'Adobe Photoshop', percentage: 90, color: 'from-secondary to-blue-400' },
        { name: 'Adobe Illustrator', percentage: 85, color: 'from-secondary to-blue-400' },
        { name: 'Adobe InDesign', percentage: 80, color: 'from-secondary to-blue-400' },
        { name: 'Typography', percentage: 88, color: 'from-secondary to-blue-400' },
        { name: 'Color Theory', percentage: 92, color: 'from-secondary to-blue-400' },
      ],
    },
    {
      title: 'Web & Mobile',
      icon: <FaMobileAlt className="text-accent-1" size={24} />,
      skills: [
        { name: 'Responsive Design', percentage: 88, color: 'from-accent-1 to-yellow-400' },
        { name: 'Mobile UI Design', percentage: 90, color: 'from-accent-1 to-yellow-400' },
        { name: 'App Design', percentage: 85, color: 'from-accent-1 to-yellow-400' },
        { name: 'HTML/CSS', percentage: 75, color: 'from-accent-1 to-yellow-400' },
        { name: 'Design Systems', percentage: 82, color: 'from-accent-1 to-yellow-400' },
      ],
    },
    {
      title: 'Soft Skills',
      icon: <FaBrain className="text-accent-2" size={24} />,
      skills: [
        { name: 'Creativity', percentage: 95, color: 'from-accent-2 to-green-400' },
        { name: 'Communication', percentage: 90, color: 'from-accent-2 to-green-400' },
        { name: 'Problem Solving', percentage: 88, color: 'from-accent-2 to-green-400' },
        { name: 'Time Management', percentage: 85, color: 'from-accent-2 to-green-400' },
        { name: 'Teamwork', percentage: 92, color: 'from-accent-2 to-green-400' },
      ],
    },
  ];

  const designTools = [
    { name: 'Figma', icon: '/figma.png', proficiency: 'Expert' },
    { name: 'Adobe XD', icon: '/xd.png', proficiency: 'Advanced' },
    { name: 'Sketch', icon: '/sketch.png', proficiency: 'Intermediate' },
    { name: 'Photoshop', icon: '/photoshop.png', proficiency: 'Expert' },
    { name: 'Illustrator', icon: '/illustrator.png', proficiency: 'Advanced' },
    { name: 'InDesign', icon: '/indesign.png', proficiency: 'Intermediate' },
    { name: 'After Effects', icon: '/after-effects.png', proficiency: 'Beginner' },
    { name: 'Premiere Pro', icon: '/premiere.png', proficiency: 'Intermediate' },
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
              Skills and <span className="gradient-text">Abilities</span>
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
              Skills and expertise I have developed throughout my journey as a designer
            </motion.p>
          </div>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
                data-aos="fade-up"
                data-aos-delay={categoryIndex * 100}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-light-bg rounded-full mr-4">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{skill.name}</span>
                        <span>{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <motion.div
                          className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color || 'from-primary to-secondary'}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: false }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 * skillIndex }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Design Tools */}
          <div className="mt-20" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center mb-12">Design <span className="gradient-text">Tools</span></h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {designTools.map((tool, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <div className="absolute inset-0 mx-auto flex items-center justify-center">
                      <FaLaptopCode size={32} className="text-gray-300" />
                    </div>
                  </div>
                  <h3 className="font-bold mb-1">{tool.name}</h3>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    tool.proficiency === 'Expert' 
                      ? 'bg-primary/10 text-primary' 
                      : tool.proficiency === 'Advanced'
                      ? 'bg-secondary/10 text-secondary'
                      : tool.proficiency === 'Intermediate'
                      ? 'bg-accent-1/10 text-accent-1'
                      : 'bg-accent-2/10 text-accent-2'
                  }`}>
                    {tool.proficiency}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning & Growth */}
      <section className="py-20 bg-light-bg" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Learning and <span className="gradient-text">Skill Development</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              I never stop learning and consistently develop my skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="card text-center"
              whileHover={{ y: -10 }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Online Learning</h3>
              <p>I continuously learn through various online courses such as Udemy, Coursera, and others</p>
            </motion.div>

            <motion.div 
              className="card text-center"
              whileHover={{ y: -10 }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-secondary to-blue-400 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Workshops and Seminars</h3>
              <p>I attend various workshops and seminars to enhance my knowledge and network</p>
            </motion.div>

            <motion.div 
              className="card text-center"
              whileHover={{ y: -10 }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-1 to-yellow-400 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Online Communities</h3>
              <p>I am part of design communities that share knowledge and various insights</p>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg mb-8 max-w-2xl mx-auto font-semibold">
              &ldquo;Learning never ends, just like art and design have no limits&rdquo;
            </p>
            <div className="inline-block bg-gradient-to-r from-primary to-secondary px-8 py-3 rounded-full text-white font-bold">
              Learn Every Day, Grow Every Day
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 