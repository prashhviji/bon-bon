import { ArrowRight, Award, Star, Building2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ClientsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  const floatingAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1]
    }
  };

  const clients = [
    {
      icon: Award,
      title: "Luxury Hotels",
      description: "Residency Hotels & Premium Properties",
      gradient: "from-amber-200 to-pink-200"
    },
    {
      icon: Star,
      title: "Fine Dining",
      description: "3-Star & 5-Star Restaurant Kitchens",
      gradient: "from-pink-200 to-rose-200"
    },
    {
      icon: Building2,
      title: "Elite Clubs",
      description: "Jenny's Club & Exclusive Members",
      gradient: "from-rose-200 to-pink-300"
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-pink-50 via-white to-amber-50 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={floatingAnimation}
        className="absolute top-20 left-10 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"
      />
      
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-amber-100 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-pink-600" />
            <span className="text-sm font-medium text-pink-800">Premium Partners</span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-serif bg-gradient-to-r from-pink-800 via-rose-700 to-amber-700 bg-clip-text text-transparent mb-6"
          >
            Chosen by the best.
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-700 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Bon Bon Ice Cream is the choice of luxury hotels, elite clubs, and top chefs. Because
            true taste recognizes true quality.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }
              }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${client.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-pink-100/50 hover:border-pink-200 transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-4 bg-gradient-to-br ${client.gradient} rounded-2xl mb-6`}
                >
                  <client.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-serif text-gray-800 mb-3">
                  {client.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {client.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-amber-400 to-pink-400"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative">Partner With Us</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="relative w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute -top-10 right-20 text-pink-200"
        >
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
            <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}