import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import { AuthProvider } from './contexts/AuthContext';
import { HotelHomePage } from './pages/Home/HotelHomePage';
import { RoomsPage } from './pages/Rooms/RoomsPage';
import { RoomDetailPage } from './pages/RoomDetail/RoomDetailPage';
import { Login } from './pages/Auth/Login';
import { SignUp } from './pages/Auth/SignUp';
import { ForgotPassword } from './pages/Auth/ForgotPassword';
import { ResetPassword } from './pages/Auth/ResetPassword';
import { VerifyEmail } from './pages/Auth/VerifyEmail';
import { BookingAccess } from './pages/Auth/BookingAccess';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HotelHomePage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/rooms/:roomSlug" element={<RoomDetailPage />} />

          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/booking-access" element={<BookingAccess />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
