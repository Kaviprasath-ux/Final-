import React from 'react';
import MainNavigation from '../navigation/MainNavigation';

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <>
      <MainNavigation />
      {children}
    </>
  );
};

export default PublicLayout;
