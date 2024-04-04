import {ReactComponent as NotFound} from '../../assets/notFound/emoji-dizzy.svg'
import React from 'react'
import './notFound.css'

function notFound() {
  return (
    <div className='notFound-container'>
      <NotFound className='logo-notFound'/>
      <p>PAGINA NO ENCONTRADA</p>
    </div>
  )
}

export default notFound