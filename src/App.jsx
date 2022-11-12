import {Routes, Route} from 'react-router-dom'

//Rutas
import Contacts from './pages/Contacts.jsx/Contacts';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Soft404 from './pages/Soft404/Soft404';
import Registrarse from './pages/Registro/Registrarse';
import Layout from './pages/Layout/Layout';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/productos' element={<Products />}></Route>
            <Route path='/contacto' element={<Contacts />}></Route>
            <Route path='/registrarse' element={<Registrarse />}></Route>
            {/* <Route path='/productos/:nombre' element={<Products/>} /> */}
            {/* <Route path={{ pathname: "/detailsproduct/:id" }}><DetailsProduct /></Route> */}
            <Route path='*' element={<Soft404 />} />
          </Route>
        </Routes>
    </>

  );
}

export default App;
