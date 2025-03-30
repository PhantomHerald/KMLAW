import { motion } from 'framer-motion';
import { GraduationCap, Users, BookOpen } from 'lucide-react';

export default function Careers() {
  return (
    <section id="careers" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Build Your Legal Career</h2>
          <p className="text-xl text-gray-600">Join one of Canada's leading law firms</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-gray-900 mb-2">Student Programs</h3>
            <p className="text-gray-600">Summer and articling positions available for law students</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-gray-900 mb-2">Associate Positions</h3>
            <p className="text-gray-600">Opportunities for lawyers at all experience levels</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-gray-900 mb-2">Professional Development</h3>
            <p className="text-gray-600">Continuous learning and growth opportunities</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-blue-50 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-serif text-gray-900 mb-4">Are You a Student?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented law students who are passionate about making a difference.
            Join our student program and start building your legal career with one of Canada's most
            respected firms.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Learn About Student Programs
          </a>
        </motion.div>
      </div>
    </section>
  );
}