import React from 'react'
import './Hero.css'
import profile_img from '../../assets/image.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Subhransu</span>, Fullstack devloper.
      </h1>
      <p>I am a Full stack Devloper. Eager to learn new technologies.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink
            className="anchor-link-connect"
            offset={50}
            href="#contactme"
          >
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href="/Subhransu_resume.pdf" download="Subhransu_Resume"> My resume</a>
        </div>
      </div>
    </div>
  );
}

export default Hero
