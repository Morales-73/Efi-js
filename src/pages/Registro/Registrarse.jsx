import {useContext} from 'react';

import {langcontext} from "../../context/langContext";

import iceCream from '../../img/iceCream.jpg';
import Form from './Form';

function Registrarse(){

    const {idioma} = useContext(langcontext)

    const {paginas} = idioma

    return(<>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-12 col-xl-11 mb-5">
                        <div className="card border-0 mt-4">
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center border rounded-5 p-4">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">{paginas[2].registrarse}</p>
                                        <Form/>
                                    </div>

                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src={iceCream} className="img-fluid h-100 rounded-5" style={{objectFit:"cover"}} alt="Sample image" />
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