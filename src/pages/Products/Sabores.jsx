import React, {useContext} from 'react';
import {themeContext} from '../../context/themeContext';
import {langcontext} from "../../context/langContext";


export default function Sabores() {

  const {theme} = useContext(themeContext)
  const {idioma} = useContext(langcontext)

  const {sabores, categorias} = idioma

  return (
    <>
        <h1 className={`text-center mt-5 text-${theme.color}`}>{categorias[0].titulo}</h1>
        <div className="container mb-5 p-5">
          <div className="d-flex justify-content-evenly align-items-center flex-wrap border rounded-5 p-4">
            {sabores.map(s =>
              <div key={s.id}>
                <img className="rounded-4" src={s.img} style={{width:"400px", height:"195px"}} alt="img" />
                <h4 className={`text-center text-${theme.color}`}>{s.name}</h4>
              </div>
            )}
          </div>
        </div>
    </>
  )
}
