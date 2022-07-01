import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';


const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity]= useState(1)
  const [stock,setStock]= useState(true)


  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id]);

  const { product } = useSelector((state) => state.productReducer);

  const handledecrement= ()=>{
    if (quantity>1){
        setQuantity(quantity-1)
    }else{
        setStock(false)
    }
  }

  const handleincrement =()=>{
    if (quantity<product.stock){
        setQuantity(quantity+1)
    }
    else{
        setStock(false)
    }
  }

  return (
    <div>
      <div className="product-details">
        <img src="#" alt={product.name} />
      </div>
      <div className="product-details">
     
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div><AiOutlineMinus onClick={handledecrement}/><strong>{quantity}</strong><AiOutlinePlus onClick={handleincrement}/></div>
        <button>{stock?"ADD to card":"out of stock"}</button>
      </div>
    </div>
  );
};

export default Details;
