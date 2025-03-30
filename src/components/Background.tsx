import { motion } from 'framer-motion';

export default function Background() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full h-full -z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 animate-gradient" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-6000" />
      </div>
    </motion.div>
  );
}