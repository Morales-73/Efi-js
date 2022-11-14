import React, {useContext} from 'react'
import {langcontext} from '../../context/langContext'

export default function Form() {

    const {idioma} = useContext(langcontext)
    const {paginas, nombreApellido, correo, contraseña, repetirContraseña, estoyDeAcuerdo, terminos} = idioma

  return (
    <>
          <form action="#" className="mx-1 mx-md-4">
              <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example1c">{nombreApellido}</label>
                      <input type="text" id="form3Example1c" className="form-control" />
                  </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example3c">{correo}</label>
                      <input type="email" id="form3Example3c" className="form-control" />
                  </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4c">{contraseña}</label>
                      <input type="password" id="form3Example4c" className="form-control" />
                  </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4cd">{repetirContraseña}</label>
                      <input type="password" id="form3Example4cd" className="form-control" />
                  </div>
              </div>

              <div className="form-check d-flex justify-content-center mb-5">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                  <label className="form-check-label" htmlFor="form2Example3">{estoyDeAcuerdo} <a href="terminos.html" target="_blank">{terminos}</a></label>
              </div>

              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button type="submit" className="btn btn-primary btn-lg">{paginas[2].registrarse}</button>
              </div>
          </form>
    </>
  )
}
