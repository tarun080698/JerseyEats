import React from "react";
import "./styles.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.JElogo} className="logo" alt="JE" />
      {/* <img src={assets.logo} className="logo" alt="JE" /> */}
      <ul className="navbar-menu">
        <li>home</li>
        <li>menu</li>
        <li>mobile-app</li>
        <li>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search items" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="cart" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
