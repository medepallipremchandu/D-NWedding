import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from "./components/footer"
import Home from './components/Home';
import BrideGallery from"./components/Bridegallery";
import GroomGallery from './components/Groomgallery';


const App = () => {
    return (
      <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bride" element={<BrideGallery />} />
        <Route path="/groom" element={<GroomGallery />} />
      </Routes>
      <Footer/>
    </Router>
    );
  }

export default App;