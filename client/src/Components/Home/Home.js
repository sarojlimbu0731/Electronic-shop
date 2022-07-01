import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom"


const Home = () => {
  const {products}= useSelector(state=>state.productReducer)

  return (
    <div className='home'>
      {products.map(product=>(
        <div className='product-item' key={product.id}>
          <Link to={`/details/${product.id}`} ><img src="#" alt={product.name} /></Link>
          <div>{product.name}</div>
          <div>{product.price}</div>
        </div>
      ))}
    </div>
  )
}

export default Home;