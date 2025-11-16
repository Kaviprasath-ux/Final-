import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Search } from 'lucide-react';
import styles from './HeroSection.module.css';

export const HeroSection: React.FC = () => {
  const searchFields = [
    { id: 'destination', label: 'Location', placeholder: 'Where are you going?', icon: MapPin },
    { id: 'checkin', label: 'Check In', type: 'date', placeholder: 'Add date', icon: Calendar },
    { id: 'checkout', label: 'Check Out', type: 'date', placeholder: 'Add date', icon: Calendar },
    { id: 'guests', label: 'Guests', placeholder: '2 Adults', icon: Users }
  ];

  return (
    <section className={styles.hero}>
      {/* Background */}
      <motion.div
        className={styles.heroBackground}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
      />

      {/* Overlay */}
      <div className={styles.heroOverlay} />

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={styles.heroTitle}
        >
          Find the top Hotels nearby
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={styles.heroSubtitle}
        >
          We provide what you need to enjoy your holiday with family. Time to make another memorable moment.
        </motion.p>

        {/* Integrated Search Widget */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className={styles.searchCard}
        >
          <div className={styles.searchForm}>
            {searchFields.map((field, index) => {
              const Icon = field.icon;
              return (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.9, duration: 0.5 }}
                  className={styles.searchField}
                >
                  <label htmlFor={field.id}>{field.label}</label>
                  <div className={styles.inputWrapper}>
                    <Icon size={18} className={styles.fieldIcon} />
                    <input
                      id={field.id}
                      type={field.type || 'text'}
                      placeholder={field.placeholder}
                      className={styles.input}
                    />
                  </div>
                </motion.div>
              );
            })}

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={styles.searchButton}
            >
              <Search size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
