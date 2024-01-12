import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Component/Landing';
import './App.css';
import Googlemap from './Component/Googlemap';
import Hotelanalysis from './Component/Hotelanalysis';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Googlemap" element={<Googlemap />} />
        <Route path="/Hotelanalysis" element={<Hotelanalysis />} />
      </Routes>
    </Router>
  );
};

export default App;
