import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartModel from "../CartSidebar/CartSidebar";
import "../../dist/HomeStyle.css";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  // const [quantity, setQuantity] = useState(1);
  const quantity=1
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch({ type: "PRODUCT", payload: e.target.value });
    let id = parseInt(e.target.value);
    let product = products.find((product) => product.id === id);
    dispatch({ type: "ADD_TO_CART", payload: { product, quantity } });
    dispatch({type:"REMOVE_PRODUCT"})
    setModalOpen(true);
  };

  return (
    products && (
      <div className="home">
        <CartModel modalOpen={modalOpen} setModalOpen={setModalOpen} />
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <div>
              <img
                src={`https://electronic-ecommerce.herokuapp.com/${product.image}`}
                alt={product.name}
                style={{ maxHeight: "14rem", maxWidth: "14rem" }}
              />
            </div>
            <div>
              <div className="productname">
                <strong>{product.name}</strong>
                <span>
                  <strong>Rs.</strong>
                  {product.price}{" "}
                </span>
              </div>

              <div className="productDesc">
                <span>
                  <strong>{product.category[0]}: </strong>
                  <span>{product.category[1]}</span>
                </span>
                <span>
                  <strong>Stock:</strong> {product.stock}
                </span>
              </div>

              <div>
                <strong>CreateDate:</strong> {product.createDate}
              </div>
              {product.stock === 0 ? (
                <button className="button button-out" disabled>
                  Out of Stock
                </button>
              ) : (
                <div>
                  <button
                    className="button"
                    value={product.id}
                    onClick={handleClick}
                  >
                    Add to cart
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default Home;
