import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Clock, ArrowLeft, Share2, Bookmark, MessageSquare, Tag } from 'lucide-react';

// Sample blog post data (in a real app, this would come from an API or database)
const blogPost = {
  id: 1,
  title: 'The Ethics of AI: Navigating the Future of Technology',
  content: `
    <h2>Introduction</h2>
    <p>As artificial intelligence continues to advance at an unprecedented pace, we find ourselves at a crucial intersection of technology and ethics. This article explores the key ethical considerations we must address as we shape the future of AI.</p>

    <h2>The Current State of AI Ethics</h2>
    <p>The rapid development of AI technologies has brought numerous ethical challenges to the forefront. From bias in machine learning algorithms to privacy concerns in data collection, the industry faces complex moral decisions.</p>

    <h2>Key Ethical Considerations</h2>
    <ul>
      <li>Algorithmic Bias and Fairness</li>
      <li>Privacy and Data Protection</li>
      <li>Transparency and Explainability</li>
      <li>Accountability in AI Systems</li>
    </ul>

    <h2>Looking Ahead</h2>
    <p>As we continue to develop and deploy AI systems, it's crucial that we establish robust ethical frameworks and guidelines. This requires collaboration between technologists, ethicists, policymakers, and the broader community.</p>
  `,
  author: {
    name: 'Kenza ABOU-EL KASEM',
    avatar: '/kenzavatar.png',
    role: 'Software Engineer'
  },
  category: 'Ethics',
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
  readTime: '8 min',
  date: 'Mar 15, 2024',
  tags: ['AI', 'Ethics', 'Technology', 'Future'],
  relatedPosts: [
    {
      id: 2,
      title: 'Building Ethical AI Systems: A Practical Guide',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      readTime: '6 min'
    },
    {
      id: 3,
      title: 'The Future of AI in Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      readTime: '10 min'
    }
  ]
};

export const BlogPostPage = () => {
  const { id } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] bg-gray-900">
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
          <Link
            to="/blog"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <span className="px-2 py-1 bg-white/20 rounded-full">
              {blogPost.category}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {blogPost.readTime}
            </span>
            <span>{blogPost.date}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {blogPost.title}
          </h1>
          
          <div className="flex items-center gap-4">
            <img
              src={blogPost.author.avatar}
              alt={blogPost.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="text-white font-medium">
                {blogPost.author.name}
              </div>
              <div className="text-white/80 text-sm">
                {blogPost.author.role}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </div>
            
            {/* Tags */}
            <div className="mt-12 flex flex-wrap gap-2">
              {blogPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-mint-50 text-mint-700 rounded-full text-sm flex items-center"
                >
                  <Tag className="w-4 h-4 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Interaction Buttons */}
            <div className="mt-8 flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                <Share2 className="w-5 h-5" />
                Share
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                <Bookmark className="w-5 h-5" />
                Save
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                <MessageSquare className="w-5 h-5" />
                Comment
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Related Articles
              </h3>
              <div className="space-y-6">
                {blogPost.relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="group block"
                  >
                    <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 group-hover:text-mint-600 transition-colors mb-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};