import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import CartModel from "../CartSidebar/CartSidebar";
import "../../dist/Navbar.css";

const Nav = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const { totalqty } = useSelector((state) => state.cartReducer);

  const handleClick = () => {
    setModalOpen(true);
  };

  const handleproduct = (e) => {
    if (e.target.value === "all") {
      dispatch({ type: "UPDATE_PRODUCT" });
    } else {
      dispatch({ type: "CHECK_PRODUCT", payload: e.target.value });
    }
  };

  return (
    <div>
      <CartModel modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className="nav">
        <div>
          <Link to="/">
            <h2 onClick={() => dispatch({ type: "UPDATE_PRODUCT" })}>
              {" "}
              Electronic Shop
            </h2>
          </Link>
        </div>
        <div>
          <AiOutlineShoppingCart className="cartlogo" onClick={handleClick} />
          <strong>{totalqty}</strong>
        </div>
        <div>
          <Link to="/checkout">Checkout</Link>
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
      </div>
    </div>
  );
};

export default Nav;
