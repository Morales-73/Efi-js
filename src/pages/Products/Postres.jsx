import React from 'react';

// Imagenes
import postreAlmendra from '../../img/postres/postres-almendrado.jpg';
import cassata from '../../img/postres/postres-cassata.jpg';
import cheesecake from '../../img/postres/postres-cheesecake.jpg';
import crocantino from '../../img/postres/postres-crocantino.jpg';
import delicia from '../../img/postres/postres-delicia.jpg';
import lemonPie from '../../img/postres/postres-lemonpie.jpg';
import semiFrioChoc from '../../img/postres/postres-semifriochocolate.jpg';
import tiramisu from '../../img/postres/postres-tiramisu.jpg';

export default function Postres() {
  const detPostres = [
    {id: 2, name: 'Almendrado', imgProd: postreAlmendra},
    {id: 3, name: 'Cassata', imgProd: cassata},
    {id: 4, name: 'Cheesecake', imgProd: cheesecake},
    {id: 5, name: 'Crocantino', imgProd: crocantino},
    {id: 6, name: 'Delicia', imgProd: delicia},
    {id: 7, name: 'Lemon Pie', imgProd: lemonPie},
    {id: 8, name: 'Semi Frio de Chocolate', imgProd: semiFrioChoc},
    {id: 9, name: 'Tiramisú', imgProd: tiramisu}
  ]

  return (
    <>
      <h1 className="text-center mt-5 mb-5">Postres</h1>
      
        <div className="container">
        {/* <hr className="mb-5" /> */}
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-2 border rounded-5 p-4">
          {detPostres.map(dp =>
            <div>
              <img className="rounded-4" src={dp.imgProd} style={{width:"300px", height:"250px"}} alt="img" />
              <h4 className="text-center">{dp.name}</h4>
            </div>
          )}
        </div>
        </div>
    </>
  )
}