import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink } from 'react-router-dom';



import { Link } from 'react-router-dom';
import "./Header.css"
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Nav } from 'react-router-dom';

const Header = () => {
 

  return (
    <div className='bg-white'>
 <div>   
<img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_100/https://www.bpa-solutions.net/wp-content/uploads/2022/01/BPA-logo-300x67.png" alt="" />
    <h1 className='bg-warning top'> BUSINESS PROFESSIONALS ACADEMY </h1>
  <div className='text-img'>
  <div className='header-text'>
    <p className='text1'>Innovative Software Solutions
on Microsoft Office 365
BPA Solutions – Innovative Software
for Better Quality</p>
<div >
  <NavLink className='link' to="/home">Home</NavLink>
  <NavLink className='link' to="/services">Services</NavLink>
  <NavLink className='link'  to="/about">About</NavLink>
  <NavLink className='link'  to="/contackUs">Contack Us</NavLink>



</div>
  </div>
  <div className='header-img'>
<img src="https://images-for-school.netlify.app/A1.jpg" alt="" />
  </div>
  </div>
  
    
    </div>
   
 
  


    </div>
  );
};

export default Header;