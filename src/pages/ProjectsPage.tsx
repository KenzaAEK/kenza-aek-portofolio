import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star, X, Code2 } from 'lucide-react';
import { PageHeader } from '../components/Layout/PageHeader';

const featuredProject = {
  title: 'E-Commerce Platform',
  description: 'A modern e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing with Stripe, and a responsive admin dashboard. The platform supports multiple vendors, product categories, and includes an analytics system.',
  image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  technologies: ['React', 'Node.js', 'Stripe', 'MongoDB', 'Redux', 'TypeScript'],
  challenges: [
    'Implemented real-time inventory synchronization across multiple vendors',
    'Optimized image loading and caching for faster page loads',
    'Developed a scalable architecture to handle high traffic loads',
  ],
  liveUrl: '#',
  githubUrl: '#',
};

const projects = [
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    challenges: [
      'Implemented real-time updates using WebSocket',
      'Built a drag-and-drop interface for task management',
      'Integrated team chat and notification system',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard with interactive maps and detailed forecasts using multiple weather APIs.',
    image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Mapbox'],
    challenges: [
      'Integrated multiple weather data sources',
      'Built interactive weather maps',
      'Implemented efficient data caching',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Social Media Analytics',
    description: 'A comprehensive analytics dashboard for social media management and performance tracking.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    challenges: [
      'Created interactive data visualizations',
      'Implemented real-time data processing',
      'Built a custom reporting engine',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
];

interface ProjectModalProps {
  project: typeof projects[0];
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
          <p className="text-gray-600 mb-6">{project.description}</p>

          <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-mint-50 text-mint-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <h4 className="font-semibold text-gray-900 mb-2">Key Challenges & Solutions</h4>
          <ul className="space-y-2 mb-6">
            {project.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start text-gray-600">
                <Code2 className="w-5 h-5 mr-2 text-mint-600 flex-shrink-0 mt-1" />
                {challenge}
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center px-4 py-2 bg-mint-600 text-white rounded-lg hover:bg-mint-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ProjectsPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader
        title="Featured Projects"
        description="A showcase of my recent work and technical achievements"
      />

      <section className="py-20 bg-white">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Featured Project */}
          <motion.div
            variants={itemVariants}
            className="mb-24 bg-gradient-to-br from-mint-50/50 via-lavender-50/50 to-soft-blue-50/50 rounded-2xl p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-gray-900 mb-6 relative inline-block"
                >
                  {featuredProject.title}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-mint-400 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 mb-6"
                >
                  {featuredProject.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-2 mb-8"
                >
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-mint-100 text-mint-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-4"
                >
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-mint-600 text-white rounded-lg hover:bg-mint-700 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="relative w-full aspect-[16/10] bg-gray-900 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                {/* Laptop Stand */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-full blur-sm" />
              </motion.div>
            </div>
          </motion.div>

          {/* Other Projects Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">
              Other Notable Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="px-4 py-2 bg-white/90 text-gray-900 rounded-lg font-medium hover:bg-white transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-mint-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-mint-50 text-mint-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Star className="w-5 h-5 mr-2" />
              View More Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};