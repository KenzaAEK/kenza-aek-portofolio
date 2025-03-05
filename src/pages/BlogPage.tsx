import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Search,
  Clock,
  ChevronRight,
  Share2,
  Bookmark,
  MessageSquare,
  Tag,
  X,
  BookOpen,
} from 'lucide-react';
import { PageHeader } from '../components/Layout/PageHeader';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: 'The Ethics of AI: Navigating the Future of Technology',
    excerpt:
      "Exploring the ethical implications of artificial intelligence and its impact on society. As someone deeply involved in AI development, I've witnessed firsthand the challenges and opportunities this technology presents.",
    category: 'Ethics',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    readTime: '8 min',
    date: 'Mar 15, 2024',
    tags: ['AI', 'Ethics', 'Technology', 'Future'],
    featured: true,
    authorNote:
      'This article stems from my experience leading AI projects and the ethical questions we faced daily.',
    size: 'large',
  },
  {
    id: 2,
    title: 'Leading a Tech Club: Lessons in Growth and Community Building',
    excerpt:
      'Insights and experiences from leading a university tech community. Building a vibrant tech community taught me invaluable lessons about leadership and collaboration.',
    category: 'Leadership',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    readTime: '6 min',
    date: 'Mar 10, 2024',
    tags: ['Leadership', 'Community', 'Growth'],
    featured: true,
    authorNote:
      'Leading our university tech club was a transformative experience that shaped my leadership style.',
    size: 'medium',
  },
  {
    id: 3,
    title: 'Building Scalable React Applications: A Deep Dive',
    excerpt:
      'Technical insights and best practices for building large-scale React applications. Sharing the architectural decisions and patterns that helped our team succeed.',
    category: 'Technical',
    image:
      'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    readTime: '10 min',
    date: 'Mar 5, 2024',
    tags: ['React', 'JavaScript', 'Architecture'],
    featured: false,
    authorNote:
      'These insights come from years of hands-on experience with React in production environments.',
    size: 'small',
  },
  // Add more blog posts...
];

const categories = [
  'All',
  'Technical',
  'Leadership',
  'Ethics',
  'Volunteer Work',
];

interface QuickViewModalProps {
  post: (typeof blogPosts)[0];
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ post, onClose }) => {
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
            src={post.image}
            alt={post.title}
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
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span className="px-2 py-1 bg-mint-50 text-mint-700 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-6">{post.excerpt}</p>

          <div className="bg-mint-50/50 p-4 rounded-lg mb-6">
            <p className="text-mint-700 italic">
              <span className="font-semibold">Author's Note:</span>{' '}
              {post.authorNote}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-lavender-50 text-lavender-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            to={`/blog/${post.id}`}
            className="inline-flex items-center px-4 py-2 bg-mint-600 text-white rounded-lg hover:bg-mint-700 transition-colors"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Read Full Article
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<
    (typeof blogPosts)[0] | null
  >(null);
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

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader
        title="Welcome to My Digital Garden "
        description="A collection of thoughts, stories, and insights from my journey in tech and leadership"
      />

      {/* Author Introduction */}
      <section className="bg-gradient-to-b from-mint-50/50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 max-w-3xl mx-auto">
            <img
              src="/kenzavatar.png"
              alt="Kenza ABOU-EL KASEM"
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Hi, I'm Kenza
              </h2>
              <p className="text-gray-600">
                I write about technology, leadership, and the intersection of
                both. Here, you'll find my thoughts on AI ethics, stories from
                leading tech communities, and technical deep-dives into software
                development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Search and Filter */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                      activeCategory === category
                        ? 'bg-mint-100 text-mint-700 shadow-sm'
                        : 'bg-gray-50 text-gray-600 hover:bg-mint-50 hover:text-mint-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Featured Stories
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedPost(post)}
                  >
                    <div className="relative h-64">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                          <span className="px-2 py-1 bg-white/20 rounded-full">
                            {post.category}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {post.title}
                        </h3>
                        <p className="text-white/80 line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Regular Posts - Masonry Layout */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              All Articles
            </h2>
            <Masonry
              breakpointCols={breakpointColumns}
              className="flex -ml-8 w-auto"
              columnClassName="pl-8 bg-clip-padding"
            >
              {regularPosts.map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ y: -5 }}
                  className={`mb-8 group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer`}
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span className="px-2 py-1 bg-mint-50 text-mint-700 rounded-full">
                        {post.category}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-mint-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-gray-500 flex items-center"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedPost && (
          <QuickViewModal
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};
