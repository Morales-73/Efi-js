import React, { useContext } from 'react'
import {themeContext} from '../../context/themeContext'
import Cards from './Cards'

export default function Products() {

  const {theme} = useContext(themeContext)
  
  return (
    <>
        <div className='container'>
            <h1 className={`mt-5 mb-5 text-center text-${theme.color}`}>Productos</h1>
            <hr className="mb-5" />
              <Cards/>
        </div>
    </>
  )
}
