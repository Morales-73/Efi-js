import React from 'react'
import Cards from './Cards'

export default function Products() {
  
  return (
    <>
        <div className='container'>
            <h1 className='mt-5 text-center'>Productos</h1>
            <hr />
            <div className='d-flex d-wrap gap-2'>
              <Cards/>
            </div>
        </div>
    </>
  )
}
