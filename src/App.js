import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';




function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoria' element={<ItemListContainer />} />
          <Route path='/productos/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
