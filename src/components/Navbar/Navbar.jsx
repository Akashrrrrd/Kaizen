import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import image from "./../../assets/image.png"; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-image-container">
        <img src={image} alt="Navbar" className="navbar-image" />
      </div>
      <div className="nav-links-container">
        <Link to="/" className="nav-link">
          HOME
        </Link>
        <Link to="/about" className="nav-link">
          ABOUT US
        </Link>
        <Link to="/service" className="nav-link">
          SERVICES
        </Link>
        <Link to="/social" className="nav-link">
          SOCIALS
        </Link>
        <Link to="/contact" className="nav-link">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
