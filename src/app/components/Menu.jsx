import React from 'react'
import { IconHome2, IconNotebook, IconFiles, IconCalendarEvent, IconCertificate, IconStar, IconUserCheck, IconSettings } from '@tabler/icons'

import logoIcon from './../../assets/icons/logo.svg'

const Menu = () => {
  return (
    <nav className='hidden h-screen bg-app-800 lg:flex lg:flex-col'>
      <section className='mt-10'>
        <div className='flex space-x-3 items-center justify-center'>
          <img className='select-none' src={logoIcon} alt='logo' />
          <span className='text-2xl font-bold text-app-200 select-none'>Asuntos</span>
        </div>
      </section>

      <section className='grow mt-12 overflow-auto'>
        <ul className='flex flex-col text-app-300'>
          <li className='flex items-center py-5 pl-10 pr-14 text-white font-bold border-l-4 border-app-accent'>
            <IconHome2 stroke={2} className='shrink-0' /> <span className='shrink-0 ml-2'>Jhonatan Mideros</span>
          </li>

          <li className='flex items-center py-5 pl-10 pr-14 font-normal border-l-4 border-transparent hover:bg-app-700 hover:text-app-100 transition ease-in duration-400'>
            <IconNotebook stroke={2} className='shrink-0' /> <span className='shrink-0 ml-2'>Item 2</span>
          </li>
          <li className='flex items-center py-5 pl-10 pr-14 font-normal border-l-4 border-transparent hover:bg-app-700 hover:text-app-100 transition ease-in duration-400'>
            <IconFiles stroke={2} className='shrink-0' /> <span className='shrink-0 ml-2'>Item 3</span>
          </li>
          <li className='flex items-center py-5 pl-10 pr-14 font-normal border-l-4 border-transparent hover:bg-app-700 hover:text-app-100 transition ease-in duration-400'>
            <IconCalendarEvent stroke={2} className='shrink-0' /> <span className='shrink-0 ml-2'>Item 4</span>
          </li>
          <li className='flex items-center py-5 pl-10 pr-14 font-normal border-l-4 border-transparent hover:bg-app-700 hover:text-app-100 transition ease-in duration-400'>
            <IconCertificate stroke={2} className='shrink-0' /> <span className='shrink-0 ml-2'>Item 5</span>
          </li>
          <li className='flex items-center py-5 pl-10 pr-14 font-normal border-l-4 border-transparent hover:bg-app-700 hover:text-app-100 transition ease-in duration-400'>
            <IconStar stroke={2} className='shrink-0' /> <span className='shrink-0 ml-2'>Item 6</span>
          </li>
          <li className='flex items-center py-5 pl-10 pr-14 font-normal border-l-4 border-transparent hover:bg-app-700 hover:text-app-100 transition ease-in duration-400'>
            <IconUserCheck stroke={2} className='shrink-0' /> <span className='shrink-0 ml-2'>Item 7</span>
          </li>
          <li className='flex items-center py-5 pl-10 pr-14 font-normal border-l-4 border-transparent hover:bg-app-700 hover:text-app-100 transition ease-in duration-400'>
            <IconSettings stroke={2} className='shrink-0' /> <span className='shrink-0 ml-2'>Item 8</span>
          </li>
        </ul>
      </section>

      <section className='flex items-center justify-center pt-5 pb-10'>
        <div className='w-[200px] p-4 text-sm text-app-300 bg-app-900 rounded-lg shadow select-none'>
          <span className='font-bold'>Bienvenid@</span>, este es un demo del funcionamiento de la aplicación para administrar Asuntos.
        </div>
      </section>
    </nav>
  )
}

export default Menu
