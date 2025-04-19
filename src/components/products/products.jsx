
import React, { useState } from "react";
import "./products.css";
import { product } from "../../assets/assests";

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const closeModal = () => {
    setActiveIndex(null);
  };

  return (
    <div className="main">
      <div className="header-cont">
        <h1>Explore the products made of handloom</h1>
      </div>
      <hr />

      <div className="scroll-container">
        {product.map((item, index) => (
          <div
            className="image-container"
            key={index}  data-aos="zoom-in"
             onClick={() => handleClick(index)}
          >
            <img src={item.src} alt={item.alt} className="product-img" />
            <div className="product-info">
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Render modal OUTSIDE .image-container for proper overlay */}
      {activeIndex !== null && (
        <div className="description-modal" onClick={closeModal}  data-aos="slide-down">
          <div
            className="description-content"
            onClick={(e) => e.stopPropagation()} // prevent closing on inner click
          >
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>
            <p>
              <strong>Description:</strong> {product[activeIndex].description}
            </p>
            <p>
              <strong>Washing Instructions:</strong>{" "}
              {product[activeIndex].WashingInstructions}
            </p>
            <p>
              <strong>Maintenance:</strong> {product[activeIndex].Maintenance}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;

