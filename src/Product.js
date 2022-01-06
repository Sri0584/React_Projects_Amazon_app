import React, { useContext } from "react";
import { StateContext } from "./StateProvider";
import "./product.css";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useContext(StateContext);

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product 1" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
