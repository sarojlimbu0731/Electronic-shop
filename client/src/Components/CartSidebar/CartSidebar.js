import { Drawer } from "@mantine/core";
import { AiOutlineMinus, AiOutlinePlus, AiTwotoneDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../../dist/CartStyle.css";

function CartModel({ modalOpen, setModalOpen }) {
  const dispatch = useDispatch();

  const { products, totalqty, totalprice } = useSelector(
    (state) => state.cartReducer
  );
  console.log(products);

  return (
    <>
      <Drawer
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        size="50%"
        position="right"
      >
        <div className="cart-box">
          <div>
            <h3>Your Cart</h3>
          </div>
          <div>
            {products.length > 0 ? (
              <>
                {products.map((product) => (
                  <div className="cart-row">
                    <div>
                      <img
                        src={`https://electronic-ecommerce.herokuapp.com/${product.image}`}
                        alt={product.name}
                      />
                    </div>
                    <div>
                      <strong>{product.name}</strong>
                    </div>
                    <div>
                      <span>
                        <strong>Rs.</strong>
                        {product.quantity * product.price}
                      </span>
                    </div>
                    <div>
                      <AiOutlineMinus
                        className="minus"
                        onClick={() =>
                          dispatch({ type: "DEC", payload: product.id })
                        }
                      />
                      <div>
                        <strong>{product.quantity}</strong>
                      </div>
                      <AiOutlinePlus
                        className="plus"
                        onClick={() => {
                          dispatch({ type: "INC", payload: product.id });
                        }}
                      />
                    </div>
                    <div>
                      <AiTwotoneDelete
                        className="delete"
                        onClick={() =>{
                          dispatch({ type: "REMOVE_PRODUCT", payload: product.id })
                          dispatch({ type: "REMOVE", payload: product.id })
                        }
                        }
                      />
                    </div>
                    <div>
                      {product.stock === 0 ? (
                        <span style={{ color: "red", fontSize: "16px" }}>
                          Out of stock
                        </span>
                      ) : (
                        <span style={{ fontSize: "16px" }}>
                          Stock: {product.stock}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                <div className="checkout">
                  <div>
                    <span>Total Price</span>
                    <span>{totalprice}</span>
                  </div>
                  <div>
                    <span>Total quantities</span>
                    <span>{totalqty}</span>
                  </div>
                  <Link to="/checkout">
                    {totalqty === 0 ? (
                      <button className="button-dis" disabled>
                        No checkout
                      </button>
                    ) : (
                      <button className="button">checkout</button>
                    )}
                  </Link>
                </div>
              </>
            ) : (
              "Your cart is empty"
            )}
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default CartModel;
