import React from 'react';
import styles from './AuthLayout.module.css';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className={styles.authContainer}>
      <div className={styles.formSide}>
        <div className={styles.formContainer}>{children}</div>
      </div>
    </div>
  );
};
