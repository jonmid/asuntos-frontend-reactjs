import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LandingPageScreen from './screens/LandingPageScreen'
import AdminScreen from './screens/AdminScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import NotFoundScreen from './screens/NotFoundScreen'

const App = () => {
  return (
    <BrowserRouter>
      <div className='w-screen h-screen'>
        <Routes>
          <Route path='/' element={<LandingPageScreen />} />
          <Route path='/app' element={<AdminScreen />}>
            <Route index element={<HomeScreen />} />
            <Route path='*' element={<h1>404 Not Found Interno</h1>} />
          </Route>
          <Route path='/login' element={<LoginScreen />} />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
