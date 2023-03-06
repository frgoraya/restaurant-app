import React, { useRef } from 'react';
import { images } from "../../constants";
import { SubHeading } from "../../components";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';

const Gallery = () => {
const scrollRef = useRef(null);

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem'}}></p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>

        </div>
      </div>
    </div>
  )
}

export default Gallery;
