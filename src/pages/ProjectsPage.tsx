import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star, X, Code2 } from 'lucide-react';
import { PageHeader } from '../components/Layout/PageHeader';

const featuredProject = {
  title: 'Explore Morocco: Intelligent Tourist Assistant',
  description: 'A digital platform modernizing Moroccan tourism through interactive and intelligent tools.',
  image: 'https://source.unsplash.com/600x400/?travel,technology',
  technologies: ['Spring Boot', 'Spring Cloud', 'React.js', 'Mapbox', 'JWT', 'TensorFlow', 'Docker', 'Kubernetes', 'GitHub Actions'],
  challenges: [
    'Developed a microservices-based platform with secured authentication using JWT.',
    'Created an interactive user interface with chatbot and dynamic filters for seamless navigation.',
    'Implemented an AI-powered itinerary planner using TensorFlow for personalized travel recommendations.',
    'Deployed microservices using Docker and Kubernetes on a scalable cloud infrastructure.'
  ],
  liveUrl: '#',
  githubUrl: '#',
};

const projects = [
  {
    title: 'AI-Powered Pneumonia Diagnosis',
    description: 'An AI-driven application designed to assist in diagnosing pneumonia by analyzing chest X-ray images with deep learning techniques.',
    image: 'https://source.unsplash.com/600x400/?healthcare,AI',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'scikit-learn', 'NumPy', 'Pandas', 'Flask', 'Streamlit', 'Docker', 'Git'],
    challenges: [
      'Developed an AI-powered application to assist in diagnosing pneumonia through automated analysis of chest X-ray images.',
      'Designed and implemented a Convolutional Neural Network (CNN) model for image classification, achieving high accuracy in detecting pneumonia presence.',
      'Utilized Transfer Learning with pretrained models (e.g., ResNet, EfficientNet) to enhance model performance and reduce training time.',
      'Preprocessed and augmented medical image datasets to improve generalization and model robustness.',
      'Evaluated model performance using accuracy, precision, recall, and AUC-ROC to ensure reliability and effectiveness.',
      'Built a user-friendly interface for medical professionals to upload X-ray images and receive instant diagnostic predictions.',
      'Deployed the application using Flask/Streamlit and containerized it with Docker for scalability and ease of use.',
      'Prioritized data security and ensured compliance with medical data privacy standards.'
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Optimization of Industrial Water Pump Maintenance',
    description: 'An AI-driven predictive maintenance system for industrial water pumps using deep learning and genetic algorithms.',
    image: 'https://source.unsplash.com/600x400/?industry,AI',
    technologies: ['LSTM', 'Genetic Algorithms', 'TensorFlow', 'Python'],
    challenges: [
      'Developed an AI model combining LSTM networks and genetic algorithms to enhance predictive maintenance.',
      'Trained LSTM models to analyze sensor data and predict potential failures.',
      'Optimized maintenance schedules using genetic algorithms, reducing operational costs and downtime.'
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Solar System and NEOs Visualization Platform',
    description: 'An interactive web-based educational tool for exploring the solar system and Near-Earth Objects (NEOs), awarded 1st place at NASA Space Apps Challenge Tanger 2024.',
    image: 'https://source.unsplash.com/600x400/?space,science',
    technologies: ['Vue.js', 'Three.js', 'Blender', 'Godot 4', 'TensorFlow', 'Keras', 'Python'],
    challenges: [
      'Developed an interactive web application visualizing 3D planets and NEOs using real NASA data.',
      'Built an integrated 2D learning game with Godot 4 to reinforce learning through interactive quizzes.',
      'Implemented a Machine Learning model using RNN with LSTM for predicting NEO-related events.'
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Cookly: AI-Powered Recipe Recommendation App',
    description: 'A mobile application that helps users discover personalized recipes based on available ingredients and nutritional goals.',
    image: 'https://source.unsplash.com/600x400/?food,app',
    technologies: ['Next.js', 'React Native', 'MongoDB', 'GPT AI', 'Docker', 'Kubernetes', 'GitHub Actions'],
    challenges: [
      'Developed a scalable mobile platform with real-time recipe recommendations.',
      'Integrated an intelligent search engine with advanced filters (dietary restrictions, calories) powered by AI.',
      'Deployed the application on a cloud infrastructure using Docker, Kubernetes, and CI/CD pipelines.'
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Ecocrops: AI-Driven Sustainable Agriculture Platform',
    description: 'A digital platform enabling farmers to optimize crop planning and adopt sustainable agricultural practices.',
    image: 'https://source.unsplash.com/600x400/?agriculture,technology',
    technologies: ['React.js', 'AI Models', 'APIs', 'JUnit', 'Postman', 'Jenkins'],
    challenges: [
      'Designed an intuitive user interface for farmers to access AI-powered recommendations.',
      'Integrated APIs connecting AI models with real-time agricultural data.',
      'Implemented a CI/CD pipeline using Jenkins for automated testing and deployment.'
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'E-Move: Smart Electric Mobility Platform',
    description: 'A web and mobile application for electric vehicle sharing, optimized through AI and predictive analytics.',
    image: 'https://source.unsplash.com/600x400/?electric,vehicles',
    technologies: ['Next.js', 'React Native', 'FastAPI', 'Flask', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'Azure'],
    challenges: [
      'Developed a real-time GPS tracking system for electric vehicle location and monitoring.',
      'Built an AI-powered predictive maintenance system to optimize vehicle distribution and battery usage.',
      'Integrated an interactive chatbot for smart reservation assistance using LLM-based models.',
      'Implemented multimodal trip planning with integration of public transport options.'
    ],
    liveUrl: '#',
    githubUrl: '#',
  }
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