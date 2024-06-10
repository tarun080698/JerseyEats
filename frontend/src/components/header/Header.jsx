import React from "react";
import "./header.styles.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable collection of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate yoru dining
          experience, one delicious meal at a time.
        </p>
        <button className="view-menu-btn">View Menu</button>
      </div>
    </div>
  );
};

export default Header;
