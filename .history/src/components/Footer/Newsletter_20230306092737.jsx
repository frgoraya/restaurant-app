import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className="app__newsletter-heading">
      <SubHeading title={Newsletter} />
      <h1 className='headtext__cormorant'>Subscribe to Our Nesletter</h1>
      <p className='p__opensans'>And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex-center">
      <input type="email" placeholder='Enter your e-mail address' />
      <button className="custom__button">Subscribe</button>
    </div>
    console.log(Newsletter)
  </div>
);

export default Newsletter;
