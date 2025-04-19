import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents" data-aos="fade-up">
        <h2 className='h2' data-aos="fade-down" data-aos-delay="200">
          Celebrate the Legacy of Handloom Culture of Tamil Nadu
        </h2>
        <p data-aos="fade-up" data-aos-delay="400">
          "Every thread tells a story. Support our artisans and embrace the beauty of handwoven tradition."
        </p>
        <p data-aos="fade-up" data-aos-delay="600">
          Experience the artistry and skill of our local weavers, crafting timeless designs with passion and precision.
        </p>
        <button data-aos="zoom-in" data-aos-delay="800">
          <a href='#explore-collection'>Explore Collection</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
