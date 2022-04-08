import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const About = () => {
  return (
    <div>
      <Header></Header>
      <h1>About us</h1>
      <img  src="https://st2.depositphotos.com/3591429/6006/i/600/depositphotos_60063963-stock-photo-people-discussing-about-us.jpg" alt="" />
      <h3>We are passionate:</h3>
      <p>All of our emplooye are very much pssionate about their work.</p>

      <h3>We are experienced:</h3>
      <p>We are running this services since 2000</p>
      <Footer></Footer>
    </div>
  );
};

export default About;