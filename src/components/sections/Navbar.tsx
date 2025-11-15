import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import styles from './Navbar.module.css';

const menuItems = ['Home', 'Rooms', 'Amenities', 'Pre-Check-In', 'Contact'];

export const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.navContainer}>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={styles.logo}
        >
          GLIMMORA
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className={styles.navMenu}
        >
          {menuItems.map((item) => (
            <motion.li
              key={item}
              variants={fadeInUp}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className={styles.navActions}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.bookNowBtn}
          >
            Book Now
          </motion.button>
        </motion.div>
      </div>
    </motion.nav>
  );
};
