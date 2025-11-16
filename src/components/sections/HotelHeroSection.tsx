import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Calendar, Users, Search, Bed } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './HotelHeroSection.module.css';

export const HotelHeroSection: React.FC = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Search form state
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [roomType, setRoomType] = useState('all');

  // Parallax effect for background
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  // Hide scroll indicator after scrolling 100px
  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setShowScrollIndicator(latest < 100);
    });
  }, [scrollY]);

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Get tomorrow's date in YYYY-MM-DD format
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const handleSearch = () => {
    // Build query parameters
    const params = new URLSearchParams();
    if (checkIn) params.append('checkIn', checkIn);
    if (checkOut) params.append('checkOut', checkOut);
    if (guests) params.append('guests', guests.toString());
    if (roomType !== 'all') params.append('category', roomType);

    // Navigate to rooms page with search params
    navigate(`/rooms${params.toString() ? `?${params.toString()}` : ''}`);
  };

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

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={styles.heroTitle}
        >
          Experience AI-Powered Hospitality
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className={styles.heroSubtitle}
        >
          Skip the front desk, unlock with your phone, experience seamless AI service
        </motion.p>

        {/* Integrated Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className={styles.searchContainer}
        >
          <div className={styles.searchCard}>
            <div className={styles.searchGrid}>
              {/* Check-in */}
              <div className={styles.searchField}>
                <label htmlFor="check-in" className={styles.searchLabel}>
                  <Calendar size={18} />
                  <span>Check-in</span>
                </label>
                <input
                  id="check-in"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={getTodayDate()}
                  className={styles.searchInput}
                />
              </div>

              {/* Check-out */}
              <div className={styles.searchField}>
                <label htmlFor="check-out" className={styles.searchLabel}>
                  <Calendar size={18} />
                  <span>Check-out</span>
                </label>
                <input
                  id="check-out"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn || getTomorrowDate()}
                  className={styles.searchInput}
                />
              </div>

              {/* Guests */}
              <div className={styles.searchField}>
                <label htmlFor="guests" className={styles.searchLabel}>
                  <Users size={18} />
                  <span>Guests</span>
                </label>
                <select
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className={styles.searchInput}
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Room Type */}
              <div className={styles.searchField}>
                <label htmlFor="room-type" className={styles.searchLabel}>
                  <Bed size={18} />
                  <span>Room Type</span>
                </label>
                <select
                  id="room-type"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className={styles.searchInput}
                >
                  <option value="all">All Rooms</option>
                  <option value="DELUXE">Deluxe</option>
                  <option value="SUITE">Suite</option>
                  <option value="VILLA">Villa</option>
                  <option value="PENTHOUSE">Penthouse</option>
                </select>
              </div>

              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSearch}
                className={styles.searchButton}
              >
                <Search size={20} />
                <span>Search Rooms</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showScrollIndicator ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className={styles.scrollIndicator}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <ChevronDown size={28} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
