import React, {useContext} from 'react'
import {themeContext} from '../../context/themeContext'
import Carousel from './Carousel'
import Catalogue from './Catalogue'

export default function Home() {

  const {theme} = useContext(themeContext)

  return (
    <>
      <div className={`bg-${theme.theme}`}>
        <Carousel/>
        {/* <Cards/> */}
        <Catalogue/>
      </div>
    </>
  )
}
