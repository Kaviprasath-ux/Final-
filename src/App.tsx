import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import { HotelHomePage } from './pages/Home/HotelHomePage';
import { RoomsPage } from './pages/Rooms/RoomsPage';
import { RoomDetailPage } from './pages/RoomDetail/RoomDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HotelHomePage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/rooms/:roomSlug" element={<RoomDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
