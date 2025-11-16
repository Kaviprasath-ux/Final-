import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Star, MapPin } from 'lucide-react';
import styles from './StatsSection.module.css';

const stats = [
  {
    icon: Award,
    value: '15+',
    label: 'Years of Excellence',
    description: 'Serving luxury travelers'
  },
  {
    icon: Users,
    value: '50K+',
    label: 'Happy Guests',
    description: 'Worldwide satisfaction'
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Guest Rating',
    description: 'Consistently excellent'
  },
  {
    icon: MapPin,
    value: 'Prime',
    label: 'Location',
    description: 'Beachfront paradise'
  }
];

export const StatsSection: React.FC = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.statsGrid}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className={styles.statCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} size={32} />
                </div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statDescription}>{stat.description}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
