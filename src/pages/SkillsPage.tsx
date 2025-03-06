import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  Layout, 
  Server, 
  Star, 
  Trophy, 
  Terminal, 
  GitBranch, 
  Cpu, 
  BarChart2, 
  Figma, 
  Monitor, 
  TestTube, 
  Cloud
} from 'lucide-react';
import { PageHeader } from '../components/Layout/PageHeader';

const skills = {
  programming: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'C#', 'SQL'],
  frontend: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Bootstrap'],
  backend: ['Spring Boot', 'Spring Cloud', 'Flask', 'Node.js', 'REST APIs', 'GraphQL', 'Microservices'],
  devops: ['GitHub Actions', 'Jenkins', 'Docker', 'Kubernetes'],
  databases: ['PostgreSQL', 'MySQL', 'Oracle SQL', 'MongoDB'],
  testing: ['JUnit', 'Selenium'],
  ml: ['TensorFlow', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'Data Preprocessing'],
  analytics: ['Power BI', 'Looker'],
  design: ['Figma', 'Adobe Illustrator', 'Canva', 'Wireframing'],
  virtualization: ['VMware', 'VirtualBox', 'Network Configuration']
};

const certifications = [
  {
    name: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    date: '2024',
    icon: Trophy,
  },
  {
    name: 'Professional Web Developer',
    issuer: 'Google',
    date: '2023',
    icon: Star,
  },
];

export const SkillsPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    { name: 'Programming Languages', skills: skills.programming, icon: Terminal, color: 'mint' },
    { name: 'Frontend', skills: skills.frontend, icon: Layout, color: 'lavender' },
    { name: 'Backend & Frameworks', skills: skills.backend, icon: Server, color: 'soft-blue' },
    { name: 'DevOps & Tools', skills: skills.devops, icon: GitBranch, color: 'mint' },
    { name: 'Databases', skills: skills.databases, icon: Database, color: 'lavender' },
    { name: 'Testing & QA', skills: skills.testing, icon: TestTube, color: 'soft-blue' },
    { name: 'Machine Learning & Data Science', skills: skills.ml, icon: Cpu, color: 'mint' },
    { name: 'Data Analytics', skills: skills.analytics, icon: BarChart2, color: 'lavender' },
    { name: 'UI/UX & Design', skills: skills.design, icon: Figma, color: 'soft-blue' },
    { name: 'Virtualization', skills: skills.virtualization, icon: Cloud, color: 'mint' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader
        title="Skills & Expertise"
        description="A comprehensive overview of my technical skills and certifications"
      />

      <section className="py-20 bg-white">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-${category.color}-400`}
              >
                <div className="flex items-center mb-6">
                  <div className={`flex items-center justify-center w-10 h-10 bg-${category.color}-100 rounded-lg mr-3`}>
                    <category.icon className={`w-5 h-5 text-${category.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 bg-${category.color}-50 text-${category.color}-700 rounded-full text-sm`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-mint-100 to-lavender-100 rounded-lg mr-4">
                      <cert.icon className="w-6 h-6 text-gray-800" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {cert.name}
                      </h4>
                      <p className="text-gray-600">
                        {cert.issuer} • {cert.date}
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