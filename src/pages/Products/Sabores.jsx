import React from 'react'

// Imagenes
import anana from '../../img/sabores/anana.png'
import chocolateBlanco from '../../img/sabores/choco_blanco.png'
import chocolate from '../../img/sabores/chocolate.png'
import chocolateAlmendras from '../../img/sabores/chocolate_almendras.png'
import dulceDeLeche from '../../img/sabores/ddl.png'
import durazno from '../../img/sabores/durazno.png'
import FlanDulceDeLeche from '../../img/sabores/flan_dulce_leche.png'
import granizado from '../../img/sabores/granizado.png'
import limon from '../../img/sabores/limon.png'
import naranjaMango from '../../img/sabores/naranja_mango.png'
import vainilla from '../../img/sabores/vainilla.png'
import mentaGranizada from '../../img/sabores/menta-granizada.jpg'


export default function Sabores() {
  return (
    <>
        <h1 className="text-center mt-5 mb-5">Sabores</h1>
        
        <div className="container">
          <hr className="mb-5" />

          <div className="d-flex justify-content-center align-items-center flex-wrap gap-2 border rounded-5 p-4">

            <div>
              <img className="rounded-4" src={anana} style={{width:"400px", height:"195px"}} style={{width:"400px", height:"195px"}} alt="img" />
              <h4 className="text-center">Ananá</h4>
            </div>

            <div>
              <img src={chocolateBlanco} style={{width:"400px", height:"195px"}} alt="img" />
              <h4></h4>
            </div>

            <div>
              <img src={chocolate} style={{width:"400px", height:"195px"}} alt="img" />
              <h4></h4>
            </div>
            <div>
              <img src={chocolateAlmendras} style={{width:"400px", height:"195px"}} alt="img" />
              <h4></h4>
            </div>
            <div>
              <img src={dulceDeLeche} style={{width:"400px", height:"195px"}} alt="img" />
              <h4></h4>
            </div>
            <div>
              <img src={durazno} style={{width:"400px", height:"195px"}} alt="img" />
              <h4></h4>
            </div>
            <div>
              <img src={FlanDulceDeLeche} style={{width:"400px", height:"195px"}} alt="img"/>
              <h4></h4>
            </div>
            <div>
              <img src={granizado} style={{width:"400px", height:"195px"}} alt="img" />
              <h4></h4>
            </div>
            <div>
              <img src={limon} style={{width:"400px", height:"195px"}} alt="img" />
              <h4></h4>
            </div>

            <div>
              <img src={naranjaMango} style={{width:"400px", height:"195px"}} alt="img" />
              <h4></h4>
            </div>

            <div>
              <img src={vainilla} style={{width:"400px", height:"195px"}} alt="img" />
              <h4></h4>
            </div>

            <div>
              <img src={mentaGranizada} style={{width:"400px", height:"195px"}} alt="img" />
              <h4></h4>
            </div>
          </div>


        </div>
    </>
  )
}
