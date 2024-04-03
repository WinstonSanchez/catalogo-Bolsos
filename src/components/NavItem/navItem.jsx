import { NavLink } from 'react-router-dom'
import React from 'react'
import './navItem.css'

function navItem({route, name}) {
  return (
    <li className='li-nav'>
        <NavLink to={route} className={'navlink-nav'}>{name}</NavLink>
    </li>
  )
}

export default navItem