import React, {useContext} from 'react';
import { themeContext } from '../../context/themeContext';

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

  const {theme} = useContext(themeContext)

  const detPostres = [
    {id: 1, name: 'Almendrado', imgProd: postreAlmendra},
    {id: 2, name: 'Cassata', imgProd: cassata},
    {id: 3, name: 'Cheesecake', imgProd: cheesecake},
    {id: 4, name: 'Crocantino', imgProd: crocantino},
    {id: 5, name: 'Delicia', imgProd: delicia},
    {id: 6, name: 'Lemon Pie', imgProd: lemonPie},
    {id: 7, name: 'Semi Frio de Chocolate', imgProd: semiFrioChoc},
    {id: 8, name: 'Tiramisú', imgProd: tiramisu}
  ]

  return (
    <>
      <h1 className={`text-center mt-5 text-${theme.color}`}>Postres</h1>
      
        <div className="container mb-5 p-5">
        {/* <hr className="mb-5" /> */}
        <div className="d-flex justify-content-evenly align-items-center flex-wrap border rounded-5 p-4">
          {detPostres.map(dp =>
            <div>
              <img className="rounded-4" src={dp.imgProd} style={{width:"300px", height:"250px"}} alt="img" />
              <h4 className={`text-center text-${theme.color}`}>{dp.name}</h4>
            </div>
          )}
        </div>
        </div>
    </>
  )
}