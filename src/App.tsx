import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';

function App() {
  return (
    <>
    <Router>
      <Routes>
      
        <Route path="/" element={<Home />}/>
        <Route path="/product/:categories" element={<ProductList />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/product/:id" element={<Product />}/>
      </Routes>
    </Router>
    
    </>

  );
}

export default App;
