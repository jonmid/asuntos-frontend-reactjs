import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './../components/Header'

const AdminScreen = () => {
  return (
    <div className='grid grid-cols-[auto_1fr] w-full h-full'>
      <nav className='px-4 bg-blue-300'>menu</nav>
      <div className='flex flex-col'>
        <Header />
        <main className='grow bg-pink-400'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminScreen
