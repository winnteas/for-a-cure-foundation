import React from 'react';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import HeroSection from './pages/Home/HeroSection';
import VisionMissionValues from './pages/Home/VisionMissionValues';
import ImpactStats from './pages/Home/ImpactStats';
import NewsSection from './pages/Home/NewsSection';
import PartnersSection from './pages/Home/PartnersSection';
import DonationSection from './features/donation/DonationSection';
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