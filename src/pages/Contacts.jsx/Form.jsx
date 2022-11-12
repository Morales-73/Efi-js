import React, {useContext} from 'react'
import { themeContext } from '../../context/themeContext'

export default function Form() {

    const {theme} = useContext(themeContext)

  return (
    <>
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className={`form-label text-${theme.color}`}>Nombre</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className={`form-label text-${theme.color}`}>Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${theme.color}`}>Mensaje</label>
                    <textarea className="form-control" style={{resize: "none"}} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-success" type="button">Enviar</button>
                </div>
            </form>
        </div>
    </>
  )
}
