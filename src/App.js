import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import {Header} from './components/Header/Header'
import {Hero} from './components/Hero/Hero'
import {CartWidget} from './components/CartWidget/CartWidget'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {ItemListCards} from './components/ItemListCards/ItemListCards'


function App() {
  return (
    <div>
      <Header>
        <CartWidget/>
      </Header>
      <Hero/>
      <ItemListContainer>
        <ItemListCards imagen={"https://picsum.photos/250/200"} titulo={"Producto"} descripcion="Descripción futura del producto" precio={"$500"}/>
        <ItemListCards imagen={"https://picsum.photos/250/200"} titulo={"Producto"} descripcion="Descripción futura del producto" precio={"$500"}/>
        <ItemListCards imagen={"https://picsum.photos/250/200"} titulo={"Producto"} descripcion="Descripción futura del producto" precio={"$500"}/>
        <ItemListCards imagen={"https://picsum.photos/250/200"} titulo={"Producto"} descripcion="Descripción futura del producto" precio={"$500"}/>
        <ItemListCards imagen={"https://picsum.photos/250/200"} titulo={"Producto"} descripcion="Descripción futura del producto" precio={"$500"}/>
        <ItemListCards imagen={"https://picsum.photos/250/200"} titulo={"Producto"} descripcion="Descripción futura del producto" precio={"$500"}/>
      </ItemListContainer>
    </div>
  );
}

export default App;
