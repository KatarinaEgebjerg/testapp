import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/shop';
import { ShopContextProvider } from './context/shopcontext';

function App() {
  return (
    <ShopContextProvider>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
    </ShopContextProvider>
  );
}

export default App;


