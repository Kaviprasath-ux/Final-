import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Maximize, Eye, Users, Check, Sparkles, TrendingDown, ArrowRight, Camera } from 'lucide-react';
import { Room } from '../../data/roomsData';
import styles from './RoomsGrid.module.css';

interface RoomsGridProps {
  rooms: Room[];
  onSelectRoom: (room: Room) => void;
}

export const RoomsGrid: React.FC<RoomsGridProps> = ({ rooms, onSelectRoom }) => {
  if (rooms.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyContent}>
          <div className={styles.emptyIcon}>🏨</div>
          <h3>No rooms available</h3>
          <p>Try adjusting your filters or dates to see more options</p>
          <button className={styles.resetButton}>Reset Filters</button>
        </div>
      </div>
    );
  }

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Bed,
      Maximize,
      Eye,
      Users
    };
    return icons[iconName] || Bed;
  };

  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        {rooms.map((room, index) => {
          const Icon = getIcon(room.features[0]?.icon);

          return (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={styles.roomCard}
              whileHover={{ y: -8 }}
            >
              {/* Image Section */}
              <div className={styles.imageSection}>
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className={styles.roomImage}
                />

                {/* AI Recommended Badge */}
                {room.isAIRecommended && (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className={styles.aiRecommendedBadge}
                  >
                    <Sparkles size={14} />
                    AI-Recommended
                  </motion.div>
                )}

                {/* Special Offer Badge */}
                {room.specialOffer && (
                  <div className={`${styles.specialOfferBadge} ${styles[room.specialOffer.type.toLowerCase()]}`}>
                    {room.specialOffer.text}
                  </div>
                )}

                {/* Image Gallery Indicator */}
                <div className={styles.galleryIndicator}>
                  <Camera size={14} />
                  1 / {room.images.length}
                </div>
              </div>

              {/* Content Section */}
              <div className={styles.contentSection}>
                {/* Category Badge */}
                <div className={styles.categoryBadge}>{room.category}</div>

                {/* Room Name */}
                <h3 className={styles.roomName}>{room.name}</h3>

                {/* Description */}
                <p className={styles.roomDescription}>{room.description}</p>

                {/* Features Pills */}
                <div className={styles.featuresPills}>
                  {room.features.map((feature, idx) => {
                    const FeatureIcon = getIcon(feature.icon);
                    return (
                      <div key={idx} className={styles.featurePill}>
                        <FeatureIcon size={14} />
                        {feature.text}
                      </div>
                    );
                  })}
                </div>

                {/* Amenities Grid */}
                <div className={styles.amenitiesGrid}>
                  {room.amenities.slice(0, 6).map((amenity, idx) => (
                    <div key={idx} className={styles.amenityItem}>
                      <Check size={14} className={styles.checkIcon} />
                      {amenity}
                    </div>
                  ))}
                </div>

                {/* Price Section */}
                <div className={styles.priceSection}>
                  <div className={styles.priceLeft}>
                    <div className={styles.fromLabel}>FROM</div>
                    <div className={styles.price}>
                      ${room.price}
                      <span className={styles.perNight}>/night</span>
                    </div>
                    <div className={styles.aiOptimized}>
                      <TrendingDown size={14} />
                      AI-Optimized Rate
                    </div>
                  </div>

                  <button
                    className={styles.viewDetailsButton}
                    onClick={() => onSelectRoom(room)}
                  >
                    View Details
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
