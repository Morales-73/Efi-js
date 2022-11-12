import React, {useContext} from 'react'
import anana from '../../img/sabores/anana.png'
import flanDulceDeLeche from '../../img/sabores/flan_dulce_leche.png'
import ChocolateAlmendras from '../../img/sabores/chocolate_almendras.png'
import naranjaMango from '../../img/sabores/naranja_mango.png'

import { themeContext } from '../../context/themeContext'

export default function Cards() {

    const {theme} = useContext(themeContext)

  return (
    <>
          <div className="container mt-5 shadow p-4">
              <h1 className="text-center m-5 border-bottom border-2 border-dark p-2">Nuevos sabores</h1>
              <div className="row row-cols-1 row-cols-md-2 g-4">
                  <div className="col">
                      <div className="card border-0">
                          <img src={anana} className="card-img-top rounded-circle m-auto shadow" style={{height: "250px", width: "250px"}} alt="..."/>
                              <div className="card-body">
                                  <h5 className="card-title text-center">Ananá</h5>
                              </div>
                      </div>
                  </div>

                  <div className="col">
                      <div className="card border-0">
                          <img src={flanDulceDeLeche} className="card-img-top rounded-circle m-auto shadow" style={{height: "250px", width: "250px"}} alt="..."/>
                              <div className="card-body">
                                  <h5 className="card-title text-center">Flan de dulce de leche</h5>
                              </div>
                      </div>
                  </div>

                  <div className="col">
                      <div className="card border-0">
                          <img src={ChocolateAlmendras} className="card-img-top rounded-circle m-auto shadow" style={{height: "250px", width: "250px"}} alt="..."/>
                              <div className="card-body">
                                  <h5 className="card-title text-center">Chocolate con almendras</h5>
                              </div>
                      </div>
                  </div>

                  <div className="col">
                      <div className="card border-0">
                          <img src={naranjaMango} className="card-img-top rounded-circle m-auto shadow" style={{height: "250px", width: "250px"}} alt="..."/>
                              <div className="card-body">
                                  <h5 className="card-title text-center" >Naranja Mango</h5>
                              </div>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}
