// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assests/images/whiteLogo.png.png';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand ms-3" to="/">
          <img src={logo} alt="Logo" />
        </Link>

        {/* Navbar Toggler Button for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto me-5">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/Googlemap">
                Google Map
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Hotelanalysis">
                Hotel
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
