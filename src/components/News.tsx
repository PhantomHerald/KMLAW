import { motion } from 'framer-motion';

const newsItems = [
  {
    title: 'Landmark Victory in Environmental Class Action',
    date: 'March 18, 2024',
    description: 'Our firm secures a major win for environmental protection in precedent-setting case.',
    category: 'Case Victory'
  },
  {
    title: 'New Partner Announcement',
    date: 'March 12, 2024',
    description: 'We are pleased to welcome Jane Smith to our partnership, strengthening our litigation practice.',
    category: 'Firm News'
  },
  {
    title: 'Recognition in Legal 500',
    date: 'March 8, 2024',
    description: 'Our firm has been recognized as a leading practice in class actions and labour law.',
    category: 'Awards'
  }
];

export default function News() {
  return (
    <section id="news" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Latest News</h2>
          <p className="text-xl text-gray-600">Stay updated with our firm's latest achievements and announcements</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {item.category}
                </span>
                <h3 className="text-xl font-serif text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}