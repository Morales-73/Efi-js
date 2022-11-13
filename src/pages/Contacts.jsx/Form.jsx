import React, {useContext, useState} from 'react'
import { themeContext } from '../../context/themeContext'
import { langcontext } from "../../context/langContext";

export default function Form() {

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




  return (
    <>
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className={`form-label text-${theme.color}`}>{items.nombre}</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className={`form-label text-${theme.color}`}>{items.email}</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${theme.color}`}>{items.mensaje}</label>
                    <textarea className="form-control" style={{resize: "none"}} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-success" type="button">{items.enviar}</button>
                </div>
            </form>
        </div>
    </>
  )
}
