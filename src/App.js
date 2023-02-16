

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Paginas/Home';
import Menu from './Components/Menu';
import Clientes from './Paginas/Clientes';
import Veiculos from './Paginas/Veiculos';
import Estacionamento from './Paginas/Estacionamento';

function App() {
  return (
  <BrowserRouter>
  

  <Menu/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/estacionamento" element={<Estacionamento />} />
    <Route path="/clientes" element={<Clientes />} />
    <Route path="/veiculos" element={<Veiculos />} />

  </Routes>
  
  </BrowserRouter>
  );
}

export default App;
