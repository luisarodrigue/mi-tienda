import './App.css';
import { MyNav } from './components/MyNav/MyNav';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <CartProvider> 
      <BrowserRouter>
        <div className="App">
          <nav>  
            <MyNav/>
          </nav>

          <main>
            <Switch>
              <Route exact path={['/', '/category/:id']}>
                <ItemListContainer greeting={"Hola"} />
              </Route>
              <Route path="/item/:id">
                <ItemDetailContainer></ItemDetailContainer>
              </Route>
              <Route>
                <Cart/>
              </Route>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

