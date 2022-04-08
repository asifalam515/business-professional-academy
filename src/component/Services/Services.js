import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./Services.css"

const Services = () => {
  return (
   <div>
     <Header></Header>
    <div className='services' >
    
       
 
     <div >
      
     <img className='img-fluid h-500px w-300px' src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80" alt="" />
     <p className='text'>Intelligent Workflow</p>
    
     <small><i>We are provide best work space to our emplooye</i></small>
     </div>
     <div>
       <img src="https://images.unsplash.com/photo-1586810147054-4439981ada92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" />
       <p className='text'>Clear Vision</p>
       <small><i>We are crystall clear about goal to server perfect services</i></small>
     </div>
     <div>
       <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
       <p className='text'>Hard Working Team</p>
       <small ><i>Our team is always ready to make sure our client products</i></small>
     </div>
     <img src="https://images-for-skilline.netlify.app/header-lovely-teenage-girl-with-curly-hair-posing-yellow-tshirt-min%201.png" alt="" />
    
     <h5 className='text2'>Our vision is to create a better everyday life for many people.We strive to offer our customers the lowest possible prices, the best available selection and the utmost convenience.</h5>
     <img src="https://images-for-skilline.netlify.app/image%207.png" alt="" />
     <img src="https://images-for-skilline.netlify.app/image%208.png" alt="" />
     <img src="https://images-for-skilline.netlify.app/image%2010.png" alt="" />
     <img src="https://images-for-skilline.netlify.app/image%2011.png" alt="" />
     
    
    </div>
    <Footer></Footer>
    </div>
   
  );

};

export default Services;