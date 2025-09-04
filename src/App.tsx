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
import WhatWeDoSection from './pages/about-us/WhatWeDo';
import CleoneOnTheFrontline from './pages/about-us/CleoneOnTheFrontline';
import OurPeople from './pages/about-us/OurPeople';
import ResearchPage from './pages/Research';
import ContactPage from './pages/Contact';
import DonatePage from './pages/get-involved/Donate';
import NewsPage from './pages/News';
import VolunteerPage from './pages/get-involved/Volunteer';
import OurFriendsPage from './pages/get-involved/OurFriends';
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
      <div className="whiteDivider"></div>
    </>
  );

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={HomePageContent} />
        <Route path="/for-a-cure-foundation" element={HomePageContent} />
        <Route path="/about">
          <Route path="what-we-do" element={<WhatWeDoSection />} />
          <Route path="cleone-on-the-frontline" element={<CleoneOnTheFrontline />} />
          <Route path="our-people" element={<OurPeople />} />
        </Route>
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/get-involved">
          <Route path="donate" element={<DonatePage />} />
          <Route path="volunteer" element={<VolunteerPage />} />
          <Route path="our-friends" element={<OurFriendsPage />} />
        </Route>
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App; 