import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

import "./Home.css"

const Home = () => {
  return (
    <div>
     <Header></Header>
     <div className='text'>
     <h3>Innovative Software Solutions on Microsoft Office 365</h3>
     </div>
     <div className='img'>
      
       <img src="https://images-for-skilline.netlify.app/image%203.png" alt="" />
       <img src="https://images-for-skilline.netlify.app/image%202.png" alt="" />
       <img src="https://images-for-skilline.netlify.app/image%205.png" alt="" />
       <img src="data:image/jpeg;base64,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" alt="" />
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png" alt="" />
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/800px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png" alt="" />
       <div>
         <h6 className="text1">The perfect solution</h6>
       </div>
     </div>
     <div className='services' >
    
       
 
     <div >
      
     <img className='img-fluid h-500px w-300px' src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80" alt="" />
     <p>Intelligent Workflow</p>
    
     <small><i>We are provide best work space to our emplooye</i></small>
     </div>
     <div>
       <img src="https://images.unsplash.com/photo-1586810147054-4439981ada92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" />
       <p>Clear Vision</p>
       <small><i>We are crystall clear about goal to server perfect services</i></small>
     </div>
     <div>
       <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
       <p>Hard Working Team</p>
       <small><i>Our team is always ready to make sure our client products</i></small>
     </div>
     <img src="https://images-for-skilline.netlify.app/header-lovely-teenage-girl-with-curly-hair-posing-yellow-tshirt-min%201.png" alt="" />
    
     <h5 className='text2'>Our vision is to create a better everyday life for many people.We strive to offer our customers the lowest possible prices, the best available selection and the utmost convenience..</h5>
     <img src="https://images-for-skilline.netlify.app/image%207.png" alt="" />
     <img src="https://images-for-skilline.netlify.app/image%208.png" alt="" />
     <img src="https://images-for-skilline.netlify.app/image%2010.png" alt="" />
     <img src="https://images-for-skilline.netlify.app/image%2011.png" alt="" />
     
    
    </div>
    <h1 className='text'>About us</h1>
      <img  src="https://st2.depositphotos.com/3591429/6006/i/600/depositphotos_60063963-stock-photo-people-discussing-about-us.jpg" alt="" />
      <h3 className='text'>We are passionate:</h3>
      <p>All of our emplooye are very much pssionate about their work.</p>

      <h3 className='text2'>We are experienced:</h3>
      <p>We are running this services since 2000</p>
     <Footer></Footer>
     
    </div>
  );
};

export default Home;