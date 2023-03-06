import React from 'react';
import { images } from "../../constants";
import { SubHeading } from "../../components";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';

const Gallery = () => {

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem'}}></p>
      </div>
    </div>
  )
}

export default Gallery;
