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
        { name: 'UX Research', percentage: 80, color: 'from-primary to-pink-400' },
        { name: 'Wireframing', percentage: 75, color: 'from-primary to-pink-400' },
        { name: 'Prototyping', percentage: 80, color: 'from-primary to-pink-400' },
        { name: 'User Testing', percentage: 75, color: 'from-primary to-pink-400' },
      ],
    },
    {
      title: 'Web & Mobile',
      icon: <FaMobileAlt className="text-accent-1" size={24} />,
      skills: [
        { name: 'Responsive Design', percentage: 88, color: 'from-accent-1 to-yellow-400' },
        { name: 'Mobile UI Design', percentage: 90, color: 'from-accent-1 to-yellow-400' },
        { name: 'App Design', percentage: 85, color: 'from-accent-1 to-yellow-400' },
        { name: 'HTML/CSS', percentage: 50, color: 'from-accent-1 to-yellow-400' },
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
    { name: 'Canva', icon: '/canva.png', proficiency: 'Advanced' },
    { name: 'Photoshop', icon: '/photoshop.png', proficiency: 'Expert' },
    { name: 'Illustrator', icon: '/illustrator.png', proficiency: 'Advanced' },
    { name: 'Power Point', icon: '/powerpoint.png', proficiency: 'Advanced' },
    { name: 'Miro', icon: '/miro.png', proficiency: 'Intermediate' },
    { name: 'Notion', icon: '/notion.png', proficiency: 'Intermediate' },
    { name: 'Thello', icon: '/thello.png', proficiency: 'Intermediate' },
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
            </motion.p>
          </div>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
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
                          className={`h-2.5 rounded-full bg-gradient-to-r ${
                            skill.percentage >= 90 ? 'from-pink-400 to-pink-600' :
                            skill.percentage >= 80 ? 'from-purple-400 to-purple-600' :
                            skill.percentage >= 70 ? 'from-blue-400 to-blue-600' :
                            'from-green-400 to-green-600'
                          }`}
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
    </MainLayout>
  );
} 