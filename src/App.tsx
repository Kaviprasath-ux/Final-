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
import PublicLayout from './components/layout/PublicLayout';

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

            {/* Auth Pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/booking-access" element={<BookingAccess />} />

            {/* Booking Flow */}
            <Route path="/booking/review" element={<BookingReview />} />
            <Route path="/booking/payment" element={<BookingPayment />} />
            <Route path="/booking/confirmation/:bookingId" element={<BookingConfirmation />} />
            <Route path="/booking/failed" element={<BookingFailed />} />

            {/* Pre-Check-In (Guest Access - No auth required, token-based) */}
            <Route path="/pre-check-in/:bookingId" element={<PreCheckInAuth />} />

            {/* Dashboard */}
            <Route path="/dashboard" element={<DashboardLayout><DashboardHome /></DashboardLayout>} />
            <Route path="/dashboard/bookings" element={<DashboardLayout><MyBookings /></DashboardLayout>} />
            <Route path="/dashboard/bookings/:id" element={<DashboardLayout><BookingDetail /></DashboardLayout>} />
            <Route path="/dashboard/pre-check-in" element={<DashboardLayout><PreCheckIn /></DashboardLayout>} />
            <Route path="/dashboard/pre-check-in/:bookingId" element={<DashboardLayout><PreCheckIn /></DashboardLayout>} />
            <Route path="/dashboard/profile" element={<DashboardLayout><ProfileSettings /></DashboardLayout>} />
            <Route path="/dashboard/payments" element={<DashboardLayout><PaymentMethods /></DashboardLayout>} />
            <Route path="/dashboard/preferences" element={<DashboardLayout><Preferences /></DashboardLayout>} />
            <Route path="/dashboard/help" element={<DashboardLayout><HelpSupport /></DashboardLayout>} />
          </Routes>
        </Router>
      </BookingProvider>
    </AuthProvider>
  );
}

export default App;
