import { useContext } from "react";
import { langcontext } from "./context/langContext";
import { themeContext } from "./context/themeContext";


import { Routes, Route } from 'react-router-dom'
import Layout  from './pages/Layout'
import Home  from './pages/Home'
import Contacto  from './pages/Contacto'
import Registrarse from './pages/Registrarse'
import Productos  from './pages/Productos'
import Default  from './pages/Default'



function App() {

  const {idioma, changeLeng} = useContext(langcontext)
  const {theme, changeTheme} = useContext(themeContext)

  return (
    <>

       <Routes>
          <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='contacto' element={<Contacto />}></Route>
          <Route path='registrarse' element={<Registrarse />}></Route>
          <Route path='productos' element={<Productos />}></Route>
          
          </Route>
      </Routes>

        
      <div className={`bg-${theme.theme}`}>
        <h1 className={`text-center text-xl text-${theme.color} my-10`}>{idioma.welcome}</h1>
      </div>
      <div className="mb-5 flex justify-center">
        <button className="ml-5 p-2 px-5 rounded-lg border border-black" onClick={()=>changeLeng('es')}>Es</button>
        <button className="ml-5 p-2 px-5 rounded-lg border border-black" onClick={()=>changeLeng('en')}>En</button>
      </div>
      <div className="flex justify-center">
        <button className="ml-5 p-2 px-10 rounded-lg border border-black bg-white text-black" onClick={()=>changeTheme('white')}>White</button>
        <button className="ml-5 p-2 px-10 rounded-lg bg-zinc-700 text-white" onClick={()=>changeTheme('black')}>Black</button>
      </div>

    </>
  );
}

export default App;
