import React from 'react';

const Footer = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div className="footer-widget">
        <div className="row">
          {/* Logo Section */}
          <div className="col-lg-3 mb-30 mt-5">
            <div className="footer-logo">
              <a href="index.html">
                <img
                  src="https://grow.trippybabatours.com/img/whiteLogo.png"
                  className="img-fluid ms-3"
                  alt="logo"
                />
              </a>
            </div>
            <div className="footer-text">
              <p className="mt-3 ms-5">
                Trippy Baba is one of the best travel agencies so far in Delhi
                NCR. With a splendid experience of delivering the best travel
                experiences in most stunning holiday destinations ranging from
                Goa to Singapore and prominent honeymoon locations like Bali.
              </p>
            </div>
          </div>
          {/* About Section */}
          <div className="col-lg-3 col-md-6 mb-30">
            <div className="footer-widget">
              <div className="footer-widget-heading mt-5">
                <h3>About</h3>
              </div>
              <ul>
                <li>
                  <a href="#">-About</a>
                </li>
                <li>
                  <a href="#">-Destination</a>
                </li>
                <li>
                  <a href="#">-Testimonials</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Us Section */}
          <div className="col-xl-3 col-lg-3 col-md-6 mb-30 mt-5">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Contact Us</h3>
              </div>
              <ul>
                <li>
                  <i className="bi bi-telephone "></i>
                  <span>8178550422 / 7827432676</span>
                </li>
                <li>
                  <i className="bi bi-envelope"></i>
                  <span>enquiry@trippybabatour.com</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Links Section */}
          <div className="col-xl-3 col-lg-3 col-md-6 mb-30 mt-5">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Links</h3>
              </div>
              <ul>
                <li>
                  <a href="#">-Home</a>
                </li>
                <li>
                  <a href="#">-About Us</a>
                </li>
                <li>
                  <a href="#">-Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid white', margin: '10px 0' }}></div>
        <p style={{ marginTop: '10px' , fontSize:'12px'}}>All Rights Reserved by ©: trippybabatours.com</p>
        
      </div>
    </div>
  );
};

export default Footer;
