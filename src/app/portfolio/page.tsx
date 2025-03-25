'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { FaLink, FaSearch } from 'react-icons/fa';

// Project interface
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client?: string;
  duration?: string;
  tools?: string[];
  additionalImages?: string[];
  detailDescription?: string;
}

// Sample project data
const projects = [
  {
    id: 1,
    title: 'Mood Diary Application',
    category: 'UI/UX Design',
    image: '/images/project1.png',
    description: 'Record your daily emotions in a cute way',
    additionalImages: [
      '/images/project1-1.png',
      '/images/project1-2.png',
      '/images/project1-3.png'
    ],
    detailDescription: 'Record your daily mood to view your mood retrospectively and analyze your mood at that time.'
  },
  {
    id: 2,
    title: 'Meow Meow Journey Application',
    category: 'UI/UX Design',
    image: '/images/project2.png',
    description: "Design an application for pet owners to track their pet's journey",
    additionalImages: [
      '/images/project2-1.png',
      '/images/project2-2.png',
      '/images/project2-3.png'
    ],
    detailDescription: 'Design UX/UI for a pet lover application with many functions.'
  },
  {
    id: 3,
    title: 'E-commerce Website',
    category: 'Graphic Design',
    image: '/images/project3.png',
    description: 'Design for Management System - 2023',
    additionalImages: [
      '/images/project2-1.png',
      '/images/project2-2.png',
      '/images/project2-3.png'
    ],
    detailDescription: 'Design a pattern on a water bottle that represents my personality.'
  },
  {
    id: 4,
    title: 'Movie Web Application',
    category: 'Web Design',
    image: '/images/project3-1.png',
    description: 'Beautiful and easy-to-use online shopping website design with responsive layout and optimized checkout process.',
    additionalImages: [
      '/images/project3-1.png',
      '/images/project3-2.png',
      '/images/project3-3.png'
    ],
    detailDescription: 'This e-commerce platform was designed to enhance the online shopping experience with an attractive and user-friendly interface. The design incorporates responsive layouts that work seamlessly across devices, optimized product displays, and a streamlined checkout process. Special attention was given to product categorization, search functionality, and visual hierarchy to guide users through their shopping journey.'
  },
  {
    id: 5,
    title: 'Shop Management System By Excel VBA',
    category: 'Web Design By Excel VBA',
    image: '/images/project4-1.png',
    description: 'Beautiful and easy-to-use online shopping website design with responsive layout and optimized checkout process.',
    additionalImages: [
      '/images/project4-2.png',
      '/images/project4-3.png',
      '/images/project4-4.png'
    ],
    detailDescription: 'This e-commerce platform was designed to enhance the online shopping experience with an attractive and user-friendly interface. The design incorporates responsive layouts that work seamlessly across devices, optimized product displays, and a streamlined checkout process. Special attention was given to product categorization, search functionality, and visual hierarchy to guide users through their shopping journey.'
  },
  {
    id: 6,
    title: 'Mobile Banking App',
    category: 'UI/UX Design',
    image: '/images/project5-1.png',
    description: 'Beautiful and easy-to-use online shopping website design with responsive layout and optimized checkout process.',
    additionalImages: [
      '/images/project5-1.png',
      '/images/project5-2.png',
      '/images/project5-3.png'
    ],
    detailDescription: 'This e-commerce platform was designed to enhance the online shopping experience with an attractive and user-friendly interface. The design incorporates responsive layouts that work seamlessly across devices, optimized product displays, and a streamlined checkout process. Special attention was given to product categorization, search functionality, and visual hierarchy to guide users through their shopping journey.'
  },
  {
    id: 7,
    title: 'Data Visualization',
    category: 'Slide Present By PowerPoint',
    image: '/images/project6-1.png',
    description: 'Beautiful and easy-to-use online shopping website design with responsive layout and optimized checkout process.',
    additionalImages: [
      '/images/project6-1.png',
      '/images/project6-2.png',
      '/images/project6-3.png'
    ],
    detailDescription: 'This e-commerce platform was designed to enhance the online shopping experience with an attractive and user-friendly interface. The design incorporates responsive layouts that work seamlessly across devices, optimized product displays, and a streamlined checkout process. Special attention was given to product categorization, search functionality, and visual hierarchy to guide users through their shopping journey.'
  },
  {
    id: 8,
    title: 'Design Gaming Chair by Odoo',
    category: 'Graphic Design',
    image: '/images/project7.png',
    description: 'Beautiful and easy-to-use online shopping website design with responsive layout and optimized checkout process.',
    additionalImages: [
      '/images/project7-1.png',
      '/images/project7-2.png',
      '/images/project7-3.png'
    ],
    detailDescription: 'This e-commerce platform was designed to enhance the online shopping experience with an attractive and user-friendly interface. The design incorporates responsive layouts that work seamlessly across devices, optimized product displays, and a streamlined checkout process. Special attention was given to product categorization, search functionality, and visual hierarchy to guide users through their shopping journey.'
  },
  {
    id: 9,
    title: 'E-commerce Website',
    category: 'UI/UX Design',
    image: '/images/project2.png',
    description: 'Beautiful and easy-to-use online shopping website design with responsive layout and optimized checkout process.',
    additionalImages: [
      '/images/project2-1.png',
      '/images/project2-2.png',
      '/images/project2-3.png'
    ],
    detailDescription: 'This e-commerce platform was designed to enhance the online shopping experience with an attractive and user-friendly interface. The design incorporates responsive layouts that work seamlessly across devices, optimized product displays, and a streamlined checkout process. Special attention was given to product categorization, search functionality, and visual hierarchy to guide users through their shopping journey.'
  },
];

// Project categories
const categories = [
  'All',
  'UI/UX Design',
  'Web Design',
  'Graphic Design',
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // Filter projects by category
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  // Open project detail modal
  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Open image preview
  const openImagePreview = (e: React.MouseEvent, imageUrl: string) => {
    e.stopPropagation();
    setSelectedImage(imageUrl);
    setPreviewOpen(true);
  };

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
              My <span className="gradient-text">Portfolio</span>
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-[#00bfff] to-[#00bfff] mx-auto mb-8"
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

          {/* Portfolio Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[#ff69b4] to-[#ff69b4] text-white shadow-md'
                    : 'bg-white hover:bg-light-bg'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="card overflow-hidden group"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  data-aos="fade-up"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ff69b4]/80 to-[#00bfff]/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                      <motion.button
                        onClick={() => openProjectModal(project)}
                        className="bg-white text-[#ff69b4] p-3 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaSearch size={20} />
                      </motion.button>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-[#ff69b4] font-semibold">{project.category}</span>
                    <h3 className="text-xl font-bold mt-2 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {modalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="relative h-[40vh] rounded-t-2xl overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <button
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
                  onClick={() => setModalOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="inline-block px-3 py-1 bg-[#ff69b4]/80 backdrop-blur-sm rounded-full text-sm font-semibold mb-2">{selectedProject.category}</span>
                  <h3 className="text-3xl font-bold text-white drop-shadow-md">{selectedProject.title}</h3>
                </div>
              </div>
              <div className="p-8">
                {/* Client info */}
                {selectedProject.client && (
                  <div className="mb-6 flex items-center">
                    <span className="text-gray-700 font-semibold mr-2">Client: </span>
                    <span className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm">{selectedProject.client}</span>
                  </div>
                )}
                
                {/* Detailed description */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Project Description</h4>
                  <p className="text-gray-600">
                    {selectedProject.detailDescription || selectedProject.description}
                  </p>
                </div>
                
                {/* Tools section if available */}
                {selectedProject.tools && selectedProject.tools.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 text-gray-800">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1 bg-gradient-to-r from-[#ff69b4]/10 to-[#00bfff]/10 rounded-full text-sm border border-[#ff69b4]/20">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Additional images gallery with lightbox functionality */}
                {selectedProject.additionalImages && selectedProject.additionalImages.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 text-gray-800">Example</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedProject.additionalImages.map((img, index) => (
                        <motion.div 
                          key={index} 
                          className="relative h-48 overflow-hidden rounded-xl shadow-sm group cursor-pointer"
                          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                          whileTap={{ scale: 0.97 }}
                          onClick={(e) => openImagePreview(e, img)}
                        >
                          <Image
                            src={img}
                            alt={`${selectedProject.title} detail ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="bg-white/80 backdrop-blur-sm text-[#ff69b4] p-3 rounded-full">
                              <FaSearch size={20} />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="border-t pt-6 flex justify-between items-center">
                  <Link href={`/portfolio/project-${selectedProject.id}`}>
                    <motion.button 
                      className="bg-gradient-to-r from-[#ff69b4] to-[#00bfff] text-white px-6 py-3 rounded-full font-semibold flex items-center shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaLink className="mr-2" /> More Details
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {previewOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewOpen(false)}
          >
            <motion.div 
              className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="relative w-full h-full">
                <Image 
                  src={selectedImage}
                  alt="Preview image"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              <button 
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110"
                onClick={() => setPreviewOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MainLayout>
  );
}