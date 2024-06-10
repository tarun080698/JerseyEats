import { assets } from "assets/assets";
import React, { useContext } from "react";
import "./foodDisplay.styles.css";
import { StoreContext } from "context/StoreContext";

const FoodItem = ({ item, index }) => {
  const { _id, name, image, description, price } = item;

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div key={index} className="food-item">
      <div className="food-item-img-container">
        <img src={image} className="food-item-image" alt={name} />
        {!cartItems[_id] ? (
          <img
            onClick={() => addToCart(_id)}
            className="add"
            src={assets.add_icon_white}
            alt={`add ${name} to cart`}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt="remove one quantity"
              onClick={() => removeFromCart(_id)}
            />
            <p>{cartItems[_id]}</p>

            <img
              src={assets.add_icon_green}
              alt="add more quantity"
              onClick={() => addToCart(_id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt={name + " rating"} />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
