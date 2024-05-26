import React, { useState, useEffect } from 'react';
import './Imageslider.css'

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    //'./photos/evie-s-zn4Pl32WgWM-unsplash.jpg',
    // './photos/markus-spiske-EK8QN9O0wRk-unsplash.jpg',
    './photos/nathan-cima-UmMl9BMk54Y-unsplash.jpg',
    './photos/markus-spiske-nJtmd4ANdR4-unsplash.jpg',
    './photos/markus-spiske-vrbZVyX2k4I-unsplash.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleRadioChange = (event) => {
    setCurrentIndex(Number(event.target.value));
  };

  return (
    <div className="image-slider">
      <div className="slider-container">
        <img id="imageitself" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`}  />
        <div className="dots">
        {images.map((_, index) => (
          <label key={index} className={`dot ${index === currentIndex ? 'active' : ''}`}>
            <input className="radiocrcl"
              type="radio"
              name="slider-dot"
              value={index}
              checked={index === currentIndex}
              onChange={handleRadioChange}
            />
          </label>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default ImageSlider;

