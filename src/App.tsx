import React from 'react';
import {
  Navbar,
  Footer,
  HeroSection,
  VisionMissionValues,
  ImpactStats,
  NewsSection,
  PartnersSection,
  DonationSection
} from './components';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <VisionMissionValues />
      <ImpactStats />
      <NewsSection />
      <PartnersSection />
      <DonationSection />
      <Footer />
    </div>
  );
};

export default App; 