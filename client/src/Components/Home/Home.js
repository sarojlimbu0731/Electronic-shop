import React, { useEffect, useState } from 'react';
import {useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom";
import CartModel from '../CartSidebar/CartSidebar';




const Home = () => {

  const [modalOpen,setModalOpen]= useState(false)
  const [quantity, setQuantity]= useState(1)
  const dispatch= useDispatch()
  const {products}= useSelector(state=>state.productReducer)
  const { product} = useSelector((state) => state.productReducer);
  


  const handleClick=(e)=>{
    dispatch({type:"PRODUCT",payload:e.target.name})
   
      dispatch({type: "ADD_TO_CART",payload: { product,quantity}})
      setModalOpen(true)
  

  };

  



  return (
    
    products &&
    <div className='home'>
    <CartModel  modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {products.map(product=>
      (  
        <div className='product-item' key={product.id}>
          <img src={`https://electronic-ecommerce.herokuapp.com/${product.image}`} alt={product.name} style={{maxHeight:"14rem",maxWidth:"14rem"}}/>
          <div><strong>{product.name}</strong></div>
          <div><strong>Rs.</strong>{product.price}</div>
          <div><strong>{product.category[0]}:{" "}</strong><span>{product.category[1]}</span></div>
          <div><button className='button' name={product.id}  onClick={handleClick}>Add to cart</button></div>
        </div>  
      ))}
    </div>
    
  
  )
}

export default Home;