import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink } from 'react-router-dom';


import { Link } from 'react-router-dom';
import "./Header.css"
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Nav } from 'react-router-dom';

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "red"
}

  return (
    <div className='bg-white'>
 <div>   

    <h1 className='bg-warning top'> BUSINESS PROFESSIONALS ACADEMY </h1>
  <div className='text-img'>
  <div className='header-text'>
    <p>Innovative Software Solutions
on Microsoft Office 365
BPA Solutions – Innovative Software
for Better Quality</p>
<div><a  className='anchor ' href="/home">Home</a>

<a className='anchor' href="/services">Services</a>
<a className='anchor' href="/about">About</a>
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