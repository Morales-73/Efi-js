import React from 'react'
import carousel1 from '../../img/carousel/carousel-1.jpg'
import carousel2 from '../../img/carousel/carousel-2.jpg'
import carousel3 from '../../img/carousel/carousel-3.jpg'

export default function Carousel() {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators mb-5">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="active" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="active" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel1} style={{objectFit: "cover", height:"55rem"}} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={carousel2} style={{objectFit: "cover", height:"55rem"}} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={carousel3} style={{objectFit: "cover", height:"55rem"}}  className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon p-4" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon p-4" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
