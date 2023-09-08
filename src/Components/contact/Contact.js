import React from 'react';
import Header from '../Header/Header';
import Footer from '../footer/Footer';
import './contactStyle.css';
import logo from "/JourneyStart-Frontend/Frontend-JourneyStart/src/image/about.jpg"
const Contact = () => {
  return (
    <div>
      <Header />
      <h2>About Us</h2>
        <div className='Companylogo' >
          <img src={logo}/>
        </div>
      <div className='about'>
           
        <div className='text'>
          <p>
            <b>"</b>At JourneyStart, our vision is to empower the next generation of technical students by providing them with free and accessible education.<b>"</b> <br />We envision a world where every aspiring technologist has the opportunity to enhance their skills, regardless of their background or financial constraints. Through innovative learning resources, community engagement, and a commitment to excellence, we aim to foster a global community of learners who are equipped to shape the future through technology.
          </p>

        </div>
        <div className='pic'>
        </div>
      </div>
      <div className='intro-video'>
        <iframe
          width='50%'
          height='150%'
          src='https://www.youtube.com/embed/Y2wKc0GZweE'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>

      </div>
      <div className='about'>

        <div className='text'>
          <p>
            <b>"</b>At JourneyStart, our vision is to empower the next generation of technical students by providing them with free and accessible education.<b>"</b> <br />We envision a world where every aspiring technologist has the opportunity to enhance their skills, regardless of their background or financial constraints. Through innovative learning resources, community engagement, and a commitment to excellence, we aim to foster a global community of learners who are equipped to shape the future through technology.
          </p>

        </div>
        <div className='pic'>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
