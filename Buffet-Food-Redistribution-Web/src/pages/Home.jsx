// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ImageGallery } from '../components/ImageGallery';
// import { ContactInfo } from '../components/ContactInfo';
// import video from "../components/videos/f.mp4";
// import AboutImg from '../utils/img/about-img.jpg';
// import ContactImage from '../utils/img/contact-img.jpg';

// function Home() {
//   return (
//     <div className="home-page">
//       <div className="container-fluid px-0">
//         <div className="position-relative text-center">
//           <video
//             autoPlay
//             loop
//             muted
//             className="img-fluid w-100"
//             style={{ height: 'auto', marginTop: '50px' }}
//           >
//             <source src={video} type="video/mp4" />
//           </video>
//           <div
//             className="position-absolute top-0 start-0 w-100 h-100"
//             style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} // Dark overlay with slight opacity
//           ></div>
//           <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
//             <h1 className="display-4 fw-bold">Welcome to FoodShare Network!</h1>
//             <p className="lead fw-bold">WE MAKE A LIVING BY WHAT WE GET, BUT WE MAKE A LIFE BY WHAT WE GIVE...</p>
//           </div>
//         </div>
//       </div>

//       <div className="container my-5">
//         <div className="row">
//           <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
//             <img src={AboutImg} className="img-fluid w-75" alt="about img" />
//           </div>
//           <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
//             <h2 className="fs-1 mb-5 text-uppercase fw-bold">About Us</h2>
//             <p>
//               At FoodShare Network, we are dedicated to combating food waste and hunger through our innovative food redistribution system. Founded on the belief that no edible food should go to waste while people in our communities are going hungry, we have been working tirelessly to create a more sustainable and equitable food system.
//             </p>
//             <Link to="/about">
//               <button type="button" className="btn btn-outline-success btn-lg">More About Us</button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <ImageGallery />

//       <div className="bg-dark text-light py-5 shadow">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
//               <ContactInfo />
//             </div>
//             <div className="col-lg-6 d-flex justify-content-center">
//               <img src={ContactImage} className="img-fluid w-75" alt="contact" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import { ImageGallery } from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo';
import video from "../components/videos/f.mp4";
import AboutImg from '../utils/img/img3.jpeg';
import ContactImage from '../utils/img/contact-img.jpg';
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <div className="home-page">
      {/* <div className="container-fluid px-0">
        <div className="position-relative text-center">
          <video
            autoPlay
            loop
            muted
            className="img-fluid w-100 "
            style={{ height: 'auto', marginTop: '60px' }}
          >
            <source src={video} type="video/mp4" />
          </video>
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} // Dark overlay with slight opacity
          ></div>
          <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
            <h1 className="display-4 fw-bold">Welcome to FoodShare Network!</h1>
            <p className="lead fw-bold">WE MAKE A LIVING BY WHAT WE GET, BUT WE MAKE A LIFE BY WHAT WE GIVE...</p>
          </div>
        </div>
      </div> */}

<div className="container-fluid px-0">
      <div className="position-relative text-center">
        <video
          autoPlay
          loop
          muted
          className="img-fluid w-100"
          style={{ height: 'auto', marginTop: '60px' }}
        >
          <source src={video} type="video/mp4" />
        </video>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} // Dark overlay with slight opacity
        ></div>
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
          <h1 className="display-4 fw-bold">
            <Typewriter
              options={{
                strings: ['WELCOME TO FOODSHARE NETWORK!'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="lead fw-bold">
            <Typewriter
              options={{
                strings: [
                  'WE MAKE A LIVING BY WHAT WE GET, BUT WE MAKE A LIFE BY WHAT WE GIVE...',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>
      </div>
    </div>
       
      <div className="container-fluid my-2">
        <header className='d-flex justify-content-center bg-dark text-light mb-3'>
          <h1>ABOUT</h1>
        </header>
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
            <img src={AboutImg} className="img-fluid w-75" alt="about img" />
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <h2 className="fs-1 mb-5 text-uppercase fw-bold">About Us</h2>
            <p>
              At FoodShare Network, we are dedicated to combating food waste and hunger through our innovative food redistribution system. Founded on the belief that no edible food should go to waste while people in our communities are going hungry, we have been working tirelessly to create a more sustainable and equitable food system.
            </p>
            <Link to="/about">
              <button type="button" className="btn btn-outline-success btn-lg">More About Us</button>
            </Link>
          </div>
        </div>
      </div>

      <ImageGallery />

      <div className="bg-dark text-light py-5 shadow">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
              <ContactInfo />
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={ContactImage} className="img-fluid w-75" alt="contact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
