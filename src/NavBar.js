import React, { useContext } from "react";
import "./navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { StateContext } from "./StateProvider";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";

const NavBar = () => {
  //getting basket value from contextAPI
  const [{ basket, user }, dispatch] = useContext(StateContext);
  const handleAuthentication = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          alert("Logged out Successfully!");
          dispatch({
            type: "SET_USER",
            user: null,
          });
          dispatch({
            type: "EMPTY_BASKET",
            basket: [],
          });
        })
        .catch((error) => {
          alert(error);
        });
    }
  };
  return (
    <div className="navbar">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="brand-logo"
        />
      </Link>

      <div className="search">
        <select name="All" id="all">
          <option value="all">All</option>
          <option value="alldepartments">All Departments</option>
          <option value="alexa">Alexa</option>
          <option value="furniture">Furniture</option>
          <option value="kids">Kids</option>
        </select>
        <input type="text" className="inputbox" />
        <SearchIcon className="searchicon" />
      </div>

      <Link to={!user && "/login"}>
        <div className="navbar__options" onClick={handleAuthentication}>
          <span>Hello,{!user ? "Guest" : user.email}</span>
          <span>{user ? "Sign Out" : "Sign In"}</span>
        </div>
      </Link>

      <div className="navbar__options">
        <span>Returns</span>
        <span>& Orders</span>
      </div>
      <div className="navbar__options">
        <span>Your</span>
        <span>Prime</span>
      </div>
      <Link to="/checkout">
        <div className="navbar__options">
          <ShoppingBasketIcon className="basket-icon" />
          <span id="items"> {basket.length}</span>
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
