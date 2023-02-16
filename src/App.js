

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Paginas/Home';
import Menu from './Components/Menu';
import Clientes from './Paginas/Clientes';
import Veiculos from './Paginas/Veiculos';
import Estacionamento from './Paginas/Estacionamento';
import Logon from './Paginas/Logon';

function App() {
  return (
  <BrowserRouter>
  
  <Routes>
     
  <Route path="/" element={ <Logon />} />
  <Route path='/est' element={  <Menu/>}>
    <Route path="/est/home" element={<Home />}  />
    <Route path="/est/estacionamento" element={<Estacionamento />} />
    <Route path="/est/clientes" element={<Clientes />} />
    <Route path="/est/veiculos" element={<Veiculos />} />
    </Route>
  </Routes>
  
  </BrowserRouter>
  );
}

export default App;
