import React, { useContext } from "react";
import { StateContext } from "../StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useContext(StateContext);

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img
        src={image}
        alt="checkedout Product"
        className="checkoutProduct__image"
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {/* {!hideButton && ( */}
        <button onClick={removeFromBasket}>Remove From Basket</button>
        {/* )} */}
      </div>
    </div>
  );
}

export default CheckoutProduct;
