import React from 'react'
import { Outlet } from 'react-router-dom'

// import Header from './../components/Header'
import Menu from '../components/Menu'

const AdminScreen = () => {
  return (
    <div className='grid grid-cols-[auto_1fr] w-full h-full'>
      <Menu />
      <div className='flex flex-col'>
        {/* <Header /> */}
        <h1>Prueba</h1>
        <main className='grow bg-app-index'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminScreen
