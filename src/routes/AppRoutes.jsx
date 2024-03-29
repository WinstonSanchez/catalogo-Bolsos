import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //importamos las librerias de reat para las rutas
import NavBar from '../components/NavBar/navBar';
import Home from '../pages/Home/home';
import Woman from '../pages/Woman/woman';
import Man from '../pages/Man/man';
import Kids from '../pages/Kids/kids';
import NotFound from '../pages/NotFound/notFound';
import Footer from '../components/Footer/footer';


function AppRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/woman' element={<Woman />}/>
        <Route path='/man' element={<Man />}/>
        <Route path='/kids' element={<Kids />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
