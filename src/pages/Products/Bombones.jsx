import React, {useContext, useState} from 'react';
import { themeContext } from '../../context/themeContext';
import { langcontext } from "../../context/langContext";

// Imagenes
import crocante from '../../img/bombones/bombon-crocante.jpg';
import escoces from '../../img/bombones/bombon-escoces.jpg';
import split from '../../img/bombones/bombon-split.jpg';
import suizo from '../../img/bombones/bombon-suizo.jpg';

export default function Bombones() {

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

  const detBombones = [
    {id: 1, name: 'Crocante', imgProd: crocante},
    {id: 2, name: 'Escoces', imgProd: escoces},
    {id: 3, name: 'Split', imgProd: split},
    {id: 4, name: 'Suizo', imgProd: suizo}
  ]

  return (
    <>
      <h1 className={`text-center mt-5 text-${theme.color}`}>{items.bombones}</h1>
      
        <div className="container mb-5 p-5">
        {/* <hr className="mb-5" /> */}
        <div className="d-flex justify-content-evenly align-items-center flex-wrap border rounded-5 p-4">
          {detBombones.map(db =>
            <div>
              <img className="rounded-4" src={db.imgProd} style={{width:"300px", height:"250px"}} alt="img" />
              <h4 className={`text-center text-${theme.color}`}>{db.name}</h4>
            </div>
          )}
        </div>
        </div>
    </>
  )
}