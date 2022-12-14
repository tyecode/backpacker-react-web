import React from 'react';
import './scss/style.scss';
import { Routes, Route } from 'react-router-dom';

// Import Components

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

// Import Pages

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Destinations from './Pages/Destinations';
import Experience from './Pages/Experience';


const App = () => {
  

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
