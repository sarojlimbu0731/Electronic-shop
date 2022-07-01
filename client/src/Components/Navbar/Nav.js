import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Nav = () => {
  return (  
    <div className="nav">
        <div className='container'>
            <div className='nav_container'>
                <div className='nav_left'>
                <Link to ="/"> <h2>Electronic Shop</h2></Link>

                   
                </div>
                <div className='nav-right'>
                    <Link to ="/cart"><AiOutlineShoppingCart className='cart'/><strong>4</strong></Link>
                </div>
            </div>
        </div>
        
    </div>

  )
}

export default Nav;