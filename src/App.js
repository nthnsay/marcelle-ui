import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LandingPage from './components/Pages/LandingPage';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Events from './components/Pages/Events';
import Schedule from './components/Pages/Schedule';
import Classes from './components/Pages/Classes';
import Membership from './components/Pages/Membership';
import Rental from './components/Pages/Rental';
import Beginners from './components/Pages/Beginners';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/rental" element={<Rental />} />
          <Route path="/beginners" element={<Beginners />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;





