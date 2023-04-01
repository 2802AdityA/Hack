import React from 'react';
import '../styles/components/About.css';
import aboutSvg from '../assets/about.svg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-title">
          <h1>About SocioAid</h1>
        </div>
        <div className="about-para">
          <p>
          At our website, we're committed to helping individuals with social anxiety, shyness, and lack of confidence build the skills and confidence they need to lead fulfilling lives. With a range of features that support personal growth and development, and a cutting-edge tech stack that enables us to deliver a fast, responsive user experience, we believe we can make a real difference in the lives of our users.
          </p>
        </div>
      </div>
      <div className="about-svg">
        <img src={aboutSvg} alt="About SVG" width="100%" height="100%" />
      </div>
    </div>
  );
}

export default About;
