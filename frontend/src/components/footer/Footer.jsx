import React from "react";
import "./footer.styles.css";
import { assets } from "assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.JElogo} alt="footer-logo" className="logo" />
          <div className="social-icons">
            <img src={assets.facebook_icon} alt="fb" />
            <img src={assets.twitter_icon} alt="X" />
            <img src={assets.linkedin_icon} alt="Li" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1 332-260-2829</li>
            <li>contact@jerseyeats.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 ©️ JerseyEats.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
