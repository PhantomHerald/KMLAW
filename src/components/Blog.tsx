import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'Understanding Class Action Lawsuits',
    date: 'March 15, 2024',
    excerpt: 'A comprehensive guide to class action lawsuits and their impact on corporate accountability.',
    author: 'Sarah Johnson',
    category: 'Legal Insights'
  },
  {
    title: 'Recent Changes in Employment Law',
    date: 'March 10, 2024',
    excerpt: 'Key updates to employment legislation that affect both employers and employees.',
    author: 'Michael Chen',
    category: 'Employment Law'
  },
  {
    title: 'The Future of Legal Technology',
    date: 'March 5, 2024',
    excerpt: 'How AI and technology are transforming the legal industry and improving access to justice.',
    author: 'Emily Rodriguez',
    category: 'Legal Tech'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Legal Insights</h2>
          <p className="text-xl text-gray-600">Stay informed with our latest legal perspectives</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <span className="text-sm text-blue-600 font-semibold">{post.category}</span>
                <h3 className="text-xl font-serif text-gray-900 mt-2 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            View All Posts
          </a>
        </motion.div>
      </div>
    </section>
  );
}