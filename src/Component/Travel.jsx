import React from 'react';
import img2 from '../assests/images/Section → about.png.png';
import img3 from '../assests/images/thailand1.jpg.png';
import img4 from '../assests/images/iconsCutlery.png-1.png'
import img5 from '../assests/images/iconsCutlery.png.png'
import img6 from '../assests/images/iconsHouse.png-1.png'
import img7 from '../assests/images/iconsHouse.png.png'
import img8 from '../assests/images/thailand2.jpg.png'
import img9 from '../assests/images/thailand3.jpg.png'
import dubai1 from '../assests/images/dubai1.jpg'
import dubai2 from '../assests/images/dubai2.jpg'
import Feedback from './Feedback'

const Travel = () => {

  
  return (
    <>
      <div className='container margin'>
        <div>
          <p className='lead'>About TrippyBaba</p>
          <h1 className='font'>Providing the Best Travel Experiences, Always.</h1>
          <p>Trippy Baba is one of the best travel agencies so far in Delhi NCR. With a splendid experience of delivering the best travel experiences in most stunning holiday destinations ranging from Goa to Singapore and prominent honeymoon locations like Bali. In our journeys, we blend adventure and culture to provide unforgettable memories for our clients. For those with a spirit of exploration and adventure, We offer packages that will help them embark on a transforming journey.</p>
        </div>
        <div>
          <img src={img2} alt="" className="img-prop"/>
        </div>
      </div>

      <div className='tour'>
        <div className='thailand mt-5 text-container text-center'>
          <p>Our Thailand Packages Packages</p>
          <h1 className='fonthead'>Check Our Latest Thailand Packages</h1>
        </div>
        <div className='d-flex flex-wrap justify-content-center mt-3'>
          <div className='card'>
            <img src={img3} alt="" className='images' />
            <p className='price'>14,800/-</p>
            <div className='images-container'>
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <img src={img6} alt="" />
              <img src={img7} alt="" />
            </div>
            <div className='d-flex book'>
              <div className='mt-3 ms-2'>
                <p>4 NIGHT 5 DAYS TOUR</p>
                <h6 className='font'>BANGKOK PATTAYA</h6>
              </div>
              <p className='button'>Book Now</p>
            </div>
          </div>

          <div className='card'>
            <img src={img8} alt="" className='images' />
            <p className='price'>14,800/-</p>
            <div className='images-container'>
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <img src={img6} alt="" />
              <img src={img7} alt="" />
            </div>
            <div className='d-flex book'>
              <div className='mt-3 ms-2'>
                <p>4 NIGHT 5 DAYS TOUR</p>
                <h6 className='font'>BANGKOK PATTAYA</h6>
              </div>
              <p className='button'>Book Now</p>
            </div>
          </div>

          <div className='card'>
            <img src={img9} alt="" className='images' />
            <p className='price'>14,800/-</p>
            <div className='images-container'>
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <img src={img6} alt="" />
              <img src={img7} alt="" />
            </div>
            <div className='d-flex book'>
              <div className='mt-3 ms-2'>
                <p>4 NIGHT 5 DAYS TOUR</p>
                <h6 className='font'>BANGKOK PATTAYA</h6>
              </div>
              <p className='button'>Book Now</p>
            </div>
          </div>
        </div>
        <div>
          <div className='dubai mt-5 text-container text-center'>
            <p>Our Dubai Packages Packages</p>
            <h2 className='fonthead'>Check Our Latest Dubai Packages</h2>
          </div>
          <div className='d-flex flex-wrap justify-content-center card-top'>
            <div className='card'>
              <img src={dubai1} alt="" className='images' />
              <p className='price'>14,800/-</p>
              <div className='images-container'>
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
              </div>
              <div className='d-flex book'>
                <div className='mt-3 ms-2'>
                  <p>4 NIGHT 5 DAYS TOUR</p>
                  <h6 className='font'>BANGKOK PATTAYA</h6>
                </div>
                <p className='button'>Book Now</p>
              </div>
            </div>

            <div className='card'>
              <img src={dubai2} alt="" className='images' />
              <p className='price'>14,800/-</p>
              <div className='images-container'>
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
              </div>
              <div className='d-flex book'>
                <div className='mt-3 ms-2'>
                  <p>4 NIGHT 5 DAYS TOUR</p>
                  <h6 className='font'>BANGKOK PATTAYA</h6>
                </div>
                <p className='button'>Book Now</p>
              </div>
            </div>
          </div>
        </div>
        
        <Feedback />
      </div>
    </>
  );
};

export default Travel;
