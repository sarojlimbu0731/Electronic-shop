import { Drawer } from "@mantine/core";
import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiTwotoneDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

function CartModel({ modalOpen, setModalOpen }) {
    const dispatch = useDispatch();
    const { products,totalqty,totalprice } = useSelector((state) => state.cartReducer);
    console.log(products)
 
  return (
    <>
      <Drawer
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        size="50%"
        position="right"
      ><div className="cart-box">
      <div className="container">
        <h3>Your Cart</h3>
        {products.length > 0 ? (
          <>
            {products.map((product) => (
              <div className="cart-row">
                <div className="cart-col1">
                  <img src={`https://electronic-ecommerce.herokuapp.com/${product.image}`} alt={product.name} />
                </div>
                <div className="cart-col2">
                  <span>{product.name}</span>
                  <span><strong>Quantity:{" "}</strong>{product.quantity}</span>
                  <span><strong>Price:{" "}</strong>{product.quantity*product.price}</span>
                </div>
                <div className="cart-col3">
                  
                    <AiOutlineMinus className="minus" onClick={()=>dispatch({type:"DEC",payload:product.id})}/>
                    <span className="value">{product.quantity}</span>
                    <AiOutlinePlus className="plus" onClick={()=>dispatch({type:"INC",payload:product.id})} />
                  
                </div>
                <div>
                  <AiTwotoneDelete  className="delete" onClick={()=> dispatch({type:"REMOVE",payload:product.id})}/>
                </div>
    
              </div>

            ))}
              <div className="checkout">
                    <span>Total price:-{totalprice}</span>
                    <span>Total quantity:-{totalqty}</span>
                    <button className="button">checkout</button>
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
