
import './App.css';
import Minav from './componentes/Nav';
import {Routes, Route, BrowserRouter, Switch} from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Productos from './paginas/Productos';
import Sucursales from './paginas/Sucursales';
import Promociones from './paginas/Promociones';
import Alimentos from './paginas/Alimentos';
import Electrodomesticos from './paginas/Electrodomesticos';
import Bebidas from './paginas/Bebidas';
import Ropa from './paginas/Ropa';

function App() {
  return (
    <div className="App">  
       
      <BrowserRouter>
        <Minav/>
        <Routes>
          <Route path='/inicio' element={<Inicio/>}></Route>
          <Route path='/productos' element={<Productos/>}></Route>
          <Route path='/alimentos' element={<Alimentos/>}></Route>
          <Route path='/bebidas' element={<Bebidas/>}></Route>
          <Route path='/electrodomesticos' element={<Electrodomesticos/>}></Route>
          <Route path='/ropa' element={<Ropa/>}></Route>
          <Route path='/promociones' element={<Promociones/>}></Route>
          <Route path='/sucursales' element={<Sucursales/>}></Route>          
        </Routes>
      </BrowserRouter>
       
      
      
    </div>
  );
}

export default App;
