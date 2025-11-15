import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  Award,
  Moon,
  AlertCircle,
  PlusCircle,
  UserPlus,
  MessageCircle,
  Sparkles,
  ArrowRight,
  MapPin,
  Users
} from 'lucide-react';
import { useDashboard } from '../../contexts/DashboardContext';
import { useAuth } from '../../contexts/AuthContext';
import styles from './DashboardHome.module.css';

export const DashboardHome: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { stats, upcomingBookings, isLoading } = useDashboard();

  const statCards = [
    {
      icon: Calendar,
      value: stats.upcomingStays.toString(),
      label: 'Upcoming bookings',
      onClick: () => navigate('/dashboard/bookings')
    },
    {
      icon: Award,
      value: stats.loyaltyPoints.toLocaleString(),
      label: 'Rewards points',
      subtext: '+125 this month'
    },
    {
      icon: Moon,
      value: stats.totalNights.toString(),
      label: 'Nights stayed',
      subtext: 'Since joining'
    },
    {
      icon: AlertCircle,
      value: stats.actionsRequired.toString(),
      label: 'Pre-check-in pending',
      onClick: () => navigate('/dashboard/pre-check-in'),
      alert: stats.actionsRequired > 0
    }
  ];

  const quickActions = [
    {
      icon: PlusCircle,
      title: 'Book Another Stay',
      onClick: () => navigate('/rooms')
    },
    {
      icon: UserPlus,
      title: 'Refer & Earn $50'
    },
    {
      icon: MessageCircle,
      title: 'Chat with AI Assistant'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string, preCheckIn: boolean) => {
    if (status === 'upcoming' && preCheckIn) return styles.statusConfirmed;
    if (status === 'upcoming' && !preCheckIn) return styles.statusPending;
    if (status === 'checked-in') return styles.statusActive;
    return styles.statusDefault;
  };

  const getStatusText = (status: string, preCheckIn: boolean) => {
    if (status === 'upcoming' && !preCheckIn) return 'Pre-check-in Available';
    if (status === 'upcoming') return 'Confirmed';
    if (status === 'checked-in') return 'Checked In';
    return status;
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner} />
      </div>
    );
  }

  return (
    <div className={styles.dashboardHome}>
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.welcomeHeader}
      >
        <h1 className={styles.title}>Welcome back, {user?.fullName?.split(' ')[0] || 'there'}!</h1>
        <p className={styles.subtitle}>Here's what's happening with your bookings</p>
      </motion.div>

      {/* Quick Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className={styles.statsGrid}
      >
        {statCards.map((stat, index) => (
          <div
            key={index}
            className={`${styles.statCard} ${stat.onClick ? styles.clickable : ''} ${stat.alert ? styles.alert : ''}`}
            onClick={stat.onClick}
          >
            <div className={styles.iconContainer}>
              <stat.icon size={24} />
            </div>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
            {stat.subtext && <div className={styles.statSubtext}>{stat.subtext}</div>}
          </div>
        ))}
      </motion.div>

      {/* Upcoming Bookings Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={styles.section}
      >
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Upcoming Stays</h2>
          {upcomingBookings.length > 0 && (
            <button
              className={styles.viewAllLink}
              onClick={() => navigate('/dashboard/bookings')}
            >
              View all
              <ArrowRight size={16} />
            </button>
          )}
        </div>

        {upcomingBookings.length > 0 ? (
          <div className={styles.bookingsContainer}>
            {upcomingBookings.slice(0, 2).map((booking) => (
              <div
                key={booking.id}
                className={styles.bookingCard}
                onClick={() => navigate(`/dashboard/bookings/${booking.id}`)}
              >
                <div className={styles.bookingImage}>
                  <img src={booking.roomImage} alt={booking.roomName} />
                  <div className={styles.categoryBadge}>{booking.roomCategory}</div>
                </div>

                <div className={styles.bookingDetails}>
                  <h3 className={styles.bookingTitle}>{booking.roomName}</h3>
                  <div className={styles.bookingReference}>Ref: {booking.bookingReference}</div>

                  <div className={styles.bookingInfo}>
                    <div className={styles.infoItem}>
                      <Calendar size={16} />
                      {formatDate(booking.checkIn)} - {formatDate(booking.checkOut)}
                    </div>
                    <div className={styles.infoItem}>
                      <Moon size={16} />
                      {booking.nights} {booking.nights === 1 ? 'night' : 'nights'}
                    </div>
                    <div className={styles.infoItem}>
                      <Users size={16} />
                      {booking.guests} {booking.guests === 1 ? 'guest' : 'guests'}
                    </div>
                  </div>
                </div>

                <div className={styles.bookingActions}>
                  <div className={getStatusColor(booking.status, booking.preCheckInCompleted)}>
                    {getStatusText(booking.status, booking.preCheckInCompleted)}
                  </div>

                  {!booking.preCheckInCompleted && (
                    <button
                      className={styles.primaryButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/dashboard/pre-check-in/${booking.id}`);
                      }}
                    >
                      Pre-Check-In
                    </button>
                  )}
                  <button className={styles.outlineButton}>View Details</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <Calendar size={64} />
            <h3 className={styles.emptyTitle}>No Upcoming Bookings</h3>
            <p className={styles.emptyText}>Ready to plan your next getaway?</p>
            <button className={styles.primaryButton} onClick={() => navigate('/rooms')}>
              Browse Rooms
            </button>
          </div>
        )}
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={styles.section}
      >
        <h2 className={styles.sectionTitle}>Quick Actions</h2>
        <div className={styles.actionsGrid}>
          {quickActions.map((action, index) => (
            <div
              key={index}
              className={styles.actionCard}
              onClick={action.onClick}
            >
              <action.icon size={32} />
              <div className={styles.actionTitle}>{action.title}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Personalized Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className={styles.section}
      >
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Recommended for You</h2>
            <p className={styles.sectionSubtitle}>Based on your preferences and past stays</p>
          </div>
        </div>

        <div className={styles.recommendationsScroll}>
          {[1, 2, 3].map((i) => (
            <div key={i} className={styles.recommendationCard} onClick={() => navigate('/rooms')}>
              <div className={styles.recImage}>
                <img
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1611892440504' : i === 2 ? '1590490360182' : '1582719478250'}-42a792e24d32?w=400`}
                  alt="Room"
                />
                <div className={styles.aiBadge}>
                  <Sparkles size={12} />
                  AI Recommended
                </div>
              </div>
              <div className={styles.recContent}>
                <h4 className={styles.recTitle}>{i === 1 ? 'Ocean View Suite' : i === 2 ? 'Garden Villa' : 'Penthouse'}</h4>
                <div className={styles.recLocation}>
                  <MapPin size={14} />
                  Glimmora Resort
                </div>
                <div className={styles.recPrice}>
                  From <span>${299 + i * 50}</span>/night
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
