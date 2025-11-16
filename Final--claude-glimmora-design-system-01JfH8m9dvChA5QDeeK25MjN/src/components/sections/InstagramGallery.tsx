import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle } from 'lucide-react';
import styles from './InstagramGallery.module.css';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80',
    likes: '2.4K',
    comments: '156'
  },
  {
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
    likes: '3.1K',
    comments: '203'
  },
  {
    url: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80',
    likes: '1.8K',
    comments: '98'
  },
  {
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
    likes: '4.2K',
    comments: '287'
  },
  {
    url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80',
    likes: '2.9K',
    comments: '134'
  },
  {
    url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80',
    likes: '3.5K',
    comments: '198'
  }
];

export const InstagramGallery: React.FC = () => {
  return (
    <section className={styles.instagramSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.instagramBadge}>
            <Instagram size={24} />
            <span>@glimmorahotel</span>
          </div>
          <h2 className={styles.title}>Share Your Experience</h2>
          <p className={styles.description}>
            Join thousands of guests sharing their unforgettable moments at Glimmora
          </p>
        </motion.div>

        <div className={styles.gallery}>
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={styles.galleryItem}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.imageWrapper}>
                <img src={image.url} alt={`Gallery ${index + 1}`} className={styles.image} />
                <div className={styles.overlay}>
                  <div className={styles.stats}>
                    <div className={styles.stat}>
                      <Heart size={20} fill="white" />
                      <span>{image.likes}</span>
                    </div>
                    <div className={styles.stat}>
                      <MessageCircle size={20} />
                      <span>{image.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button className={styles.followButton}>
            <Instagram size={20} />
            Follow Us on Instagram
          </button>
        </motion.div>
      </div>
    </section>
  );
};
