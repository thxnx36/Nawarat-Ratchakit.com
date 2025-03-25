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
}

// Sample project data
const projects = [
  {
    id: 1,
    title: 'Mobile Banking App',
    category: 'UI/UX Design',
    image: 'https://placehold.co/600x400/ff69b4/ffffff?text=Banking+App',
    description: 'User-friendly and highly secure banking application design',
  },
  {
    id: 2,
    title: 'E-commerce Website',
    category: 'Web Design',
    image: 'https://placehold.co/600x400/00bfff/ffffff?text=E-commerce',
    description: 'Beautiful and easy-to-use online shopping website design',
  },
  {
    id: 3,
    title: 'Brand Identity',
    category: 'Branding',
    image: 'https://placehold.co/600x400/ffff00/000000?text=Brand+Identity',
    description: 'Brand identity design for a local coffee shop',
  },
  {
    id: 4,
    title: 'Social Media Campaign',
    category: 'Graphic Design',
    image: 'https://placehold.co/600x400/00ff7f/ffffff?text=Social+Media',
    description: 'Social media campaign design for a new product launch',
  },
  {
    id: 5,
    title: 'Music App Interface',
    category: 'UI/UX Design',
    image: 'https://placehold.co/600x400/ff69b4/ffffff?text=Music+App',
    description: 'Beautiful and user-friendly music application interface',
  },
  {
    id: 6,
    title: 'Restaurant Menu',
    category: 'Graphic Design',
    image: 'https://placehold.co/600x400/00bfff/ffffff?text=Restaurant+Menu',
    description: 'Stylish menu design for a restaurant with unique branding',
  },
];

// Project categories
const categories = [
  'All',
  'UI/UX Design',
  'Web Design',
  'Graphic Design',
  'Branding',
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects by category
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  // Open project detail modal
  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
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
              A collection of my UI/UX designs, graphic design work, and branding projects that I&apos;m proud to showcase
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
                    ? 'bg-gradient-to-r from-[#ff69b4] to-[#00bfff] text-white shadow-md'
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
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="relative h-[40vh]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <button
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
                  onClick={() => setModalOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-8">
                <span className="text-sm text-[#ff69b4] font-semibold">{selectedProject.category}</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold mb-2">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Figma', 'Adobe Photoshop', 'Adobe Illustrator'].map((tool, i) => (
                        <span key={i} className="px-3 py-1 bg-light-bg rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Project Duration</h4>
                    <p>2 weeks</p>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <Link href={`/portfolio/project-${selectedProject.id}`}>
                    <button className="colorful-btn flex items-center">
                      <FaLink className="mr-2" /> View Project Details
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MainLayout>
  );
}