import React from "react";
import "./exploremenu.styles.css";
import { menu_list } from "assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  const handleCategory = (item) => {
    setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name));
  };
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Dive into our menu</h1>
      <p className="explore-menu-text">
        Explore our exquisite menu, curated with the finest ingredients and
        gourmet flair. We're dedicated to enhancing your dining adventure,
        serving up one sumptuous dish at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className={`explore-menu-list-item ${
                category === item.menu_name
                  ? "explore-menu-list-item__active"
                  : ""
              }`}
              onClick={() => handleCategory(item)}
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className={
                  category === item.menu_name
                    ? "explore-menu-list-item__active"
                    : ""
                }
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
