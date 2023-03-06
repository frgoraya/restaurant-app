import React from 'react';
import { FiFaceBook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
<FooterOverlay />
<Newsletter />
<div className="app__footer-links">
  <div className="app__footer-links_contact">

  </div>
  <div className="app__footer-links_logo">

  </div>
  <div className="app__footer-links_work">

  </div>
</div>
<div className="footer__copyright">
  <p className="p__opensans">2021 Gericht. All Rights reserved</p>
</div>
</div>
);

export default Footer;
