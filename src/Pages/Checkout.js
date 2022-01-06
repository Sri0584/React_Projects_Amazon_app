import React, { useContext } from "react";
import { StateContext } from "../StateProvider";
import SubTotal from "../SubTotal";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useContext(StateContext);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="logo"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item, index) => {
            const { id, title, image, price, rating } = item;
            return (
              <CheckoutProduct
                key={index}
                id={id}
                title={title}
                image={image}
                price={price}
                rating={rating}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
