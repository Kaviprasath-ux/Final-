import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import styles from './HotelHeroSection.module.css';

export const HotelHeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      {/* Animated Background */}
      <motion.div
        className={styles.heroBackground}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      {/* Gradient Overlay */}
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

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={styles.heroTitle}
        >
          Experience AI-Powered
          <br />
          Hospitality
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className={styles.heroSubtitle}
        >
          Where luxury meets innovation. Skip the front desk, unlock your room with your phone,
          and experience seamless service powered by artificial intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className={styles.heroCta}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className={styles.ctaPrimary}
          >
            Check Availability
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={styles.ctaSecondary}
          >
            Start Pre-Check-In
          </motion.button>
        </motion.div>

        {/* Features Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className={styles.featuresStrip}
        >
          <div className={styles.featureItem}>
            <Sparkles size={16} />
            <span>AI Pre-Check-In</span>
          </div>
          <div className={styles.featureDivider} />
          <div className={styles.featureItem}>
            <Sparkles size={16} />
            <span>Digital Keys</span>
          </div>
          <div className={styles.featureDivider} />
          <div className={styles.featureItem}>
            <Sparkles size={16} />
            <span>24/7 AI Assistant</span>
          </div>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className={styles.scrollIndicator}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <ChevronDown size={24} />
          </motion.div>
          <span>Explore AI Features</span>
        </motion.div>
      </div>
    </section>
  );
};
