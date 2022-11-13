import { useContext, useState } from 'react';

import { themeContext } from '../../context/themeContext';
import { langcontext } from "../../context/langContext";

import iceCream from '../../img/ice-cream.jpg';

function Registrarse(){

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

    return(<>
            <div className="container vh-100">
                <div className="row d-flex justify-content-center align-items-center mt-5">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black rounded-5">
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">{items.registrarse}</p>
                                        <form action="#" className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" for="form3Example1c">{items.nombreApellido}</label>
                                                    <input type="text" id="form3Example1c" className="form-control"/>
                                                </div>
                                            </div>
                            
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" for="form3Example3c">{items.correo}</label>
                                                    <input type="email" id="form3Example3c" className="form-control"/>
                                                </div>
                                            </div>
                            
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" for="form3Example4c">{items.contrasenia}</label>
                                                    <input type="password" id="form3Example4c" className="form-control" />
                                                </div>
                                            </div>
                            
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" for="form3Example4cd">{items.repetirContrasenia}</label>
                                                    <input type="password" id="form3Example4cd" className="form-control" />
                                                </div>
                                            </div>
                            
                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                <label className="form-check-label" for="form2Example3">{items.estoyDeAcuerdo} <a href="terminos.html" target="_blank">{items.termino}</a></label>
                                            </div>
                            
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg">{items.registrarse}</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src={iceCream} className="img-fluid h-100" style={{objectFit:"cover"}} alt="Sample image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default Registrarse;