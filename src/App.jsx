// Importuri necesare – React + routing + componente
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MobileApps from './components/MobileApps';
import Partners from './components/Partners';
import Footer from './components/Footer';
import SesizareForm from './components/SesizareForm';
import BucurestiSlideshow from './components/BucurestiSlideShow';
import Harta from './components/Harta';

// Pagina principală – afișează secțiuni homepage
function LandingPage() {
  return (
    <>
      <HeroSection />
      <MobileApps />
      <Partners />
    </>
  );
}

// Rutare aplicație – controlează ce se afișează
function AppRoutes() {
  const location = useLocation();
  const isMapPage = location.pathname === "/harta";

  return (
    <>
      {!isMapPage && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/sesizare"
          element={
            <>
              <BucurestiSlideshow />
              <SesizareForm />
            </>
          }
        />
        <Route path="/harta" element={<Harta />} />
      </Routes>
      {!isMapPage && <Footer />}
    </>
  );
}

// Componenta principală – container general aplicație
function App() {
  return (
    <div className="min-h-screen bg-[#638ECB] dark:bg-[#1f2937] text-gray-900 dark:text-white relative overflow-hidden">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
