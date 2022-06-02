import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import {Header} from './components/Header/Header'
import {Hero} from './components/Hero/Hero'
import {CartWidget} from './components/CartWidget/CartWidget'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'



function App() {
  return (
    <div>
      <Header>
        <CartWidget/>
      </Header>
      <Hero/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
