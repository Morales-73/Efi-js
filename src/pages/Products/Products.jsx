import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {themeContext} from '../../context/themeContext';
import {langcontext} from "../../context/langContext";

export default function Catalogue() {

    const {theme} = useContext(themeContext)
    const {idioma} = useContext(langcontext)

    const {categorias} = idioma

  return (
    <>
        <h1 className={`text-center mt-5 mb-5" text-${theme.color}`}>Productos</h1>
          <div className="container h-100">
              <div className="border p-4 rounded-2 mt-5 mb-5">
                  
                  <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">
                      {categorias.map(p =>
                          <div className="card" style={{ width: "18rem"}} key={p.id}>
                              <img src={p.img} className="card-img-top" alt="..." style={{height: '186px'}} />
                              <div className={`card-body bg-${theme.theme}`}>
                                  <h5 className={`card-title text-${theme.color}`}>{p.titulo}</h5>
                                  <p className={`card-text text-${theme.color}`}>{p.descripcion}</p>
                                  <Link to={`/productos/${p.name}`} >Ver mas</Link>
                              </div>
                          </div>
                      )}
                  </div>
              </div>
          </div>
    </>
  )
}
