import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { IconDotsVertical, IconHelp, IconSettings, IconLogout } from '@tabler/icons'

const Dropdown = () => {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <Menu.Button className='rounded-full p-2 text-app-500 transition duration-200 ease-in hover:bg-gray-100'>
        <IconDotsVertical />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 mt-2 flex w-56 origin-top-right flex-col divide-y divide-gray-100 overflow-hidden rounded-md bg-white py-4 px-2 shadow-lg ring-1 ring-app-500 ring-opacity-10 focus:outline-none'>
          <div className='flex flex-col'>
            <Menu.Item>
              {({ active }) => (
                <a className='flex items-center space-x-2 rounded-lg py-2 px-3 text-sm text-app-500 transition duration-200 ease-in hover:bg-app-200 hover:font-medium' href='/#'>
                  <IconHelp size={20} />
                  <span>Ayuda</span>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a className='flex items-center space-x-2 rounded-lg py-2 px-3 text-sm text-app-500 transition duration-200 ease-in hover:bg-app-200 hover:font-medium' href='/#'>
                  <IconSettings size={20} />
                  <span>Configuración</span>
                </a>
              )}
            </Menu.Item>
          </div>

          <div className='flex flex-col pt-3'>
            <Menu.Item>
              {({ active }) => (
                <button className='flex items-center space-x-2 rounded-lg px-3 py-2 text-sm text-app-accent transition duration-200 ease-in hover:bg-app-200 hover:font-medium' href='/#'>
                  <IconLogout size={20} />
                  <span>Cerrar sesión</span>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown
