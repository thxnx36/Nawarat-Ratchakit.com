'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';
import { FaGraduationCap, FaAward, FaLaptopCode, FaPalette } from 'react-icons/fa';

export default function AboutPage() {
  const skills = [
    { name: 'UI Design', percentage: 95 },
    { name: 'UX Research', percentage: 85 },
    { name: 'Graphic Design', percentage: 90 },
    { name: 'Wireframing', percentage: 95 },
    { name: 'Prototyping', percentage: 90 },
    { name: 'Brand Identity', percentage: 85 },
  ];

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
                Hello! I&apos;m <span className="gradient-text">Chi Chi</span>
              </h2>
              <p className="text-lg mb-6">
                I am a UI/UX Designer and Graphic Designer who is passionate about creating beautiful designs with great functionality. Through continuous learning and practice, I&apos;ve developed distinctive design skills with a unique personal style.
              </p>
              <p className="text-lg mb-6">
                I enjoy creating colorful, creative designs that prioritize the user experience. I believe great design isn&apos;t just visually appealing—it must be practical and meet user needs effectively.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="px-6 py-2 bg-light-bg rounded-full font-semibold">
                  #UIDesign
                </div>
                <div className="px-6 py-2 bg-light-bg rounded-full font-semibold">
                  #UXDesign
                </div>
                <div className="px-6 py-2 bg-light-bg rounded-full font-semibold">
                  #GraphicDesign
                </div>
                <div className="px-6 py-2 bg-light-bg rounded-full font-semibold">
                  #Creativity
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-light-bg" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Skills and expertise I&apos;ve developed throughout my learning journey and work experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    className="h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              History & <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              My journey of learning and skill development
            </p>
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
                  <div className="bg-gradient-to-r from-primary to-secondary w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg">
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

      {/* Education Section */}
      <section className="py-20 bg-light-bg" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              My educational background and knowledge development
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card mb-6" data-aos="fade-up">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="text-primary font-semibold">2019 - 2023</div>
                  <div className="font-bold">Bachelor&apos;s Degree</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">Digital Media Design</h3>
                  <p className="text-gray-600 mb-2">Leading University, Thailand</p>
                  <p>Studied design principles, user research, UI/UX design, graphic design, and brand design</p>
                </div>
              </div>
            </div>
            
            <div className="card mb-6" data-aos="fade-up" data-aos-delay="100">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="text-primary font-semibold">2022</div>
                  <div className="font-bold">Online Course</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">Advanced UI/UX Design</h3>
                  <p className="text-gray-600 mb-2">Udemy</p>
                  <p>Learned advanced UI/UX design techniques and how to create design systems</p>
                </div>
              </div>
            </div>
            
            <div className="card" data-aos="fade-up" data-aos-delay="200">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="text-primary font-semibold">2021</div>
                  <div className="font-bold">Workshop</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">Graphic Design Masterclass</h3>
                  <p className="text-gray-600 mb-2">Creative Design Academy</p>
                  <p>Learned creative graphic design techniques and professional design software usage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 