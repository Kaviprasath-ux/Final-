import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, ArrowRight, Check } from 'lucide-react';
import styles from './HotelHeroSection.module.css';

export const HotelHeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Parallax effect for background
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  // Hide scroll indicator after scrolling 100px
  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setShowScrollIndicator(latest < 100);
    });
  }, [scrollY]);

  // Split title words for sequential animation
  const titleWords = ['Experience', 'AI-Powered', 'Hospitality'];

  return (
    <section className={styles.hero}>
      {/* Animated Background with Parallax */}
      <motion.div
        className={styles.heroBackground}
        style={{ y }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      {/* Enhanced Gradient Overlay */}
      <div className={styles.heroOverlay} />

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={styles.aiPoweredBadge}
        >
          <Sparkles size={16} />
          <span>Powered by Glimmora AI</span>
        </motion.div>

        <h1 className={styles.heroTitle}>
          {titleWords.map((word, index) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4 + index * 0.2,
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
              className={word === 'AI-Powered' ? styles.gradientText : ''}
            >
              {word}{index < titleWords.length - 1 ? ' ' : ''}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className={styles.heroSubtitle}
        >
          Skip the front desk, unlock with your phone, experience seamless AI service
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className={styles.heroCta}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -4,
              boxShadow: '0 0 30px rgba(165, 120, 101, 0.5)'
            }}
            whileTap={{ scale: 0.98 }}
            className={styles.ctaPrimary}
          >
            CHECK AVAILABILITY
            <ArrowRight size={20} />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
            className={styles.ctaSecondary}
          >
            <Check size={20} />
            START PRE-CHECK-IN
          </motion.button>
        </motion.div>

        {/* Features Strip with Pulse Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className={styles.featuresStrip}
        >
          <motion.div
            className={styles.featureItem}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <Sparkles size={16} />
            <span>AI Pre-Check-In</span>
          </motion.div>
          <div className={styles.featureDivider} />
          <motion.div
            className={styles.featureItem}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              delay: 0.3
            }}
          >
            <Sparkles size={16} />
            <span>Digital Keys</span>
          </motion.div>
          <div className={styles.featureDivider} />
          <motion.div
            className={styles.featureItem}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              delay: 0.6
            }}
          >
            <Sparkles size={16} />
            <span>24/7 AI Assistant</span>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showScrollIndicator ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className={styles.scrollIndicator}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <ChevronDown size={28} />
          </motion.div>
          <motion.div className={styles.scrollText}>
            <Sparkles size={14} className={styles.scrollSparkle} />
            <span>Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
