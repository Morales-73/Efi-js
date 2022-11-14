import React, {useContext} from 'react';
import {themeContext} from '../../context/themeContext';
import {langcontext} from "../../context/langContext";

export default function Bombones() {

  const {theme} = useContext(themeContext)
  const {idioma} = useContext(langcontext)

  const {bombones, categorias} = idioma


  return (
    <>
      <h1 className={`text-center mt-5 text-${theme.color}`}>{categorias[3].titulo}</h1>
      
        <div className="container mb-5 p-5">
        {/* <hr className="mb-5" /> */}
        <div className="d-flex justify-content-evenly align-items-center flex-wrap border rounded-5 p-4">
          {bombones.map(b =>
            <div key={b.id}>
              <img className="rounded-4 img-fluid" src={b.img} style={{width:"300px", height:"250px"}} alt="img" />
              <h4 className={`text-center text-${theme.color}`}>{b.name}</h4>
            </div>
          )}
        </div>
        </div>
    </>
  )
}