// App.jsx
import React from 'react';
import img1 from '../assests/images/img1.jpg';
import Travel from './Travel';
import Header from './Header';

const App = () => {
  return (
    <div className="container-fluid form-line">
      <div className="row m-0">
        <div className="col-lg-10 p-0 position-relative">
          <div
            className="full-width-height-image"
            style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <Header />
            <div className="row m-0">
              {/* Text Section */}
              <div className="col-lg-5 col-md-5 ms-3 mt-3 text-white">
                <p className="lead ms-3">ELEVATE YOUR TRAVEL JOURNEY</p>
                <h1 className="font display-4">Discover Your World With Trippy Baba</h1>
                <p>
                  Trippy Baba is your gateway to unforgettable journeys. We're passionate about crafting unique travel
                  experiences that immerse you in culture, adventure, and discovery. Join us in exploring the world's
                  most captivating destinations, one trip at a time. Travel with Trippy Baba for unforgettable memories.
                </p>
              </div>

              {/* Form Section */}
              <div className="col-lg-6 col-md-5 col-sm-12 text-dark mt-5">
                <div className="sign_form">
                  <h2>Contact Us</h2>
                  <div className="form_content">
                    <label>Full Name</label>
                    <input type="text" placeholder="" />
                  </div>
                  <div className="content">
                    <div className="form_content number">
                      <label>Full Name</label>
                      <input type="text" className="" placeholder="" />
                    </div>
                    <div className="form_content">
                      <label>Full Name</label>
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="content">
                    <div className="form_content number">
                      <label>Full Name</label>
                      <select className="form-select select" aria-label="Default select example">
                        <option selected>Dubai</option>
                        <option value="1">Thailand</option>
                        <option value="2">Bali</option>
                      </select>
                    </div>
                    <div className="form_content">
                      <label>Full Name</label>
                      <input type="date" placeholder="" />
                    </div>
                  </div>
                  <button className="linear-button">SEND MESSAGE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Travel />
    </div>
  );
};

export default App;
