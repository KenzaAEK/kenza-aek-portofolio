import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Users } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer who loves creating beautiful and functional digital experiences.
            With a keen eye for design and a love for clean code, I bring ideas to life through technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={itemVariants}
            className="bg-mint-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-mint-100 rounded-lg mb-6 mx-auto">
              <Code2 className="w-6 h-6 text-mint-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Technical Expertise</h3>
            <p className="text-gray-600 text-center">
              Specializing in modern web technologies and best practices to build scalable applications.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-lavender-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-lavender-100 rounded-lg mb-6 mx-auto">
              <Palette className="w-6 h-6 text-lavender-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Design Focused</h3>
            <p className="text-gray-600 text-center">
              Creating intuitive and visually appealing interfaces that enhance user experience.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-soft-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-soft-blue-100 rounded-lg mb-6 mx-auto">
              <Users className="w-6 h-6 text-soft-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Team Player</h3>
            <p className="text-gray-600 text-center">
              Collaborating effectively with cross-functional teams to deliver outstanding results.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-20 bg-gradient-to-r from-mint-50 via-lavender-50 to-soft-blue-50 p-8 rounded-xl shadow-lg"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-4">
              With several years of experience in web development, I've had the opportunity to work on diverse projects
              that have shaped my expertise in creating user-centric applications.
            </p>
            <p className="text-gray-600">
              I'm constantly learning and exploring new technologies to stay at the forefront of web development.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};