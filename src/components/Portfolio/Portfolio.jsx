import React from 'react'
import arrayDestruct from "../../assets/portfolio/arrayDestruct.jpg";
import InstallNode from "../../assets/portfolio/InstallNode.jpg";
import navbar from "../../assets/portfolio/navbar.jpg";
import reactParallax  from "../../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../../assets/portfolio/reactSmooth.jpg";
import usestate from "../../assets/portfolio/usestate.jpg";
import theme_pattern from "../../assets/theme_pattern.svg";
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div id='portfolio' className="portfolio">
      <div className="portfolio-sections">
        <div className="portfolio-names">
          <p>Portfolio</p>
          <img src={theme_pattern} alt="" />
          <p>Check out some of my workright here.</p>
        </div>
        <div className="portfolio-cards">
          <div className="portfolio-card">
            <img src={InstallNode} alt="" />
            <div>
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
          <div className="portfolio-card">
            <img src={arrayDestruct} alt="" />
            <div>
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
          <div className="portfolio-card">
            <img src={navbar} alt="" />
            <div>
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
          <div className="portfolio-card">
            <img src={reactParallax} alt="" />
            <div>
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
          <div className="portfolio-card">
            <img src={reactSmooth} alt="" />
            <div>
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
          <div className="portfolio-card">
            <img src={usestate} alt="" />
            <div>
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio
