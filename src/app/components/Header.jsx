import React from 'react'
import { IconSearch } from '@tabler/icons'

// import messageIcon from './../../assets/icons/message.svg'
// import notificationIcon from './../../assets/icons/notification.svg'
import avatarIcon from './../../assets/img/avatar.png'
import Dropdown from './../components/Dropdown'

const Header = () => {
  return (
    <header className='flex h-20 items-center justify-end border-b border-app-200 bg-app-header shadow-lg sm:justify-start'>
      <div className='hidden sm:flex sm:grow sm:items-center sm:pl-3 md:pl-10'>
        <div className='text-app-500'>
          <IconSearch size={24} stroke={3} />
        </div>
        <div className='ml-4 text-xs font-light text-gray-400 underline md:text-sm'>Buscar asuntos, abogados, solicitantes</div>
      </div>

      <div className='hidden sm:mr-5 sm:flex sm:items-center sm:border-l sm:pl-8'>
        {/* <div className='flex space-x-4 items-center'>
          <button>
            <img src={messageIcon} alt='messageIcon' />
          </button>
          <button>
            <img src={notificationIcon} alt='notificationIcon' />
          </button>
        </div> */}

        <div className='grid grid-cols-[auto_1fr_auto] gap-3'>
          <div className='self-center justify-self-center'>
            <img src={avatarIcon} alt='avatarIcon' />
          </div>

          <div className='flex flex-col justify-center'>
            <h4 className='select-none text-base font-bold text-gray-800'>Mia V</h4>
            <span className='select-none text-xs text-gray-400'>Student</span>
          </div>
        </div>
      </div>

      <div className='mr-8'>
        <Dropdown />
      </div>
    </header>
  )
}

export default Header
