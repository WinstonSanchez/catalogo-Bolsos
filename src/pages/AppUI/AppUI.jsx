import NavBar from '../../components/NavBar/navBar';
import AppRoutes from '../../routes/AppRoutes';
import Footer from '../../components/Footer/footer';
import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import './AppUI.css'

function AppUI() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className='div-layout'>
        <AppRoutes />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default AppUI