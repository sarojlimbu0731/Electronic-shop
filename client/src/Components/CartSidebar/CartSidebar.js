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
        size="80%"
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
    
        
      </Drawer> 
    </>
  );
}

export default CartModel;
