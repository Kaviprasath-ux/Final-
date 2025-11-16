import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import { AuthProvider } from './contexts/AuthContext';
import { BookingProvider } from './contexts/BookingContext';
import { HotelHomePage } from './pages/Home/HotelHomePage';
import { RoomsPage } from './pages/Rooms/RoomsPage';
import { RoomDetailPage } from './pages/RoomDetail/RoomDetailPage';
import AmenitiesPage from './pages/Amenities/AmenitiesPage';
import ContactPage from './pages/Contact/ContactPage';
import { Login } from './pages/Auth/Login';
import { SignUp } from './pages/Auth/SignUp';
import { ForgotPassword } from './pages/Auth/ForgotPassword';
import { ResetPassword } from './pages/Auth/ResetPassword';
import { VerifyEmail } from './pages/Auth/VerifyEmail';
import { BookingAccess } from './pages/Auth/BookingAccess';
import { BookingReview } from './pages/Booking/BookingReview';
import { BookingPayment } from './pages/Booking/BookingPayment';
import { BookingConfirmation } from './pages/Booking/BookingConfirmation';
import { BookingFailed } from './pages/Booking/BookingFailed';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { DashboardHome } from './pages/Dashboard/DashboardHome';
import { MyBookings } from './pages/Dashboard/MyBookings';
import { BookingDetail } from './pages/Dashboard/BookingDetail';
import { ProfileSettings } from './pages/Dashboard/ProfileSettings';
import { PaymentMethods } from './pages/Dashboard/PaymentMethods';
import { Preferences } from './pages/Dashboard/Preferences';
import { HelpSupport } from './pages/Dashboard/HelpSupport';
import { PreCheckIn } from './pages/Dashboard/PreCheckIn';
import { PreCheckInAuth } from './components/preCheckIn/PreCheckInAuth';
import PreCheckInPortal from './pages/Dashboard/PreCheckInPortal';
import PublicLayout from './components/layout/PublicLayout';
import AuthLayout from './components/layout/AuthLayout';
import ProtectedRoute from './components/guards/ProtectedRoute';
import GuestRoute from './components/guards/GuestRoute';
import NotFound from './pages/NotFound/NotFound';
import AboutPage from './pages/About/AboutPage';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import TermsOfService from './pages/Legal/TermsOfService';

function App() {
  return (
    <AuthProvider>
      <BookingProvider>
        <Router>
          <Routes>
            {/* Main Pages - With Public Navigation */}
            <Route path="/" element={<PublicLayout><HotelHomePage /></PublicLayout>} />
            <Route path="/rooms" element={<PublicLayout><RoomsPage /></PublicLayout>} />
            <Route path="/rooms/:roomSlug" element={<PublicLayout><RoomDetailPage /></PublicLayout>} />
            <Route path="/amenities" element={<PublicLayout><AmenitiesPage /></PublicLayout>} />
            <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />
            <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />

            {/* Legal Pages */}
            <Route path="/privacy" element={<PublicLayout showNewsletter={false}><PrivacyPolicy /></PublicLayout>} />
            <Route path="/terms" element={<PublicLayout showNewsletter={false}><TermsOfService /></PublicLayout>} />

            {/* Auth Pages - With AuthLayout */}
            <Route path="/login" element={<AuthLayout><GuestRoute><Login /></GuestRoute></AuthLayout>} />
            <Route path="/signup" element={<AuthLayout><GuestRoute><SignUp /></GuestRoute></AuthLayout>} />
            <Route path="/forgot-password" element={<AuthLayout><ForgotPassword /></AuthLayout>} />
            <Route path="/reset-password" element={<AuthLayout><ResetPassword /></AuthLayout>} />
            <Route path="/verify-email" element={<AuthLayout><VerifyEmail /></AuthLayout>} />
            <Route path="/booking-access" element={<AuthLayout><BookingAccess /></AuthLayout>} />

            {/* Booking Flow */}
            <Route path="/booking/review" element={<BookingReview />} />
            <Route path="/booking/payment" element={<BookingPayment />} />
            <Route path="/booking/confirmation/:bookingId" element={<BookingConfirmation />} />
            <Route path="/booking/failed" element={<BookingFailed />} />

            {/* Pre-Check-In (Guest Access - No auth required, token-based) */}
            <Route path="/pre-check-in/:bookingId" element={<PreCheckInAuth />} />

            {/* Dashboard - Protected Routes */}
            <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout><DashboardHome /></DashboardLayout></ProtectedRoute>} />
            <Route path="/dashboard/bookings" element={<ProtectedRoute><DashboardLayout><MyBookings /></DashboardLayout></ProtectedRoute>} />
            <Route path="/dashboard/bookings/:id" element={<ProtectedRoute><DashboardLayout><BookingDetail /></DashboardLayout></ProtectedRoute>} />
            <Route path="/dashboard/pre-check-in" element={<ProtectedRoute><DashboardLayout><PreCheckInPortal /></DashboardLayout></ProtectedRoute>} />
            <Route path="/dashboard/pre-check-in/:bookingId" element={<ProtectedRoute><DashboardLayout><PreCheckIn /></DashboardLayout></ProtectedRoute>} />
            <Route path="/dashboard/profile" element={<ProtectedRoute><DashboardLayout><ProfileSettings /></DashboardLayout></ProtectedRoute>} />
            <Route path="/dashboard/payments" element={<ProtectedRoute><DashboardLayout><PaymentMethods /></DashboardLayout></ProtectedRoute>} />
            <Route path="/dashboard/preferences" element={<ProtectedRoute><DashboardLayout><Preferences /></DashboardLayout></ProtectedRoute>} />
            <Route path="/dashboard/help" element={<ProtectedRoute><DashboardLayout><HelpSupport /></DashboardLayout></ProtectedRoute>} />

            {/* 404 Not Found - Must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </BookingProvider>
    </AuthProvider>
  );
}

export default App;
