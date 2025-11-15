import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { DashboardProvider } from '../../contexts/DashboardContext';
import { DashboardHeader } from './DashboardHeader';
import { DashboardSidebar } from './DashboardSidebar';
import styles from './DashboardLayout.module.css';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login?returnUrl=/dashboard');
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner} />
        <div className={styles.loadingText}>Loading dashboard...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <DashboardProvider>
      <div className={styles.dashboardLayout}>
        <DashboardHeader />

        <div className={styles.mainContainer}>
          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Sidebar */}
          <div className={`${styles.sidebarContainer} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
            <DashboardSidebar onClose={() => setSidebarOpen(false)} />
          </div>

          {/* Backdrop for mobile */}
          {sidebarOpen && (
            <div
              className={styles.backdrop}
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Main Content */}
          <main className={styles.mainContent}>
            {children}
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
};
