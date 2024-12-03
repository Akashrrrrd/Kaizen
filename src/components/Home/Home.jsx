import React from "react";
import "./Home.css";
import home_logo from "./../../assets/home_logo.png";

const Home = () => {
  return (
    <div className="hom-home">
      <div className="hom-logo-container">
        <img
          src={home_logo}
          alt="Kaizen Spark Tech Logo"
          className="hom-logo"
        />
      </div>
      <h1 className="hom-welcome-text">
        Welcome to the world of{" "}
        <span className="hom-highlight">Kaizen Spark</span>
      </h1>
      <p className="hom-subtitle">Where tech meets solution</p>
      <div className="hom-scroll-section">
        <p className="hom-scroll-text">SCROLL FOR MORE</p>
        <div className="hom-scroll-arrow">&#x2193;</div>
      </div>
      <div className="hom-social-icons">
        <a href="#linkedin" className="hom-icon">
          LinkedIn
        </a>
        <a href="#instagram" className="hom-icon">
          Instagram
        </a>
        <a href="#x" className="hom-icon">
          X
        </a>
      </div>
    </div>
  );
};

export default Home;
