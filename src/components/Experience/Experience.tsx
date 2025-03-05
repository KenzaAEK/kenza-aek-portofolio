import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Innovators Inc.',
    period: '2022 - Present',
    location: 'San Francisco, CA',
    description: [
      'Led the development of a next-generation web application using React and TypeScript',
      'Implemented performance optimizations resulting in 40% faster load times',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    location: 'New York, NY',
    description: [
      'Developed and maintained multiple client projects using React and Node.js',
      'Implemented CI/CD pipelines and automated testing procedures',
      'Collaborated with design team to improve user experience',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'StartUp Vision',
    period: '2018 - 2020',
    location: 'Boston, MA',
    description: [
      'Built and launched a successful SaaS platform from scratch',
      'Integrated payment processing and subscription management systems',
      'Worked directly with clients to gather requirements and implement features',
    ],
  },
];

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600">
            My journey through various roles and companies
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-mint-200 via-lavender-200 to-soft-blue-200" />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div
                className={`flex items-center mb-6 ${
                  index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                }`}
              >
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{experience.period}</span>
                </div>
              </div>

              <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-mint-400 rounded-full border-4 border-white shadow-sm" />

                <div className="flex items-center mb-4">
                  <Briefcase className="w-5 h-5 text-mint-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
                </div>

                <div className="mb-4">
                  <p className="text-lg text-gray-700">{experience.company}</p>
                  <p className="text-gray-600">{experience.location}</p>
                </div>

                <ul className="space-y-2">
                  {experience.description.map((item, i) => (
                    <li key={i} className="text-gray-600 flex items-start">
                      <span className="w-2 h-2 mt-2 mr-2 bg-mint-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};