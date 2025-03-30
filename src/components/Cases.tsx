import { motion } from 'framer-motion';
import { Gavel } from 'lucide-react';

const cases = [
  {
    title: 'Labor Rights Class Action',
    client: 'United Workers Union',
    outcome: 'Court Victory',
    description: 'Successfully defended workers\' rights in precedent-setting case.',
    year: '2023'
  },
  {
    title: 'Environmental Protection Suit',
    client: 'Green Earth Coalition',
    outcome: 'Favorable Settlement',
    description: 'Secured significant environmental protections and remediation commitments.',
    year: '2023'
  },
  {
    title: 'Corporate Governance Dispute',
    client: 'Shareholders Association',
    outcome: 'Successful Resolution',
    description: 'Achieved comprehensive governance reforms and shareholder protections.',
    year: '2022'
  },
  {
    title: 'Healthcare Access Litigation',
    client: 'Community Health Alliance',
    outcome: 'Landmark Decision',
    description: 'Expanded healthcare access for underserved communities.',
    year: '2022'
  }
];

export default function Cases() {
  return (
    <section id="cases" className="py-20 bg-gray-50">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Notable Cases</h2>
          <p className="text-xl text-gray-600">Our track record of success in complex litigation</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((case_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Gavel className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-serif font-semibold text-gray-900">{case_.title}</h3>
              </div>
              <div className="space-y-2">
                <p className="text-blue-600 font-medium">{case_.client}</p>
                <p className="text-green-600 font-medium">{case_.outcome}</p>
                <p className="text-gray-600">{case_.description}</p>
                <p className="text-sm text-gray-500">{case_.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}