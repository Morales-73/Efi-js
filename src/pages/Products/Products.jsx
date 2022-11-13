import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import sabores from '../../img/sabores/helado_sabores.jpg';
import postres from '../../img/postres/postre.jpg';
import palitos from '../../img/palitos/palito_helado.jpg';
import bombones from '../../img/bombones/bombones.jpg';
import { themeContext } from '../../context/themeContext';
// import { langcontext } from "../../context/langContext";

export default function Catalogue() {

    const {theme} = useContext(themeContext)

    // const {idioma, changeLeng} = useContext(langcontext)
    // const {items} = idioma
  
    // const [value,setValue] = useState('es')
    // const [valueSwitch,setValueSwitch] = useState(true)
  
    // const handleValue = (e) => {
    //     const valueSelect = e.target.value
    //     console.log(valueSelect)
    //     changeLeng(valueSelect)
    //   }

    const productos = [
        {id: 1, name:'sabores', titulo: 'Sabores' , imgProd: sabores},
        {id: 2, name:'postres', titulo: 'Postres' , imgProd: postres},
        {id: 3, name:'palitos', titulo: 'Palitos' , imgProd: palitos},
        {id: 4, name:'bombones', titulo: 'Bombones' , imgProd: bombones}
    ]

  return (
    <>
        <h1 className={`text-center mt-5 mb-5" text-${theme.color}`}>Productos</h1>
          <div className="container h-100">
              <div className="border p-4 rounded-2 mt-5 mb-5">
                  
                  <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">
                      {productos.map(p =>
                          <div className="card" style={{ width: "18rem"}} key={p.id}>
                              <img src={p.imgProd} className="card-img-top" alt="..." style={{height: '186px'}} />
                              <div className={`card-body bg-${theme.theme}`}>
                                  <h5 className={`card-title text-${theme.color}`}>{p.titulo}</h5>
                                  <p className={`card-text text-${theme.color}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  {/* <a href="#" className="btn btn-primary" >Go somewhere</a> */}
                                  <Link to={`/productos/${p.name}`} > Ver mas</Link>
                              </div>
                          </div>
                      )}
                  </div>
              </div>
          </div>
    </>
  )
}
