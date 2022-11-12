import React, {useContext} from 'react';
import { langcontext } from '../../context/langContext';


export default function Cards() {

    const {idioma, changeLeng} = useContext(langcontext)

  return (
    <>
        <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap p-4 mb-5">
                <div className="card" style={{ width: "18rem"}}>
                    <img className="card-img-top" alt="..." style={{height: '186px'}} />
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
        </div>
    </>
  )
}
