import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, Key, Coffee, Wifi, Utensils } from 'lucide-react';
import styles from './GuestJourney.module.css';

const journeySteps = [
  {
    icon: Calendar,
    title: 'Book Your Stay',
    description: 'Choose from our curated selection of luxury rooms and suites',
    color: '#A57865'
  },
  {
    icon: Sparkles,
    title: 'AI Pre-Check-In',
    description: 'Complete check-in from anywhere with our intelligent system',
    color: '#8B6450'
  },
  {
    icon: Key,
    title: 'Seamless Arrival',
    description: 'Skip the queue with mobile key and express check-in',
    color: '#A57865'
  },
  {
    icon: Coffee,
    title: 'Premium Amenities',
    description: 'Enjoy world-class facilities and personalized service',
    color: '#8B6450'
  },
  {
    icon: Utensils,
    title: 'Culinary Excellence',
    description: 'Savor gourmet dining experiences at our restaurants',
    color: '#A57865'
  },
  {
    icon: Wifi,
    title: 'Stay Connected',
    description: 'High-speed WiFi and smart room controls throughout',
    color: '#8B6450'
  }
];

export const GuestJourney: React.FC = () => {
  return (
    <section className={styles.journeySection}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>Your Journey</div>
          <h2 className={styles.title}>Experience Glimmora</h2>
          <p className={styles.description}>
            From booking to checkout, every moment is crafted for your comfort
          </p>
        </motion.div>

        <div className={styles.journeyGrid}>
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className={styles.journeyCard}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={styles.iconCircle}
                  style={{ background: `linear-gradient(135deg, ${step.color} 0%, #6B5443 100%)` }}
                >
                  <Icon size={28} className={styles.icon} />
                </div>
                <div className={styles.stepNumber}>Step {index + 1}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
                {index < journeySteps.length - 1 && (
                  <div className={styles.connector} />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
