import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Moon, Users, Download, X, Edit } from 'lucide-react';
import { useDashboard } from '../../contexts/DashboardContext';
import styles from './MyBookings.module.css';

type FilterTab = 'all' | 'upcoming' | 'past' | 'cancelled';

export const MyBookings: React.FC = () => {
  const navigate = useNavigate();
  const { bookings, upcomingBookings, pastBookings, cancelledBookings } = useDashboard();
  const [activeTab, setActiveTab] = useState<FilterTab>('upcoming');

  const tabs: { key: FilterTab; label: string; count: number }[] = [
    { key: 'all', label: 'All Bookings', count: bookings.length },
    { key: 'upcoming', label: 'Upcoming', count: upcomingBookings.length },
    { key: 'past', label: 'Past', count: pastBookings.length },
    { key: 'cancelled', label: 'Cancelled', count: cancelledBookings.length }
  ];

  const getFilteredBookings = () => {
    switch (activeTab) {
      case 'upcoming':
        return upcomingBookings;
      case 'past':
        return pastBookings;
      case 'cancelled':
        return cancelledBookings;
      default:
        return bookings;
    }
  };

  const filteredBookings = getFilteredBookings();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getStatusColor = (status: string, preCheckIn: boolean) => {
    if (status === 'upcoming' && preCheckIn) return styles.statusConfirmed;
    if (status === 'upcoming' && !preCheckIn) return styles.statusPending;
    if (status === 'checked-in') return styles.statusActive;
    if (status === 'completed') return styles.statusCompleted;
    if (status === 'cancelled') return styles.statusCancelled;
    return styles.statusDefault;
  };

  const getStatusText = (status: string, preCheckIn: boolean) => {
    if (status === 'upcoming' && !preCheckIn) return 'Pre-check-in Available';
    if (status === 'upcoming') return 'Confirmed';
    if (status === 'checked-in') return 'Checked In';
    if (status === 'completed') return 'Completed';
    if (status === 'cancelled') return 'Cancelled';
    return status;
  };

  const getEmptyMessage = () => {
    switch (activeTab) {
      case 'upcoming':
        return {
          title: 'No Upcoming Bookings',
          text: 'Start planning your next stay',
          button: 'Browse Rooms'
        };
      case 'past':
        return {
          title: 'No Past Bookings',
          text: 'Your booking history will appear here',
          button: null
        };
      case 'cancelled':
        return {
          title: 'No Cancelled Bookings',
          text: 'Your cancelled bookings will appear here',
          button: null
        };
      default:
        return {
          title: 'No Bookings',
          text: 'You haven\'t made any bookings yet',
          button: 'Browse Rooms'
        };
    }
  };

  const emptyState = getEmptyMessage();

  return (
    <div className={styles.myBookings}>
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.pageHeader}
      >
        <h1 className={styles.title}>My Bookings</h1>
        <p className={styles.subtitle}>Manage all your reservations</p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className={styles.filterTabs}
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
            <span className={styles.tabCount}>({tab.count})</span>
          </button>
        ))}
      </motion.div>

      {/* Bookings List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={styles.bookingsList}
      >
        {filteredBookings.length > 0 ? (
          filteredBookings.map((booking, index) => (
            <motion.div
              key={booking.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
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

                <div className={styles.bookingPrice}>
                  Total: <span>${booking.total.toLocaleString()}</span>
                </div>
              </div>

              <div className={styles.bookingActions}>
                <div className={getStatusColor(booking.status, booking.preCheckInCompleted)}>
                  {getStatusText(booking.status, booking.preCheckInCompleted)}
                </div>

                <div className={styles.actionButtons}>
                  {!booking.preCheckInCompleted && booking.status === 'upcoming' && (
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

                  <button
                    className={styles.iconButton}
                    onClick={(e) => e.stopPropagation()}
                    title="Download Receipt"
                  >
                    <Download size={18} />
                  </button>

                  {booking.canModify && (
                    <button
                      className={styles.iconButton}
                      onClick={(e) => e.stopPropagation()}
                      title="Modify Booking"
                    >
                      <Edit size={18} />
                    </button>
                  )}

                  {booking.canCancel && (
                    <button
                      className={`${styles.iconButton} ${styles.dangerButton}`}
                      onClick={(e) => e.stopPropagation()}
                      title="Cancel Booking"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className={styles.emptyState}>
            <Calendar size={64} />
            <h3 className={styles.emptyTitle}>{emptyState.title}</h3>
            <p className={styles.emptyText}>{emptyState.text}</p>
            {emptyState.button && (
              <button className={styles.primaryButton} onClick={() => navigate('/rooms')}>
                {emptyState.button}
              </button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};
