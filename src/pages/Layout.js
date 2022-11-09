import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Layout() {
  return (
    <nav className=''>
        <div className=''> 

            <ul className=''>
                <li className=''>
                    <Link to={'/'}>Home</Link>
                </li>
                <li className=''>
                    <Link to={'/contacto'}>Contacto</Link>
                </li>
                <li className=''>
                    <Link to={'/registrarse'}>Registrarse</Link>
                </li>
                <li className=''>
                    <Link to={'/productos'}>Productos</Link>
                </li>

                <Outlet />    
            </ul>
        </div>
    </nav>
  )
}

export default Layout;