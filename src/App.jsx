import {Routes, Route} from 'react-router-dom'

//Rutas
import Contacts from './pages/Contacts.jsx/Contacts';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Soft404 from './pages/Soft404/Soft404';
import Registrarse from './pages/Registro/Registrarse';
import Layout from './pages/Layout/Layout';
import Sabores from './pages/Products/Sabores';
import Postres from './pages/Products/Postres';
import Palitos from './pages/Products/Palitos';
import Bombones from './pages/Products/Bombones';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/productos' element={<Products />}></Route>
            <Route path='/contacto' element={<Contacts />}></Route>
            <Route path='/registrarse' element={<Registrarse />}></Route>
            <Route path='*' element={<Soft404 />} />

            <Route path='/productos/sabores' element={<Sabores />}></Route>
            <Route path='/productos/postres' element={<Postres />}></Route>
            <Route path='/productos/palitos' element={<Palitos />}></Route>
            <Route path='/productos/bombones' element={<Bombones />}></Route>

          </Route>
        </Routes>
    </>

  );
}

export default App;
