import { Routes, Route } from 'react-router-dom'; //importamos las librerias de reat para las rutas
import Home from '../pages/Home/home';
import Woman from '../pages/Woman/woman';
import Man from '../pages/Man/man';
import Kids from '../pages/Kids/kids';
import NotFound from '../pages/NotFound/notFound';
import React from 'react';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/woman' element={<Woman />}/>
      <Route path='/man' element={<Man />}/>
      <Route path='/kids' element={<Kids />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}

export default AppRoutes
