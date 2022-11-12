import React from 'react';

// Imagenes
import anana from '../../img/sabores/anana.png';
import chocolateBlanco from '../../img/sabores/choco_blanco.png';
import chocolate from '../../img/sabores/chocolate.png';
import chocolateAlmendras from '../../img/sabores/chocolate_almendras.png';
import dulceDeLeche from '../../img/sabores/ddl.png';
import durazno from '../../img/sabores/durazno.png';
import flanDulceDeLeche from '../../img/sabores/flan_dulce_leche.png';
import granizado from '../../img/sabores/granizado.png';
import limon from '../../img/sabores/limon.png';
import naranjaMango from '../../img/sabores/naranja_mango.png';
import vainilla from '../../img/sabores/vainilla.png';
import mentaGranizada from '../../img/sabores/menta-granizada.jpg';


export default function Sabores() {
  const detSabores = [
    {id: 1, name: 'Anana', imgProd: anana},
    {id: 2, name: 'Chocolate Blanco', imgProd: chocolateBlanco},
    {id: 3, name: 'Chocolate', imgProd: chocolate},
    {id: 4, name: 'Chocolate con Almendras', imgProd: chocolateAlmendras},
    {id: 5, name: 'Dulce de Leche', imgProd: dulceDeLeche},
    {id: 6, name: 'Durazno', imgProd: durazno},
    {id: 7, name: 'Flan con Dulce de Leche', imgProd: flanDulceDeLeche},
    {id: 8, name: 'Granizado', imgProd: granizado},
    {id: 9, name: 'Limón', imgProd: limon},
    {id: 10, name: 'Naranja Mango', imgProd: naranjaMango},
    {id: 11, name: 'Vainilla', imgProd: vainilla},
    {id: 12, name: 'Menta Granizada', imgProd: mentaGranizada}
  ]

  return (
    <>
      <h1 className="text-center mt-5 mb-5">Sabores</h1>
      
        <div className="container">
        {/* <hr className="mb-5" /> */}
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-2 border rounded-5 p-4">
          {detSabores.map(s =>
            <div>
              <img className="rounded-4" src={s.imgProd} style={{width:"400px", height:"195px"}} alt="img" />
              <h4 className="text-center">{s.name}</h4>
            </div>
          )}
        </div>
        </div>
    </>
  )
}
