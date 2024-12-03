// Social.jsx
import React from "react";
import "./Social.css";
import {
  LinkedinIcon,
  TwitterIcon,
  GlobeIcon,
  ArrowRightIcon,
  InstagramIcon,
  CodeIcon,
} from "lucide-react";
import home_logo from "./../../assets/home_logo.png";

const SocialNetwork = () => {
  return (
    <div className="social-container">
      <div className="social-wrapper">
        <div className="social-image-container">
          <div className="image-bg-pulse">
            <div className="image-bg-inner"></div>
            <img
              src={home_logo}
              alt="ProSpark Network"
              className="social-profile-image"
            />
          </div>
        </div>

        <div className="social-content">
          <div className="content-header">
            <h2 className="network-title">ProSpark Network</h2>
            <h3 className="network-subtitle">Connect. Collaborate. Grow.</h3>
          </div>

          <p className="network-description">
            Elevate your professional journey with ProSpark—a cutting-edge
            platform designed to bridge talented freelancers with innovative
            businesses. Our network transcends traditional networking, offering
            dynamic collaboration opportunities across global markets.
          </p>

          <div className="network-features">
            <div className="feature-item">
              <GlobeIcon className="feature-icon" />
              <span>Global Talent Marketplace</span>
            </div>
            <div className="feature-item">
              <ArrowRightIcon className="feature-icon" />
              <span>Seamless Opportunity Discovery</span>
            </div>
          </div>

          <button className="join-network-btn">
            <span>JOIN THE NETWORK</span>
          </button>
        </div>

        <div className="external-social-links">
          <a
            href="https://linkedin.com/company/prospark"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <LinkedinIcon size={24} />
          </a>
          <a
            href="https://x.com/prospark"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <TwitterIcon size={24} />
          </a>
          <a
            href="https://instagram.com/prospark"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <InstagramIcon size={24} />
          </a>
          <a
            href="https://github.com/prospark"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <CodeIcon size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialNetwork;
