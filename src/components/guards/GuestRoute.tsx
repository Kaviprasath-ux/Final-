import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Loader } from 'lucide-react';

/**
 * GuestRoute - Only accessible when NOT authenticated
 * If authenticated, redirects to dashboard
 * Used for: Login, SignUp pages
 */
const GuestRoute: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // Show loading spinner while checking auth
  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA'
      }}>
        <Loader
          size={48}
          color="#A57865"
          style={{ animation: 'spin 1s linear infinite' }}
        />
      </div>
    );
  }

  // Already authenticated - redirect to return url or home
  if (isAuthenticated) {
    const searchParams = new URLSearchParams(location.search);
    const returnUrl = searchParams.get('returnUrl') || '/';
    return <Navigate to={returnUrl} replace />;
  }

  // Not authenticated - render child routes (login/signup page)
  return <Outlet />;
};

export default GuestRoute;
