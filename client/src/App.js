import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Nav from './Components/Navbar/Nav';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Details from './Components/ProductDetails/Details';

function App() {
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
