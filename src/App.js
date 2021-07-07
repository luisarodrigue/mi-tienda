import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <nav>  
        <NavBar/>
      </nav>

      <main>

        {/* <ItemListContainer greeting={"Hola"} /> */}
        <ItemDetailContainer></ItemDetailContainer>
        
      </main>
    </div>
  );
}

export default App;

