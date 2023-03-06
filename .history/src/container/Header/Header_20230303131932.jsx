import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
<div className="app__wrapper_info">
  <SubHeading title="Chase the new flavour"/>
  <h1 className="app__header-h1">The Key to Fine Dining</h1>
  <p className="app__opensans" style={{margin: '2rem 0'}}>From your neighborhood sushi spot to the burger and fries you crave, choose from over 300,000 local and national favorites across the U.S., Canada and Australia.</p>
  <button type="button" className="custom__button"></button>
  </div>
  <div className="app__wrapper_img"></div>
  </div>
);

export default Header;
