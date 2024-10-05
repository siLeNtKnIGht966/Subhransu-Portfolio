import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/photo.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a full-stack developer with over a year of experience. I also
              have a strong interest in open-source contributions.
            </p>
            <p>
              My passion for frontend development extends beyond reading; I
              bring enthusiasm and dedication to each project I work on.
            </p>
          </div>
          <div className="about-skills" style={{ width: "100%" }}>
            <div className="about-skill html-css">
              <p>HTML & CSS</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "55%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
