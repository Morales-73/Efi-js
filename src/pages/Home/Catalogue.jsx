import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import sabores from '../../img/sabores/helado_sabores.jpg';
import postres from '../../img/postres/postre.jpg';
import palitos from '../../img/palitos/palito_helado.jpg';
import bombones from '../../img/bombones/bombones.jpg';
import { themeContext } from '../../context/themeContext';

export default function Catalogue() {

    const {theme} = useContext(themeContext)

    const productos = [sabores,postres,palitos,bombones]

  return (
    <>
        <div className="container h-100">
            <div className="border p-4 rounded-2 mt-5 mb-5">
                <h1 className={`fs-3 text-${theme.color}`}>Nuestros productos</h1>
                <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">
                    {productos.map(p =>
                        <div className="card" style={{ width: "18rem"}}>
                            <img src={p} className="card-img-top" alt="..." style={{height: '186px'}} />
                            <div className={`card-body bg-${theme.theme}`}>
                                <h5 className={`card-title text-${theme.color}`}>Card title</h5>
                                <p className={`card-text text-${theme.color}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <a href="#" className="btn btn-primary" >Go somewhere</a> */}
                                <Link to={"/productos/sabores"} > Ver mas</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </>
  )
}
