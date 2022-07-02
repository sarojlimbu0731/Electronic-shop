import React, { useState } from 'react';
import {useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom";
import CartModel from '../CartSidebar/CartSidebar';




const Home = () => {

  const [modalOpen,setModalOpen]= useState(false)
  const [quantity, setQuantity]= useState(1)
  const {products}= useSelector(state=>state.productReducer)
  const dispatch= useDispatch()

  const handleClick=(e)=>{
    dispatch({type:"PRODUCT",payload:e.target.value})
    let id=parseInt(e.target.value)
    let product=(products.find(product=>product.id === id))
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
          {/* <Link to={`/details/${product.id}`} ><img src={`https://electronic-ecommerce.herokuapp.com/${product.image}`} alt={product.name} style={{maxHeight:"14rem",maxWidth:"14rem"}}/></Link> */}
       <img src={`https://electronic-ecommerce.herokuapp.com/${product.image}`} alt={product.name} style={{maxHeight:"14rem",maxWidth:"14rem"}}/>

          <div><strong>{product.name}</strong></div>
          <div><strong>Rs.</strong>{product.price}</div>
          <div><strong>Stock:</strong>{" "}{product.stock}</div>
          <div><strong>{product.category[0]}:{" "}</strong><span>{product.category[1]}</span></div>
        {product.stock ===0 ?<button className='button button-out' disabled>Out of Stock</button>:  <div><button className='button' value={product.id}  onClick={handleClick}>Add to cart</button></div>}
        </div>  
      ))}
    </div>
    
  
  )
}

export default Home;