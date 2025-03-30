import { motion } from 'framer-motion';
import { Briefcase, Scale, Home, Car, Users, FileText } from 'lucide-react';

const practices = [
  {
    icon: <Scale size={40} />,
    title: 'Civil Litigation',
    description: 'Expert representation in complex civil disputes and litigation matters.'
  },
  {
    icon: <Home size={40} />,
    title: 'Real Estate Law',
    description: 'Comprehensive legal services for all real estate transactions and disputes.'
  },
  {
    icon: <Briefcase size={40} />,
    title: 'Corporate Law',
    description: 'Strategic legal counsel for businesses of all sizes.'
  },
  {
    icon: <Car size={40} />,
    title: 'Personal Injury',
    description: 'Dedicated advocacy for accident and injury victims.'
  },
  {
    icon: <Users size={40} />,
    title: 'Family Law',
    description: 'Compassionate guidance through family legal matters.'
  },
  {
    icon: <FileText size={40} />,
    title: 'Estate Planning',
    description: 'Secure your legacy with comprehensive estate planning services.'
  }
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Practice Areas</h2>
          <p className="text-xl text-gray-600">Specialized legal expertise across multiple disciplines</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">{practice.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{practice.title}</h3>
              <p className="text-gray-600">{practice.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}