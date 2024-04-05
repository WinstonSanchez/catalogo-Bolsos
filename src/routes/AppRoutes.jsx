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
      <Route path='/catalogo-Bolsos/' element={<Home />}/>
      <Route path='/catalogo-Bolsos/woman' element={<Woman />}/>
      <Route path='/catalogo-Bolsos/man' element={<Man />}/>
      <Route path='/catalogo-Bolsos/kids' element={<Kids />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}

export default AppRoutes
