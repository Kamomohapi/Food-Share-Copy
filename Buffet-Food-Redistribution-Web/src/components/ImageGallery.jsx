
import React from 'react';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';

export function ImageGallery() {



  // Sample image URLs for demonstration
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ];

  return (
    <div className="container-fluid mt-5">
      <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold bg-dark text-white">Image Gallery</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {images.map((imageUrl, index) => (
          <div className="col mb-4" key={index}>
            <div className="card border-0 shadow">
              <img src={imageUrl} className="card-img-top img-fluid rounded" alt='' style={{ objectFit: 'cover', height: '300px' }} />
              <div className="card-body">
                {/* Any additional content or text here */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Static Gallery Section */}
      <div className="container py-5">
        <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">Static Image Gallery</h2>
        <div className="row">
          <div className="col-md-4 px-2">
            <div className="my-3">
              <img src={image1} className="img-fluid" alt="" />
            </div>
            <div className="my-3">
              <img src={image2} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-4 px-2">
            <div className="my-3">
              <img src={image3} className="img-fluid" alt="" />
            </div>
            <div className="my-3">
              <img src={image4} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-4 px-2">
            <div className="my-3">
              <img src={image5} className="img-fluid" alt="" />
            </div>
            <div className="my-3">
              <img src={image6} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
