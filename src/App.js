import './App.css';
import { NavBar } from './components/NavBar/NavBar.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {Switch, BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>  
          <NavBar/>
        </nav>

        <main>
          <Switch>
            <Route exact path={['/', '/category/:id']}>
              <ItemListContainer greeting={"Hola"} />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer></ItemDetailContainer>
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

