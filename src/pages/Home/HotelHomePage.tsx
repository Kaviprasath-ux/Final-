import React from 'react';
import { HotelHeroSection } from '../../components/sections/HotelHeroSection';
import { SearchWidget } from '../../components/sections/SearchWidget';
import { StatsSection } from '../../components/sections/StatsSection';
import { LuxuryAmenities } from '../../components/sections/LuxuryAmenities';
import { RoomsSection } from '../../components/sections/RoomsSection';
import { GuestJourney } from '../../components/sections/GuestJourney';
import { AIFeaturesSection } from '../../components/sections/AIFeaturesSection';
import { PreCheckinShowcase } from '../../components/sections/PreCheckinShowcase';
import { AIAssistantDemo } from '../../components/sections/AIAssistantDemo';
import { TestimonialsCarousel } from '../../components/sections/TestimonialsCarousel';
import { InstagramGallery } from '../../components/sections/InstagramGallery';
import { NewsletterSection } from '../../components/sections/NewsletterSection';
import { FixedAIChatBubble } from '../../components/sections/FixedAIChatBubble';
import styles from './HotelHomePage.module.css';

export const HotelHomePage: React.FC = () => {
  return (
    <div className={styles.hotelHomePage}>
      {/* Hero with immersive full-screen experience */}
      <HotelHeroSection />

      {/* Floating search widget for quick bookings */}
      <SearchWidget />

      {/* Social proof and trust indicators */}
      <StatsSection />

      {/* Showcase premium amenities */}
      <LuxuryAmenities />

      {/* Featured rooms and suites */}
      <RoomsSection />

      {/* Guest journey and experience flow */}
      <GuestJourney />

      {/* AI-powered features */}
      <AIFeaturesSection />

      {/* Pre-check-in showcase */}
      <PreCheckinShowcase />

      {/* AI assistant demo */}
      <AIAssistantDemo />

      {/* Guest testimonials */}
      <TestimonialsCarousel />

      {/* Instagram social gallery */}
      <InstagramGallery />

      {/* Newsletter signup */}
      <NewsletterSection />

      {/* Fixed AI chat bubble */}
      <FixedAIChatBubble />
    </div>
  );
};
