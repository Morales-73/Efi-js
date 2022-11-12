import React from 'react';
import sabores from '../../img/sabores/helado_sabores.jpg';
import postres from '../../img/postres/postre.jpg';
import palitos from '../../img/palitos/palito_helado.jpg';
import bombones from '../../img/bombones/bombones.jpg';


export default function Cards() {

    const productos = [sabores,postres,palitos,bombones]

  return (
    <>
        <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap p-4 mb-5">
            {productos.map(p =>
                <div className="card" style={{ width: "18rem"}}>
                    <img src={p} className="card-img-top" alt="..." style={{height: '186px'}} />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            )}
        </div>
    </>
  )
}
