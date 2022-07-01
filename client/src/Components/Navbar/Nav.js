import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Nav = () => {
  const {totalqty}=useSelector(state=> state.cartReducer)
  return (  
    <div className="nav">
        <div className='container'>
            <div className='nav_container'>
                <div className='nav_left'>
                <Link to ="/"> <h2>Electronic Shop</h2></Link>

                   
                </div>
                <div className='nav-right'>
                    <Link to ="/cart"><AiOutlineShoppingCart className='cart'/><strong>{totalqty}</strong></Link>
                </div>
            </div>
        </div>
        
    </div>

  )
}

export default Nav;