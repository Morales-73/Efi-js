import React, {useContext} from 'react';
import {themeContext} from '../../context/themeContext';
import {langcontext} from "../../context/langContext";

export default function Postres() {

  const {theme} = useContext(themeContext)
  const {idioma} = useContext(langcontext)

  const {postres, categorias} = idioma

  return (
    <>
      <h1 className={`text-center mt-5 text-${theme.color}`}>{categorias[1].titulo}</h1>
      
        <div className="container mb-5 p-5">
        <div className="d-flex justify-content-evenly align-items-center flex-wrap border rounded-5 p-4">
          {postres.map(p =>
            <div key={p.id}>
              <img className="rounded-4" src={p.img} style={{width:"300px", height:"250px"}} alt="img" />
              <h4 className={`text-center text-${theme.color}`}>{p.name}</h4>
            </div>
          )}
        </div>
        </div>
    </>
  )
}