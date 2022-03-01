import React from 'react'
import { IconHome2, IconNotebook, IconFiles, IconCalendarEvent, IconCertificate, IconStar, IconUserCheck, IconSettings } from '@tabler/icons'

import logoIcon from './../../assets/icons/logo.svg'

const Menu = () => {
  return (
    <nav className='flex flex-col h-screen bg-blue-900'>
      <div className='mt-10'>
        <div className='flex space-x-3 items-center justify-center'>
          <img className='select-none' src={logoIcon} alt='logo' />
          <span className='text-2xl font-bold text-blue-100 select-none'>Asuntos</span>
        </div>
      </div>

      <section className='grow mt-12 overflow-auto overflow-y-auto'>
        <ul className='flex flex-col text-blue-300'>
          <li className='flex items-center py-5 pl-10 pr-14 text-white font-bold border-l-4 border-red-700'>
            <IconHome2 stroke={2} className='shrink-0' /> <span className='shrink-0 ml-2'>Jhonatan Mideros</span>
          </li>

          <li className='flex items-center py-5 pl-10 pr-14 font-normal border-l-4 border-transparent hover:bg-blue-800 hover:text-blue-100 transition ease-in duration-400'>
            <IconNotebook stroke={2} className='shrink-0' /> <span className='shrink-0 ml-2'>Item 2</span>
          </li>
          <li className='flex items-center py-5 pl-10 pr-14 font-normal border-l-4 border-transparent hover:bg-blue-800 hover:text-blue-100 transition ease-in duration-400'>
            <IconFiles stroke={2} className='shrink-0' /> <span className='shrink-0 ml-2'>Item 3</span>
          </li>
          <li className='flex items-center py-5 pl-10 pr-14 font-normal border-l-4 border-transparent hover:bg-blue-800 hover:text-blue-100 transition ease-in duration-400'>
            <IconCalendarEvent stroke={2} className='shrink-0' /> <span className='shrink-0 ml-2'>Item 4</span>
          </li>
          <li className='flex items-center py-5 pl-10 pr-14 font-normal border-l-4 border-transparent hover:bg-blue-800 hover:text-blue-100 transition ease-in duration-400'>
            <IconCertificate stroke={2} className='shrink-0' /> <span className='shrink-0 ml-2'>Item 5</span>
          </li>
          <li className='flex items-center py-5 pl-10 pr-14 font-normal border-l-4 border-transparent hover:bg-blue-800 hover:text-blue-100 transition ease-in duration-400'>
            <IconStar stroke={2} className='shrink-0' /> <span className='shrink-0 ml-2'>Item 6</span>
          </li>
          <li className='flex items-center py-5 pl-10 pr-14 font-normal border-l-4 border-transparent hover:bg-blue-800 hover:text-blue-100 transition ease-in duration-400'>
            <IconUserCheck stroke={2} className='shrink-0' /> <span className='shrink-0 ml-2'>Item 7</span>
          </li>
          <li className='flex items-center py-5 pl-10 pr-14 font-normal border-l-4 border-transparent hover:bg-blue-800 hover:text-blue-100 transition ease-in duration-400'>
            <IconSettings stroke={2} className='shrink-0' /> <span className='shrink-0 ml-2'>Item 8</span>
          </li>
        </ul>
      </section>

      <section className='bg-yellow-200'>msg</section>
    </nav>
  )
}

export default Menu
