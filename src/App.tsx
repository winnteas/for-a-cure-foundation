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
import CleoneOnTheFrontline from './pages/Home/about-us/CleoneOnTheFrontline';
import OurPeople from './pages/Home/about-us/OurPeople';
import './App.css';

const App: React.FC = () => {
  const HomePageContent = (
    <>
      <HeroSection />
      <VisionMissionValues />
      <ImpactStats />
      <NewsSection />
      <PartnersSection />
      <DonationSection />
    </>
  );

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={HomePageContent} />
        <Route path="/for-a-cure-foundation" element={HomePageContent} />
          <Route path="/about/what-we-do" element={<WhatWeDoSection />} />
          <Route path="/about/cleone-on-the-frontline" element={<CleoneOnTheFrontline />} />
          <Route path="/about/our-people" element={<OurPeople />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App; 