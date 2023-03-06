import React from 'react';
import {images, data} from '../../constants';
import { SubHeading, MenuItem} from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you Pallete" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
<div className="app__specialMenu-menu_items">
  {data.wines.map((wine, index) => (
<p>{wine.title}</p>
  ))}
</div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_cocktail flex__center">
        <p className='app__specialMenu-menu_heading'>Cocktail & Beer</p>
<div className="app__specialMenu-menu_items">
  {data.cocktails.map((cocktail, index) => (
<p>{cocktail.title}</p>
  ))}
</div>
      </div>
    </div>

   <div style={{margintop:'15pc'}}>
    <button type='button' className="custom__button"></button>
    </div> 
  </div>
);

export default SpecialMenu;
