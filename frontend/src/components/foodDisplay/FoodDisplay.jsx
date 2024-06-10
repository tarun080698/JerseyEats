import React, { useContext } from "react";
import "./foodDisplay.styles.css";
import { StoreContext } from "context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  console.log({ category });
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return <FoodItem item={item} key={index} />;
          }
          return <></>;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
