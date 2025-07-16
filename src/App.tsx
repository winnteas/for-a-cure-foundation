import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import HeroSection from './features/hero/HeroSection';
import VisionMissionValues from './features/visionmissionvalues/VisionMissionValues';
import ImpactStats from './features/impact-stats/ImpactStats';
import NewsSection from './features/news/NewsSection';
import PartnersSection from './features/partners/PartnersSection';
import DonationSection from './features/donation/DonationSection';
import WhatWeDoSection from './pages/Home/about-us/WhatWeDo';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <VisionMissionValues />
            <ImpactStats />
            <NewsSection />
            <PartnersSection />
            <DonationSection />
          </>
        } />
        <Route path="/about/what-we-do" element={<WhatWeDoSection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App; 