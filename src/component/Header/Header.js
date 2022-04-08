import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
  return (
    <div className='bg-white'>
   <h1 className='bg-warning'> BUSINESS PROFESSIONALS ACADEMY </h1>
   <Nav justify variant='tabs' defaultActiveKey="/home"></Nav>
  
    </div>
  );
};

export default Header;