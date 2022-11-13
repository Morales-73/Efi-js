import React, {useContext, useState} from 'react';
import { themeContext } from '../../context/themeContext';
import { langcontext } from "../../context/langContext";

// Imagenes
import bombon from '../../img/palitos/palito-bombon.jpg';
import cAmericano from '../../img/palitos/palitocremoso-americana.jpg';
import cFrutilla from '../../img/palitos/palitocremoso-frutilla.jpg';
import fFrutilla from '../../img/palitos/palitofrutal-frutilla.jpg';
import fNaranja from '../../img/palitos/palitofrutal-naranja.jpg';
import picoDulce from '../../img/palitos/PicoDulce.jpg';

export default function Palitos() {

  const {theme} = useContext(themeContext)

  const {idioma, changeLeng} = useContext(langcontext)
  const {items} = idioma

  const [value,setValue] = useState('es')
  const [valueSwitch,setValueSwitch] = useState(true)

  const handleValue = (e) => {
      const valueSelect = e.target.value
      console.log(valueSelect)
      changeLeng(valueSelect)
    }


  const detPalitos = [
    {id: 1, name: 'Bombón', imgProd: bombon},
    {id: 2, name: 'Cremoso Americano', imgProd: cAmericano},
    {id: 3, name: 'Cremoso Frutilla', imgProd: cFrutilla},
    {id: 4, name: 'Frutal Frutilla', imgProd: fFrutilla},
    {id: 5, name: 'Frutal Naranja', imgProd: fNaranja},
    {id: 6, name: 'Pico Dulce', imgProd: picoDulce}
  ]

  return (
    <>
      <h1 className={`text-center mt-5 text-${theme.color}`}>{items.palitos}</h1>
      
        <div className="container mb-5 p-5">
        {/* <hr className="mb-5" /> */}
        <div className="d-flex justify-content-evenly align-items-center flex-wrap border rounded-5 p-4">
          {detPalitos.map(dpa =>
            <div>
              <img className="rounded-4" src={dpa.imgProd} style={{width:"300px", height:"250px"}} alt="img" />
              <h4 className={`text-center text-${theme.color}`}>{dpa.name}</h4>
            </div>
          )}
        </div>
        </div>
    </>
  )
}
