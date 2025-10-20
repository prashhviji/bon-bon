import { ArrowRight, Leaf, Heart, Star, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function PhilosophySection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const yOffset = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -20 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const benefits = [
    { icon: Heart, text: "100% Real Dairy Milk", color: "from-pink-400 to-rose-400" },
    { icon: Leaf, text: "No Vegetable Oils", color: "from-amber-400 to-orange-400" },
    { icon: Star, text: "Slow-Churned with Real Butter", color: "from-purple-400 to-pink-400" }
  ];

  return (
    <section ref={containerRef} className="relative py-32 bg-gradient-to-br from-white via-pink-50/50 to-amber-50/30 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        style={{ y: yOffset }}
        className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-amber-200/30 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl"
      />
      
      {/* Decorative dots pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1 }}
        className="absolute top-40 left-1/2 -translate-x-1/2"
      >
        <svg width="200" height="200" className="text-pink-200">
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <rect width="200" height="200" fill="url(#dots)" />
        </svg>
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            className="order-2 md:order-1 relative perspective-1000"
          >
            <motion.div
              style={{ scale: imageScale, rotate: imageRotate }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-300/50 to-amber-300/50 rounded-3xl blur-2xl opacity-60" />
              
              {/* Main image container */}
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src="https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Pure ingredients"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent opacity-50" />
                
                {/* Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                  className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-semibold text-gray-800">Pure Craft</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="order-1 md:order-2 space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-amber-100 rounded-full px-4 py-2"
            >
              <Heart className="w-4 h-4 text-pink-600" />
              <span className="text-sm font-medium text-pink-800">Our Philosophy</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl font-serif leading-tight"
            >
              <span className="bg-gradient-to-r from-pink-800 via-rose-600 to-amber-600 bg-clip-text text-transparent">
                What you eat
              </span>
              <br />
              <span className="text-gray-800">matters.</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 font-light leading-relaxed"
            >
              We believe purity is everything. While others use vegetable fat, we use real butter
              and real milk. Every scoop is slow-crafted. We don't follow trends — we follow
              taste.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="space-y-4 pt-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="group flex items-start gap-4 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className={`relative p-2 bg-gradient-to-br ${benefit.color} rounded-xl shadow-lg`}
                  >
                    <benefit.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-gray-700 font-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-amber-600 group-hover:bg-clip-text transition-all duration-300">
                      {benefit.text}
                    </p>
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      className="h-0.5 bg-gradient-to-r from-pink-400 to-amber-400 mt-1"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 overflow-hidden"
              >
                {/* Button background */}
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-amber-500 rounded-full" />
                
                {/* Shine effect */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                
                <span className="relative px-8 py-4 text-white font-medium text-lg">
                  See What's Inside
                </span>
                <motion.div
                  className="relative pr-8"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-10 right-10"
      >
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-pink-200/30">
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </motion.div>
    </section>
  );
}