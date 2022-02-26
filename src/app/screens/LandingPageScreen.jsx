import React from 'react'
import { Link } from 'react-router-dom'

import Layout from './../components/Layout'

const LandingPageScreen = () => {
  return (
    <Layout>
      <div className='relative bg-white shadow rounded-lg overflow-hidden lg:flex lg:items-center'>
        <div className='w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20'>
          <h2 className='text-3xl font-extrabold text-black sm:text-4xl'>
            <span className='block'>Bienvenidos a la aplicación para administrar asuntos</span>
          </h2>
          <p className='text-md mt-4 text-gray-400'>
            En esta aplicación va encontrar una serie de funciones que permite mejorar el control de ingreso de asuntos y así mismo mostrar reportes visuales que permiten una mejor interpretación de
            los datos.
          </p>
          <div className='lg:mt-0 lg:flex-shrink-0'>
            <div className='mt-12 inline-flex rounded-md shadow'>
              <Link
                to='/app'
                className='py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
              >
                Iniciar
              </Link>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-8 p-8 lg:p-24'>
          <img src='https://www.tailwind-kit.com/images/landscape/3.jpg' className='rounded-lg w-1/2' alt='Tree' />
          <div>
            <img src='https://www.tailwind-kit.com/images/landscape/2.jpg' className='rounded-lg mb-8' alt='Tree' />
            <img src='https://www.tailwind-kit.com/images/landscape/4.jpg' className='rounded-lg' alt='Tree' />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LandingPageScreen
