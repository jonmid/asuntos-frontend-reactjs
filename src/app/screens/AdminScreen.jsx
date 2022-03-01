import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './../components/Header'
import Menu from '../components/Menu'

const AdminScreen = () => {
  return (
    <div className='grid grid-cols-1 w-full h-full lg:grid-cols-[auto_1fr]'>
      <Menu />
      <div className='flex flex-col h-screen'>
        <Header />
        <main className='grow h-full bg-app-index overflow-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminScreen
