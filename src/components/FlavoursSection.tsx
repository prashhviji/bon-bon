import { ArrowRight, Sparkles, IceCream } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const flavours = [
  {
    name: 'Classic Vanilla',
    description: 'Pure Madagascar vanilla beans',
    color: 'from-amber-100 to-yellow-50',
    accent: 'from-amber-400 to-yellow-300',
    image: 'https://images.pexels.com/photos/1625235/pexels-photo-1625235.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Rich Chocolate',
    description: 'Belgian dark chocolate',
    color: 'from-amber-200 to-orange-100',
    accent: 'from-amber-600 to-orange-400',
    image: 'https://images.pexels.com/photos/3631/summer-dessert-sweet-ice-cream.jpg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Strawberry Bliss',
    description: 'Fresh seasonal berries',
    color: 'from-pink-200 to-rose-100',
    accent: 'from-pink-500 to-rose-400',
    image: 'https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Salted Caramel',
    description: 'House-made caramel swirl',
    color: 'from-amber-300 to-yellow-100',
    accent: 'from-amber-700 to-yellow-500',
    image: 'https://images.pexels.com/photos/2675843/pexels-photo-2675843.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function FlavoursSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -30 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.1,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    })
  };

  return (
    <section ref={containerRef} className="relative py-32 bg-gradient-to-b from-white via-pink-50/30 to-amber-50/40 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-amber-200/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-amber-200/20 to-rose-200/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-amber-100 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8"
          >
            <IceCream className="w-4 h-4 text-pink-600" />
            <span className="text-sm font-semibold text-pink-800 tracking-wide">ARTISAN FLAVOURS</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-serif mb-8"
          >
            <span className="bg-gradient-to-r from-pink-800 via-rose-600 to-amber-600 bg-clip-text text-transparent">
              Simplicity.
            </span>
            <span className="text-gray-800"> With depth.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed"
          >
            From classic Vanilla to rich seasonal creations, each flavor is designed to make you
            feel something. We don't make hundreds of flavors. We make the right ones.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {flavours.map((flavour, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group perspective-1000"
            >
              <div className="relative h-full">
                {/* Glow effect on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${flavour.accent} rounded-3xl opacity-0 group-hover:opacity-75 blur-lg transition-opacity duration-500`} />
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500">
                  {/* Image container with overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="h-full"
                    >
                      <img
                        src={flavour.image}
                        alt={flavour.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${flavour.color} opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                    
                    {/* Sparkle decoration */}
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute top-4 right-4"
                    >
                      <Sparkles className="w-6 h-6 text-white/80 drop-shadow-lg" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-amber-600 group-hover:bg-clip-text transition-all duration-300">
                      {flavour.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-light">
                      {flavour.description}
                    </p>
                    
                    {/* Hidden details that appear on hover */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      whileHover={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 overflow-hidden"
                    >
                      <div className="flex items-center gap-2 text-xs text-amber-600">
                        <span className="w-2 h-2 bg-amber-400 rounded-full" />
                        <span>Limited Edition Available</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full"
          >
            {/* Background gradient */}
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 opacity-90" />
            
            {/* Animated shine effect */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            
            <span className="relative px-10 py-5 text-white font-medium text-lg">
              View All Flavours
            </span>
            <motion.div
              className="relative pr-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }