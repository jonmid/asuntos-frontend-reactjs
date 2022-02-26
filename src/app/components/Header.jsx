import React from 'react'
import { IconSearch, IconDotsVertical } from '@tabler/icons'

import messageIcon from './../../assets/icons/message.svg'
import notificationIcon from './../../assets/icons/notification.svg'
import avatarIcon from './../../assets/img/avatar.png'

const Header = () => {
  return (
    <header className='flex items-center justify-end h-20 bg-app-header sm:justify-start'>
      <div className='hidden sm:grow sm:flex sm:items-center sm:pl-3 md:pl-10'>
        <div className='text-indigo-600'>
          <IconSearch size={24} stroke={3} />
        </div>
        <div className='ml-4 text-xs font-light text-gray-400 underline md:text-sm'>Buscar asuntos, abogados, solicitantes</div>
      </div>

      <div className='hidden sm:flex sm:items-center sm:pl-8 sm:border-l sm:mr-5'>
        <div className='flex space-x-4 items-center'>
          <button>
            <img src={messageIcon} alt='messageIcon' />
          </button>
          <button>
            <img src={notificationIcon} alt='notificationIcon' />
          </button>
        </div>

        <div className='grid grid-cols-[auto_1fr_auto] gap-3 ml-8'>
          <div className='self-center justify-self-center'>
            <img src={avatarIcon} alt='avatarIcon' />
          </div>

          <div className='flex flex-col justify-center'>
            <h4 className='text-base font-bold'>Mia V</h4>
            <span className='text-xs text-gray-400'>Student</span>
          </div>
        </div>
      </div>

      <div className='mr-8 text-indigo-600'>
        <IconDotsVertical />
      </div>
    </header>
  )
}

export default Header
