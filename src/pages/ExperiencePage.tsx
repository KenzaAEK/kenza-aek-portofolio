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
        role: 'AI Research Intern',
        company: 'CHU',
        location: 'On-Site',
        date: 'July 2024 - Present',
        achievements: [
          'Developed an AI-powered application to assist in diagnosing pneumonia through automated analysis of chest X-ray images using deep learning techniques.',
          'Designed and implemented a Convolutional Neural Network (CNN) model for image classification, achieving high accuracy in detecting pneumonia presence.',
          'Utilized Transfer Learning with pretrained models (e.g., ResNet, EfficientNet) to enhance model performance and reduce training time.',
          'Preprocessed and augmented medical image datasets to improve generalization and model robustness.',
          'Evaluated model performance using accuracy, precision, recall, and AUC-ROC to ensure reliability and effectiveness.',
          'Built a user-friendly interface for medical professionals to upload X-ray images and receive instant diagnostic predictions.',
          'Deployed the application using Flask/Streamlit and containerized it with Docker for scalability and ease of use.',
          'Prioritized data security and ensured compliance with medical data privacy standards.'
        ],
        technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'scikit-learn', 'NumPy', 'Pandas', 'Flask', 'Streamlit', 'Docker', 'Git']
      }
    ]
  },
  leadership: {
    icon: Users,
    title: 'Leadership',
    items: [
      {
        role: 'Event Coordinator',
        company: 'Real-World Challenge Initiative',
        location: 'University Campus',
        date: '2023 - Present',
        achievements: [
          'Led a team of 20+ members in organizing a large-scale event focused on solving real-world challenges, promoting critical thinking and problem-solving skills for young engineers.',
          'Coordinated logistics, sponsorships, and collaboration between different teams to ensure smooth execution of the event.',
          'Designed and managed a **problem-solving competition**, **critical thinking workshops**, and **conferences** featuring industry professionals and experts.',
          'Secured sponsorships and partnerships to provide valuable resources and opportunities for participants.',
          'Successfully engaged students and professionals, fostering a learning environment that emphasized innovation and structured problem resolution.'
        ],
        technologies: ['Event Management', 'Team Leadership', 'Logistics Coordination', 'Sponsorship Acquisition', 'Public Speaking']
      },
      {
        role: 'AI Section Lead',
        company: 'Computer Science Club',
        location: 'University Campus',
        date: '2022 - Present',
        achievements: [
          'Led the AI section of the Computer Science Club, organizing **continuous workshops** to teach students the fundamentals of artificial intelligence.',
          'Designed structured learning sessions covering AI concepts, the **AI development process**, and key algorithms such as neural networks, decision trees, and reinforcement learning.',
          'Developed interactive **hands-on labs**, enabling students to apply AI techniques to real-world problems, making AI more accessible and easier to learn.',
          'Mentored students through practical projects, fostering an engaging and collaborative learning environment that encouraged exploration and innovation in AI.',
          'Established a knowledge-sharing culture within the club, enabling students to transition from theoretical understanding to practical AI applications.'
        ],
        technologies: ['Artificial Intelligence', 'Teaching & Mentorship', 'Workshop Organization', 'Machine Learning', 'Hands-on Labs']
      },
      {
        role: 'Debate Team Leader',
        company: 'University Debate Society',
        location: 'University Campus',
        date: '2021 - Present',
        achievements: [
          'Led the university’s debate team, organizing **round-table discussions** and **training sessions** to enhance students’ critical thinking and public speaking skills.',
          'Developed structured **debate training programs**, covering research techniques, argument structuring, rebuttal strategies, and persuasive communication.',
          'Organized **inter-university debate tournaments**, allowing students to refine their reasoning abilities and gain confidence in public discourse.',
          'Fostered a collaborative and competitive environment where students could **express ideas confidently, challenge perspectives, and refine their analytical skills**.',
          'Guided new members through debate methodologies, helping them develop logical reasoning and articulate well-structured arguments effectively.'
        ],
        technologies: ['Public Speaking', 'Critical Thinking', 'Debate Coaching', 'Leadership', 'Event Organization']
      }
    ]
  },
  
  volunteer: {
    icon: Heart,
    title: 'Volunteer',
    items: [
      {
        role: 'Freelance Graphic Designer',
        company: 'Local Businesses',
        location: 'Remote',
        date: '2021 - Present',
        achievements: [
          'Designed **logos, menus, and social media pages** for small businesses to help improve their branding and online presence.',
          'Worked closely with business owners to understand their vision and create **engaging and professional visual identities**.',
          'Developed skills in **graphic design, branding, and social media marketing** while supporting local entrepreneurs.'
        ],
        technologies: ['Graphic Design', 'Branding', 'Social Media Marketing', 'Adobe Photoshop', 'Canva']
      },
      {
        role: 'Tutor & Mentor',
        company: 'Community Education Initiative',
        location: 'Local & Remote',
        date: '2020 - Present',
        achievements: [
          'Provided **academic tutoring** in math, science, and language subjects, helping students improve their performance and confidence.',
          'Mentored younger students, guiding them through **study strategies, personal development, and career orientation**.',
          'Created **customized learning materials** to make lessons engaging and accessible for different age groups.'
        ],
        technologies: ['Teaching', 'Mentorship', 'Lesson Planning', 'Student Engagement']
      },
      {
        role: 'Humanitarian Volunteer & Charity Organizer',
        company: 'Village Aid Mission',
        location: 'Rural & Local Communities',
        date: '2021 - Present',
        achievements: [
          'Participated in a **humanitarian trip** to build a **water well**, improving access to clean drinking water for local families.',
          'Organized food drives and a **Ftour Basket Initiative**, providing over **100 meals** during Ramadan to families in need.',
          'Led **seasonal clothes donation drives**, collecting, sorting, and distributing warm clothing to underprivileged communities.',
          'Coordinated volunteers and donors to ensure effective distribution of resources and maximize community impact.'
        ],
        technologies: ['Community Outreach', 'Humanitarian Aid', 'Fundraising', 'Project Coordination']
      },     
      {
        role: 'Children’s Activity Center Volunteer',
        company: 'Local Community Center',
        location: 'Local',
        date: '2021 - 2023',
        achievements: [
          'Organized and led **baking, art, and interactive activities** for children at a local community center.',
          'Helped create a **fun and educational environment**, fostering creativity and teamwork among kids.',
          'Engaged children in **hands-on learning experiences**, enhancing their social skills and confidence through interactive workshops.'
        ],
        technologies: ['Youth Engagement', 'Activity Planning', 'Creative Education', 'Event Coordination']
      }
    ]
  },
  
  awards: {
    icon: Award,
    title: 'Awards',
    items: [
      {
        role: 'First Place - Top Speaker Award',
        company: 'Public Speaking Competition',
        location: 'Morocco',
        date: '2023',
        achievements: [
          'Won **first place** in a national public speaking competition, delivering a speech on Moroccan youth and the power of solidarity.',
          'Highlighted Morocco’s resilience through key events such as the **World Cup celebrations** and the **community response to the Haouz earthquake**.',
          'Demonstrated exceptional **oratory skills, storytelling, and audience engagement**, making a lasting impact on the judges and audience.'
        ],
        technologies: ['Public Speaking', 'Storytelling', 'Persuasive Communication']
      },
      {
        role: 'First Place - NASA Space Apps Challenge',
        company: 'NASA International Hackathon',
        location: 'Global',
        date: '2023',
        achievements: [
          'Developed an **interactive web application** using **Vue.js** with **3D visualizations** of planets and Near-Earth Objects (NEOs) using **Blender and Three.js**.',
          'Created an **educational 2D game** with **Godot 4**, integrating interactive quizzes to enhance scientific learning.',
          'Implemented a **Machine Learning model** using **RNN with LSTM** in **Python (TensorFlow & Keras)** to predict NEO-related events.'
        ],
        technologies: ['Vue.js', 'Three.js', 'Godot 4', 'TensorFlow', 'Keras', 'Machine Learning']
      },
      {
        role: 'Second Place - NASA Space Apps Challenge',
        company: 'NASA International Hackathon',
        location: 'Global',
        date: '2022',
        achievements: [
          'Designed a **platform transforming Synthetic Aperture Radar (SAR) imagery** into artistic works, promoting the beauty within scientific data.',
          'Utilized **SNAP software** for **radar image preprocessing** and integrated **Bender** for converting radar imagery into unique artistic creations.'
        ],
        technologies: ['SNAP Software', 'Bender', 'Radar Imagery Processing']
      },
      {
        role: 'Third Place - Nexus Forum Hackathon',
        company: 'Nexus Forum',
        location: 'Morocco',
        date: '2023',
        achievements: [
          'Developed **EcoCrops**, a digital platform promoting sustainable agriculture through AI-driven recommendations and interactive dashboards.',
          'Designed a system allowing farmers to **plan crops efficiently, monitor growth through dashboards, and optimize yields while reducing waste**.',
          'Integrated **AI models** to provide **personalized recommendations** and facilitate **data-driven decision-making** for farmers.'
        ],
        technologies: ['AI for Agriculture', 'Data Visualization', 'Dashboard Development']
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