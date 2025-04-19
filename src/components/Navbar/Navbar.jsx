import React from 'react';
import './Navbar.css';
import { img } from '../../assets/assests';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to='/'>
      <div className="logo">KANJI HANDLOOM</div>
      </Link>

      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/machinery">Handloom Machinery</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>

      <div className="cart-icon">
        <img src={img.cart} alt="Cart" />
      </div>
    </div>
  );
};

export default Navbar;
