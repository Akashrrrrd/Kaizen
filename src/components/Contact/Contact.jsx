import React from "react";
import image from "./../../assets/image.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="con-contact-page">
      <div className="con-contact-left">
        <div className="con-logo-section">
          <img src={image} alt="Company Logo" className="con-logo" />
        </div>
        <h1>CONTACT US</h1>
        <p className="con-contact-tagline">
          Let's talk <br /> <span>To Build Something.</span>
        </p>
        <div className="con-contact-info">
          <p>Want to discuss your idea or project with us:</p>
          <p>
            <strong>Business:</strong>{" "}
            <a href="mailto:kaizensparktech@gmail.com" className="a">
              kaizensparktech@gmail.com
            </a>
          </p>
          <p>
            <strong>Career With Us:</strong>{" "}
            <a href="mailto:associate@kaizensparktech.com" className="a">
              associate@kaizensparktech.com
            </a>
          </p>
          <p>
            <strong>India:</strong>{" "}
            <a href="tel:+919150684544" className="a">
              +91 9150684544
            </a>
          </p>
          <address>
            ILP Block, Chennai Institute Of Technology, Chennai-600069.
          </address>
        </div>
        <button className="con-connect-button">CONNECT</button>
        <div className="con-social-icons">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>
      </div>
      <div className="con-contact-right">
        <form className="con-contact-form">
          <div className="con-form-group">
            <input
              type="text"
              placeholder="First Name"
              className="con-form-input"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="con-form-input"
            />
          </div>
          <div className="con-form-group">
            <input
              type="email"
              placeholder="Email Address"
              className="con-form-input"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="con-form-input"
            />
          </div>
          <select className="con-form-select">
            <option value="" disabled selected>
              Services
            </option>
            <option value="web">Web Development</option>
            <option value="app">App Development</option>
          </select>
          <textarea
            placeholder="Description"
            className="con-form-textarea"
          ></textarea>
          <button type="submit" className="con-submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
