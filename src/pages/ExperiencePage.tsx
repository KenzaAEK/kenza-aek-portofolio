import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Award, Heart, Users, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { PageHeader } from '../components/Layout/PageHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Experience Data
const experienceCategories = {
  professional: {
    icon: Briefcase,
    title: 'Professional',
    items: [
      {
        role: 'Software Engineering Intern',
        company: 'Renault Group Tangier',
        location: 'Tangier, MA',
        date: 'June 2024 - July 2024',
        achievements: [
          'Gained valuable insights into how digitalization of information systems enhances quality and efficiency in the industrial sector. Renault, as a leader in this field, showcases how technological innovation is transforming the industry.',
          'Contributed to the automation and analysis of quality processes by digitalizing defect collection using Demeter.',
          'Worked on modeling dynamic KPIs using Power BI and Looker, enabling better insights for process optimization',
          'Participated in an applied AI project focused on the automatic detection of pedestrian crossings in the factory. My role involved refining the YOLO model to improve detection accuracy.'
        ],
        technologies: ['PowerBI', 'Looker', 'Python', 'TensorFlow','OpenCV']
      },
      {
        role: 'Junior Developer',
        company: 'StartUp Vision',
        location: 'Remote',
        date: 'Jan 2023 - May 2023',
        achievements: [
          'Built responsive web components using React and Tailwind CSS',
          'Implemented user authentication system with JWT',
          'Participated in daily stand-ups and code reviews'
        ],
        technologies: ['React', 'Tailwind CSS', 'Firebase', 'Jest']
      }
    ]
  },
  leadership: {
    icon: Users,
    title: 'Leadership',
    items: [
      {
        role: 'Tech Club President',
        company: 'University Tech Society',
        location: 'University Campus',
        date: '2022 - Present',
        achievements: [
          'Led a team of 20+ members in organizing tech workshops and hackathons',
          'Increased club membership by 150% through outreach initiatives',
          'Established partnerships with 5 tech companies for student opportunities'
        ],
        technologies: ['Event Planning', 'Team Leadership', 'Public Speaking']
      }
    ]
  },
  volunteer: {
    icon: Heart,
    title: 'Volunteer',
    items: [
      {
        role: 'Code Mentor',
        company: 'CodePath.org',
        location: 'Virtual',
        date: '2022 - Present',
        achievements: [
          'Mentored 15+ students in web development fundamentals',
          'Created learning materials for JavaScript and React courses',
          'Conducted weekly office hours and code reviews'
        ],
        technologies: ['Teaching', 'Web Development', 'Mentorship']
      }
    ]
  },
  awards: {
    icon: Award,
    title: 'Awards',
    items: [
      {
        role: 'First Place',
        company: 'University Hackathon 2023',
        location: 'University Campus',
        date: 'Oct 2023',
        achievements: [
          'Developed an AI-powered accessibility tool for visually impaired users',
          'Implemented real-time image recognition using TensorFlow',
          'Presented solution to panel of industry judges'
        ],
        technologies: ['React Native', 'TensorFlow', 'Azure Cloud']
      }
    ]
  }
};

export const ExperiencePage = () => {
  const [activeCategory, setActiveCategory] = useState('professional');
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
        title="Experience & Achievements"
        description="A journey through my professional growth, leadership roles, and contributions"
      />

      <section className="py-20 bg-white">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Category Navigation */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-12 space-x-2 md:space-x-4"
          >
            {Object.entries(experienceCategories).map(([key, category]) => {
              const Icon = category.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeCategory === key
                      ? 'bg-mint-100 text-mint-700 shadow-md scale-105'
                      : 'bg-gray-50 text-gray-600 hover:bg-mint-50 hover:text-mint-600'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  <span className="hidden md:inline">{category.title}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Experience Cards Swiper */}
          <motion.div
            variants={itemVariants}
            className="relative px-12"
          >
            <Swiper
              modules={[Navigation, Keyboard, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              keyboard={{
                enabled: true,
                onlyInViewport: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="!overflow-visible"
            >
              <AnimatePresence mode="wait">
                {experienceCategories[activeCategory as keyof typeof experienceCategories].items.map((item, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 h-full group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-mint-600 transition-colors">
                          {item.role}
                        </h3>
                        <span className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {item.date}
                        </span>
                      </div>

                      <div className="mb-4">
                        <div className="text-lg text-gray-700 mb-1">{item.company}</div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {item.location}
                        </div>
                      </div>

                      <ul className="mb-6 space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-600 text-sm flex items-start">
                            <span className="w-1.5 h-1.5 mt-1.5 mr-2 bg-mint-400 rounded-full flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {item.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-mint-50 text-mint-700 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </AnimatePresence>
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-md text-gray-700 hover:text-mint-600 transition-colors z-10">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-md text-gray-700 hover:text-mint-600 transition-colors z-10">
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};