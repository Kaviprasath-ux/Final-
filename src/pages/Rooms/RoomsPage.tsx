import React, { useState } from 'react';
import { Navbar } from '../../components/sections/Navbar';
import { HotelFooter } from '../../components/sections/HotelFooter';
import { RoomsHero } from '../../components/sections/RoomsHero';
import { RoomSearchFilters } from '../../components/sections/RoomSearchFilters';
import { RoomsGrid } from '../../components/sections/RoomsGrid';
import { RoomDetailModal } from '../../components/sections/RoomDetailModal';
import { FixedAIChatBubble } from '../../components/sections/FixedAIChatBubble';
import { roomsData, Room } from '../../data/roomsData';
import styles from './RoomsPage.module.css';

export interface FilterState {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
  priceRange: [number, number];
  sortBy: string;
}

export const RoomsPage: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    checkIn: '',
    checkOut: '',
    guests: 2,
    roomType: 'All',
    priceRange: [0, 2000],
    sortBy: 'Recommended'
  });

  // Filter rooms based on current filters
  const filteredRooms = roomsData.filter(room => {
    if (filters.roomType !== 'All' && room.category !== filters.roomType) {
      return false;
    }
    if (room.price < filters.priceRange[0] || room.price > filters.priceRange[1]) {
      return false;
    }
    if (room.maxGuests < filters.guests) {
      return false;
    }
    return true;
  });

  // Sort rooms
  const sortedRooms = [...filteredRooms].sort((a, b) => {
    switch (filters.sortBy) {
      case 'Price (Low-High)':
        return a.price - b.price;
      case 'Price (High-Low)':
        return b.price - a.price;
      case 'Size':
        return b.size - a.size;
      case 'Recommended':
      default:
        // AI recommended rooms first, then by price
        if (a.isAIRecommended && !b.isAIRecommended) return -1;
        if (!a.isAIRecommended && b.isAIRecommended) return 1;
        return a.price - b.price;
    }
  });

  return (
    <div className={styles.roomsPage}>
      <Navbar />
      <RoomsHero />
      <RoomSearchFilters
        filters={filters}
        setFilters={setFilters}
        resultCount={sortedRooms.length}
      />
      <RoomsGrid
        rooms={sortedRooms}
        onSelectRoom={setSelectedRoom}
      />
      <HotelFooter />
      <FixedAIChatBubble />

      {selectedRoom && (
        <RoomDetailModal
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
        />
      )}
    </div>
  );
};
