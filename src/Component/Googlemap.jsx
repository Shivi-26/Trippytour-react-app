import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import '../App.css';
import map from '../assests/images/map.jpg';
import Header from './Header';
import Footer from './Footer';

const MapComponent = () => {
  useEffect(() => {
    const leafletMap = L.map('map').setView([20.5937, 78.9629], 5);

    // Add the OpenStreetMap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(leafletMap);

    // Add the Geocoder control
    L.Control.geocoder().addTo(leafletMap);

  }, []);

  return (
    <div className='google'>
      <Header />
      <img src={map} alt="Map" className="map-image" />
      <div id="map" className="custom-map" />
      <Footer />
    </div>
  );
};

export default MapComponent;
