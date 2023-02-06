import './App.css';
//import A20 from './pages/A20';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
//import Payment from './pages/Payment';
import PaymentResult from './pages/PaymentResult';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(state => state.user.currentUser)
  console.log(user)
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<PaymentResult />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" replace /> : <Register />} />
      </Routes>
    </Router>
    
  );
}

export default App;
