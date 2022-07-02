import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import CartModel from '../CartSidebar/CartSidebar';

const Nav = () => {
    const [modalOpen,setModalOpen]= useState(false)

    const {totalqty}=useSelector(state=> state.cartReducer)


  const handleClick=()=>{
      setModalOpen(true)
  };

  return (  
    <div className="nav">
            <CartModel  modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <div className='container'>
            <div className='nav_container'>
                <div className='nav_left'>
                <Link to ="/"> <h2>Electronic Shop</h2></Link>
                </div>
                <div className='nav-right'>
                  <span className='shopping-cart'><strong>Cart</strong><AiOutlineShoppingCart  onClick={handleClick} /><strong>{totalqty}</strong></span>  
                </div>
                <div>
                    <Link to ="/checkout">Checkout</Link>
                </div>
            </div>
        </div>
        
    </div>

  )
}

export default Nav;