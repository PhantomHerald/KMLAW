import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const lawyers = [
  {
    name: 'Sarah Johnson',
    role: 'Senior Partner',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    description: 'Over 20 years of experience in corporate law and civil litigation. Specializes in complex class actions and securities litigation.',
    education: 'J.D., Harvard Law School',
    barAdmissions: ['Ontario Bar', 'New York Bar']
  },
  {
    name: 'Michael Chen',
    role: 'Managing Partner',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
    description: 'Leads our real estate and commercial transactions practice. Expert in cross-border mergers and acquisitions.',
    education: 'LL.B., University of Toronto',
    barAdmissions: ['Ontario Bar', 'British Columbia Bar']
  },
  {
    name: 'Emily Rodriguez',
    role: 'Partner',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    description: 'Head of our family law practice. Recognized for her expertise in high-net-worth divorce cases and estate planning.',
    education: 'J.D., McGill University',
    barAdmissions: ['Quebec Bar', 'Ontario Bar']
  }
];

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex >= lawyers.length) return 0;
      if (nextIndex < 0) return lawyers.length - 1;
      return nextIndex;
    });
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isPaused) {
      interval = setInterval(() => {
        paginate(1);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="team" className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Lawyers</h2>
          <p className="text-xl text-gray-600">Leaders in Canadian Law</p>
        </motion.div>

        <div 
          className="relative h-[700px] w-full max-w-2xl mx-auto"
          style={{ zIndex: 0 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full"
            style={{ zIndex: 1 }}
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={lawyers[currentIndex].image}
                  alt={lawyers[currentIndex].name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-serif font-bold mb-1">{lawyers[currentIndex].name}</h3>
                  <p className="text-blue-300 text-lg mb-2">{lawyers[currentIndex].role}</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-gray-600 leading-relaxed">{lawyers[currentIndex].description}</p>
                <div className="space-y-2">
                  <p className="text-gray-900 font-medium">Education</p>
                  <p className="text-gray-600">{lawyers[currentIndex].education}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-900 font-medium">Bar Admissions</p>
                  <ul className="list-disc list-inside text-gray-600">
                    {lawyers[currentIndex].barAdmissions.map((bar, index) => (
                      <li key={index}>{bar}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            onClick={() => paginate(-1)}
            style={{ zIndex: 2 }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            onClick={() => paginate(1)}
            style={{ zIndex: 2 }}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex space-x-2" style={{ zIndex: 2 }}>
            {lawyers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}