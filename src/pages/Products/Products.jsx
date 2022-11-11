import React from 'react'
import Cards from './Cards'

export default function Products() {

  return (
    <>
        <div className='container'>
            <h1 className='mt-5 text-center'>Productos</h1>
            <hr />
              <div className="d-flex flex-wrap gap-3">
              <Cards/>
            </div>
            {/* <Cards/> */}
        </div>
    </>
  )
}
