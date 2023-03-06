import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css'

import './Navbar.css';

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className="app__navbar-links">
      <li className="p--opensans"><a href="#home">Home</a></li>
      <li className="p--opensans"><a href="#about">About</a></li>
      <li className="p--opensans"><a href="#menu">Mrnu</a></li>
      <li className="p--opensans"><a href="#awards">Awards</a></li>
      <li className="p--opensans"><a href="#contact">Contact</a></li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className="p__opensans">Log In / Register</a>
      <a href="/" className="p__opensans">Book Table</a>
    </div>
  </nav>
);

export default Navbar;
