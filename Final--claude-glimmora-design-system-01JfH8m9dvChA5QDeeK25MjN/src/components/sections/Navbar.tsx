import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import { Search } from 'lucide-react';
import styles from './Navbar.module.css';

const menuItems = [
  { label: 'Hotel', path: '/' },
  { label: 'Rooms', path: '/rooms' },
  { label: 'Dining', path: '/#dining' },
  { label: 'Experience', path: '/#experience' },
  { label: 'AI Assistant', path: '/#chat' }
];

export const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 40);
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
          transition={{ delay: 0.15, duration: 0.4 }}
          className={styles.logo}
        >
          GLIMMORA
        </motion.div>

        {/* Center Menu */}
        <motion.ul
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className={styles.navMenu}
        >
          {menuItems.map((item) => (
            <motion.li
              key={item.label}
              variants={fadeInUp}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {item.path.startsWith('/#') ? (
                <a href={item.path}>{item.label}</a>
              ) : (
                <Link to={item.path}>{item.label}</Link>
              )}
            </motion.li>
          ))}
        </motion.ul>

        {/* Search + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className={styles.navActions}
        >
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search your location"
              className={styles.searchInput}
            />
            <Search size={16} className={styles.searchIcon} />
          </div>

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
