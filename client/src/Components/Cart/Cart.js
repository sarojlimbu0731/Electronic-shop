import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus, AiOutlineMinus, AiTwotoneDelete } from "react-icons/ai";

const Cart = () => {
  const dispatch = useDispatch();
  const { products,totalqty,totalprice } = useSelector((state) => state.cartReducer);
  console.log(products);

  return (
    <div className="cart-box">
      <div className="container">
        <h3>Your Cart</h3>
        {products.length > 0 ? (
          <>
            {products.map((product) => (
              <div className="cart-row">
                <div className="cart-col1">
                  <img src="#" alt={product.name} />
                </div>
                <div className="cart-col2">
                  <span>{product.name}</span>
                  <span>{product.totalqty}</span>
                  <span>{product.quantity*product.price}</span>
                </div>
                <div className="cart-col3">
                  <div>
                    <AiOutlineMinus onClick={()=>dispatch({type:"DEC",payload:product.id})}/>
                    <strong>{product.quantity}</strong>
                    <AiOutlinePlus onClick={()=>dispatch({type:"INC",payload:product.id})} />
                  </div>
                </div>
                <div>
                  <AiTwotoneDelete  onClick={()=> dispatch({type:"REMOVE",payload:product.id})}/>
                </div>
    
              </div>
            ))}
                        <div className="checkout">
                    <span>total price:-{totalprice}</span>
                    <span>total quantity:-{totalqty}</span>
                    <button>checkout</button>
                </div>
 
          </>
        ) : (
          "Your cart is empty"
        )}
      </div>
    </div>
  );
};

export default Cart;
