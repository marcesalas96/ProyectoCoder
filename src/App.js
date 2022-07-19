import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import { Checkout } from './components/Checkout/Checkout'
import { RegisterScreen } from './components/RegisterScreen/RegisterScreen'
import { LoginScreen } from './components/LoginScreen/LoginScreen'
import { AuthProvider } from './context/AuthContext';
import { Footer } from './components/Footer/Footer';






function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoria' element={<ItemListContainer />} />
            <Route path='/productos/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/registro' element={<RegisterScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
