import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Nav from './Components/Navbar/Nav';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Details from './Components/ProductDetails/Details';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from "axios";

function App() {
  const dispatch = useDispatch()


  useEffect(() => {
    axios
    .get("https://electronic-ecommerce.herokuapp.com/api/v1/product")
    .then((res)=>dispatch({type:"SET_PRODUCT",payload:res.data.data.product}))
    .catch((err) => console.log(err));

  },[]);
 
        // fetch("https://electronic-ecommerce.herokuapp.com/api/v1/product").then(res=>setData(res.data.product))

        // products.map(item=>{
        //   let price= item.price;
        //   price= price.slice(1);
        //   price= parseInt(price)*126;
        //   item.price=price
        //   return item
        // })
      



 
  return (
    <BrowserRouter>
       <Nav />
          <Routes>
        
          <Route path='/' exact element={<Home/>} />
          <Route path="/cart" exact element={<Cart/>} /> 
          <Route path="/details/:id" exact element={<Details/>} />
          </Routes>
    </BrowserRouter>


  );
}

export default App;
