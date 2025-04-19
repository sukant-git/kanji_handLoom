import React from "react";
import { img } from "../../assets/assests";
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className="main-About" data-aos="zoom-in-left">
      <div className="footer-contant" data-aos="flip-left">
        {/* Left Section */}
        <div className="footer-left">
          <h2>KANJI HANDLOOM</h2>
          <p>
            Kanji Handloom brings the timeless beauty of traditional weaving  from the heart of Kanji village. Each fabric is handwoven with care,preserving heritage and craftsmanship in every thread.
          </p>
          <div className="social-icons">
            <img src={img.facebook} alt="Facebook" />
            <img src={img.twitter} alt="Twitter" />
            <img src={img.whatapp} alt="WhatsApp" />
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>To contact us</li>
            <li>Privacy Policy</li>
          </ul>
          <div className="email">
            <h2>Email</h2>
            <a href="mailto:support_kanjihandloom@gmail.com">support_kanjihandloom@gmail.com</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h2>Address</h2>
          <li>123 Heritage Street, Kanji Village, Tamil Nadu, India – 606601</li>
          <div className="ph">
          <h2>Phone</h2>
          <li>+91 98765 43210</li>
          </div>
        </div>
      </div>
      <hr />
      
    </div>
  );
};

export default Aboutus;
