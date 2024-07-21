import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import AboutUs from './Pages/AboutUs';
import Footer from './Components/Footer';

const App = () => {
  return (
    <BrowserRouter basename="/Afghan-invest">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
