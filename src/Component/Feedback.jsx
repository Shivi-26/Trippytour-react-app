import React from 'react';
import star from '../assests/images/Symbol.png';
import photo from '../assests/images/userPro1.jpg.png';
import feedback from '../assests/images/newreviews.png.png';
import section from '../assests/images/section.jpg';
import Translator from './Translator';
import Footer from './Footer';
import '../Translator.css';

const Feedback = () => {
  const sectionStyle = {
    backgroundImage: `url(${section})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',
    width: '100vw',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
  };

  return (
    <div>
      <div class="container-fluid mt-5">
        <div class="row">
          <div class="col-md-6 order-md-2" style={sectionStyle}>
            <div style={overlayStyle}>
              <h2 className='fonts'>Thousand Explorers, One <br />Beloved Travel Agency</h2>
              <p>Many of our clients have praised us for providing the best travel experiences to their preferred locations, like Thailand, Goa, Jammu & Kashmir, and the Andaman Islands.</p>
              <button class="linear-button">Check Our Packages!</button>
            </div>
          </div>
        </div>
      </div>
      <Translator />
      <div className='d-flex flex-column-reverse flex-md-row'>
        <div className='ms-5 mt-5'>
          <p>Client Feedback</p>
          <h1 className='font'>Trippy Baba Through Their Eyes</h1>
          <div className='mt-5'>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
          <div>
            <p className='mt-3'>Trippy Baba surpassed my expectations in every way! From the minute I made my reservation, their staff was wonderfully helpful and attentive. The events were absolutely life-changing, and the program was well-planned. I'm eagerly anticipating my upcoming trip with Trippy Baba!</p>
            <div className='ms-5 mt-5 d-flex align-items-center'>
              <img src={photo} alt="" className='responsive-img' />
              <div className='ms-3'>
                <b>Suraj Kumar</b>
                <p>Haryana, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className='ms-5 mt-5'>
          {/* Use inline styles for the feedback image */}
          <img src={feedback} alt="" style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Feedback;
