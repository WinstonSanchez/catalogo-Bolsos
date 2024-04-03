import { ReactComponent as FacebookIcon } from '../../assets/footer/facebook.svg'
import { ReactComponent as InstagramIcon } from '../../assets/footer/instagram.svg'
import { ReactComponent as TwitterIcon } from '../../assets/footer/twitter-x.svg'
import { ReactComponent as WhatsappIcon } from '../../assets/footer/whatsapp.svg'
import React from 'react'
import './footer.css'

function footer() {
  return (
  <footer className='footer-container'>
    <div className='footer-information'>
      <ul>
        <li><div className='logo-footer' /></li>
        <li>
          <p>Nuestras redes:</p>
          <div className='icons-container'>
            <a href="https://www.facebook.com/"><FacebookIcon className='logo-color' /></a>
            <a href="https://www.instagram.com"><InstagramIcon className='logo-color' /></a>
            <a href="https://twitter.com/"><TwitterIcon className='logo-color' /></a>
            <a href="https://web.whatsapp.com/"><WhatsappIcon className='logo-color' /></a>
          </div>
        </li>
      </ul>

      <ul>
        <p className='title-footer'>Información</p>
        <li>Create by: Winston Sanchez</li>
        <li>sanchezwinston2@gmail.com</li>
        <li>Proyecto Sena</li>
        <li>Ubicacion: Cucuta - Colombia</li>
      </ul>

      <ul>
        <p className='title-footer'>Te puede interesar</p>
        <li>Política de privacidad</li>
        <li>Términos del servicio</li>
        <li>Política de reembolso</li>
      </ul>
    </div>
  </footer>
  )
}

export default footer
  