import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import CartModel from "../CartSidebar/CartSidebar";

// import { Button, Menu } from '@mantine/core';

const Nav = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const { totalqty } = useSelector((state) => state.cartReducer);
  const [chooseproduct, setproduct] = useState("");

  const handleClick = () => {
    setModalOpen(true);
  };

  const handleproduct = (e) => {
    if (e.target.value === "all")
    {
      dispatch({type:"UPDATE_PRODUCT"})
    }
    else{
      dispatch({ type: "CHECK_PRODUCT", payload: e.target.value });
    }
  
  };


  return (
    <div className="nav">
      <CartModel modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className="container">
        <div className="nav_container">
          <div className="nav_left">
            <Link to="/">
              {" "}
              <h2 onClick={() => dispatch({ type: "UPDATE_PRODUCT" })}>
                Electronic Shop
              </h2>
            </Link>
          </div>
          <div className="nav-right">
            <span className="shopping-cart">
              <strong>Cart</strong>
              <AiOutlineShoppingCart onClick={handleClick} />
              <strong>{totalqty}</strong>
            </span>
          </div>
       
          <div>
            <label for="product">
              <strong>Category</strong>
            </label>

            <select id="product" onChange={handleproduct}>
              <option value="all">All</option>
              <option value="laptop">Laptop</option>
              <option value="mobile">Mobile</option>
              <option value="watch">Watch</option>
              <option value="headseat">Headset</option>
              <option value="keyboard">Keyboard</option>
            </select>
          </div>
          <div>
            <Link to="/checkout">Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

