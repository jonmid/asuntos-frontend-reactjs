import React from 'react'
import { Helmet } from 'react-helmet'
import { IconFiles, IconArchive } from '@tabler/icons'

import Layout from './../components/Layout'
import PieChart from './../components/PieChart'
import BarChartApp from './../components/BarChartApp'

const HomeScreen = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard - Asuntos</title>
      </Helmet>

      <Layout>
        <h2 className='ml-5 mt-10 text-2xl font-medium text-app-800'>Datos Generales</h2>

        <section className='grid grid-cols-1 gap-4 mt-10 px-3 sm:grid-cols-2 sm:px-5 lg:grid-cols-[auto_1fr_auto] lg:grid-rows-2 lg:px-2'>
          <div className='flex items-center justify-center space-x-4 py-10 bg-white rounded-[20px] shadow lg:px-5 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2'>
            <div className='flex items-center justify-center w-[70px] h-[70px] text-red-500 bg-red-100 rounded-full'>
              <IconFiles size={32} stroke={2} />
            </div>
            <div>
              <h3 className='text-3xl font-bold text-gray-700'>456</h3>
              <p className='text-sm font-medium text-gray-400'>Asuntos sin cerrar</p>
            </div>
          </div>

          <div className='flex items-center justify-center space-x-4 py-10 bg-white rounded-[20px] shadow lg:px-5 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3'>
            <div className='flex items-center justify-center w-[70px] h-[70px] text-green-500 bg-green-100 rounded-full'>
              <IconArchive size={32} stroke={2} />
            </div>
            <div>
              <h3 className='text-3xl font-bold text-gray-700'>1067</h3>
              <p className='text-sm font-medium text-gray-400'>Asuntos cerrados</p>
            </div>
          </div>

          <div className='flex flex-col bg-white rounded-[20px] shadow sm:col-span-2 md:col-auto lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3 overflow-hidden'>
            <h2 className='py-6 pl-6 text-sm font-normal text-gray-700 border-b border-gray-200 sm:text-base xl:text-lg'>Número de casos cerrados por mes</h2>
            <div className='flex-1 py-5'>
              <BarChartApp />
            </div>
          </div>

          <div className='flex flex-col space-y-7 px-10 py-6 bg-white rounded-[20px] shadow overflow-hidden sm:col-span-2 md:col-auto lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3'>
            <h2 className='text-xl font-medium text-gray-700'>Asuntos</h2>

            <div className='grow flex items-center justify-center'>
              <PieChart strokeWidth='10' sqSize='150' percentage={70} />
            </div>

            <div className='flex items-center space-x-4'>
              <div className='flex items-center space-x-2'>
                <svg width='14' height='14' fill='none'>
                  <path fillRule='evenodd' clipRule='evenodd' d='M7.184 14a7 7 0 100-14 7 7 0 000 14z' fill='#FF3A29' />
                </svg>
                <span className='text-sm text-gray-400'>Cerrados</span>
              </div>

              <div className='flex items-center space-x-2'>
                <svg width='14' height='14' fill='none'>
                  <path fillRule='evenodd' clipRule='evenodd' d='M7.184 14a7 7 0 100-14 7 7 0 000 14z' fill='#ffe5d3' />
                </svg>
                <span className='text-sm text-gray-400'>Abiertos</span>
              </div>
            </div>
          </div>
        </section>

        <h2 className='ml-5 mt-10 text-2xl font-medium text-app-800'>Ultimos Asuntos</h2>

        <section className='mt-10 text-center text-sm text-gray-500'>
          <p>Aqui se carga los ultimos asuntos</p>
        </section>
      </Layout>
    </>
  )
}

export default HomeScreen
