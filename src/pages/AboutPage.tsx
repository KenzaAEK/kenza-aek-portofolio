import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Users, Star, Award } from 'lucide-react';
import { PageHeader } from '../components/Layout/PageHeader';

// Career highlights data
const careerHighlights = [
  {
    year: '2025',
    title: 'Nexus Forum Hackathon',
    company: 'Nexus Forum',
    description:
      'Built "EcoCrops," an AI-powered platform that bridges technology and sustainability, empowering farmers with data-driven insights to make smarter agricultural decisions.',
    achievements: [
      'Designed an intelligent system that helps farmers strategically plan crops, monitor growth, and maximize yields while minimizing waste.',
      'Integrated AI models to deliver personalized recommendations, transforming complex data into actionable guidance for farmers.',
      'Proved that AI and sustainability can work in harmony by addressing real-world agricultural challenges with innovative solutions.',
    ],
  },
  {
    year: '2022 - Present',
    title: 'Leading AI Workshops ',
    company: 'Computer Science Club',
    description:
      'Led AI initiatives to make artificial intelligence more approachable and engaging for students, bridging the gap between theory and hands-on experience.',
    achievements: [
      'Designed structured learning experiences that demystify AI concepts, covering everything from neural networks to reinforcement learning.',
      'Created immersive hands-on labs, allowing students to apply AI to real-world challenges, making learning both engaging and impactful.',
      'Mentored aspiring AI enthusiasts, fostering an inclusive and collaborative learning environment that inspires curiosity and innovation.',
      'Cultivated a culture of knowledge-sharing, helping students gain the confidence to transition from passive learners to active AI practitioners.',
    ],
  },
];

// Awards and recognition data
const awards = [
  {
    title: 'Outstanding Technical Leadership',
    organization: 'Tech Excellence Awards',
    year: '2023',
    icon: Award,
  },
  {
    title: 'Innovation in Web Development',
    organization: 'Developer Community Choice',
    year: '2022',
    icon: Star,
  },
];

export const AboutPage = () => {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader
        title="About Me"
        description="I'm a passionate software engineer with a love for creating
        elegant solutions to complex problems. My journey in tech has
        been driven by curiosity, creativity, and a commitment to
        building applications that make a difference."
      />

      {/* Core Competencies */}
      <section className="py-20 bg-white">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Core Competencies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Combining technical expertise, design thinking, and collaborative
              spirit to create exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              variants={itemVariants}
              className="bg-mint-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-mint-100 rounded-lg mb-6 mx-auto">
                <Code2 className="w-6 h-6 text-mint-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Technical Expertise
              </h3>
              <p className="text-gray-600 text-center">
                Specializing in modern web technologies and best practices to
                build scalable applications.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-lavender-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-lavender-100 rounded-lg mb-6 mx-auto">
                <Palette className="w-6 h-6 text-lavender-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Design Focused
              </h3>
              <p className="text-gray-600 text-center">
                Creating intuitive and visually appealing interfaces that
                enhance user experience.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-soft-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-soft-blue-100 rounded-lg mb-6 mx-auto">
                <Users className="w-6 h-6 text-soft-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Team Player
              </h3>
              <p className="text-gray-600 text-center">
                Collaborating effectively with cross-functional teams to deliver
                outstanding results.
              </p>
            </motion.div>
          </div>

          {/* Career Highlights */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Career Highlights
            </h2>
            <div className="space-y-12">
              {careerHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-mint-400 to-lavender-400 rounded-l-xl" />
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0 text-center md:text-left">
                      <span className="text-2xl font-bold text-mint-600">
                        {highlight.year}
                      </span>
                      <div className="text-xl font-semibold text-gray-900 mt-2">
                        {highlight.title}
                      </div>
                      <div className="text-gray-600">{highlight.company}</div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-600 mb-4">
                        {highlight.description}
                      </p>
                      <ul className="space-y-2">
                        {highlight.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <Star className="w-5 h-5 text-mint-600 mr-2 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Awards & Recognition */}
          {/* <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Awards & Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-mint-50 to-lavender-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm">
                      <award.icon className="w-6 h-6 text-mint-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {award.title}
                      </h3>
                      <p className="text-gray-600">
                        {award.organization} • {award.year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </motion.div>
      </section>
    </motion.div>
  );
};
