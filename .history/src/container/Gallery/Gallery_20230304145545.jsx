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
      </div>
    </div>
  )
}

export default Gallery;
