import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Dumbbell, Utensils, Sparkles, Wine, Palmtree } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './LuxuryAmenities.module.css';

const amenities = [
  {
    icon: Waves,
    title: 'Infinity Pool',
    description: 'Beachfront infinity pool with panoramic ocean views',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80'
  },
  {
    icon: Dumbbell,
    title: 'Fitness Center',
    description: 'State-of-the-art gym with personal training',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80'
  },
  {
    icon: Utensils,
    title: 'Fine Dining',
    description: 'Michelin-starred restaurants and rooftop bar',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80'
  },
  {
    icon: Sparkles,
    title: 'Luxury Spa',
    description: 'Award-winning spa with holistic treatments',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80'
  },
  {
    icon: Wine,
    title: 'Wine Cellar',
    description: 'Curated collection of premium wines',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80'
  },
  {
    icon: Palmtree,
    title: 'Beach Club',
    description: 'Private beach access with cabana service',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'
  }
];

export const LuxuryAmenities: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.amenitiesSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>World-Class Facilities</div>
          <h2 className={styles.title}>Exceptional Amenities</h2>
          <p className={styles.description}>
            Indulge in our curated selection of premium facilities designed for your ultimate comfort
          </p>
        </motion.div>

        <div className={styles.amenitiesGrid}>
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <motion.div
                key={index}
                className={styles.amenityCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12 }}
              >
                <div className={styles.imageWrapper}>
                  <img src={amenity.image} alt={amenity.title} className={styles.image} />
                  <div className={styles.overlay}>
                    <div className={styles.iconWrapper}>
                      <Icon size={32} />
                    </div>
                  </div>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.amenityTitle}>{amenity.title}</h3>
                  <p className={styles.amenityDescription}>{amenity.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button className={styles.exploreButton} onClick={() => navigate('/amenities')}>
            Explore All Amenities
          </button>
        </motion.div>
      </div>
    </section>
  );
};
