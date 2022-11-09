import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Layout() {
  return (
    <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                        
                            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
                                <Link to={'/'}>Home</Link>
                            </a>

                            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                <Link to={'/productos'}>Productos</Link>
                            </a>

                            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                <Link to={'/contacto'}>Contacto</Link>
                            </a>
                            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                <Link to={'/registrarse'}>Registrarse</Link>
                            </a>
                            
                            <Outlet /> 

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

)
}

export default Layout;



