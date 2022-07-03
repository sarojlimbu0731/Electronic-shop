import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Nav from './Components/Navbar/Nav';
import Home from './Components/Home/Home';
import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import axios from "axios";
import Checkout from './Components/Checkout/Checkout';

function App() {
  const dispatch = useDispatch()


  useEffect(() => {
    axios
    .get("https://electronic-ecommerce.herokuapp.com/api/v1/product")
    .then((res)=>dispatch({type:"SET_PRODUCT",payload:res.data.data.product}))
    .catch((err) => console.log(err));

  },[]);
 
  return (
    <BrowserRouter>
       <Nav />
          <Routes>
        
          <Route path='/' exact element={<Home/>} />
          <Route path="/checkout" exact element={<Checkout/>} /> 
          </Routes>
    </BrowserRouter>


  );
}

export default App;
