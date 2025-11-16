import React from 'react';
import MainNavigation from '../navigation/MainNavigation';
import Footer from '../footer/Footer';

interface PublicLayoutProps {
  children: React.ReactNode;
  showNewsletter?: boolean;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children, showNewsletter = true }) => {
  return (
    <>
      <MainNavigation />
      {children}
      <Footer showNewsletter={showNewsletter} />
    </>
  );
};

export default PublicLayout;
