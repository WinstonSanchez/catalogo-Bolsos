import Logo from '../../assets/logo/logo.png'
import NavItem from '../NavItem/navItem'
import Search from '../Search/search'
import React from 'react'
import './navBar.css'

function navBar() {
  return (
    <header>
      <nav className='header-nav-container'>
        <div className='div-nav-container'>
          <ul className='ul-nav'>
            <img src={Logo} alt="Logo-Bolsos" className='nav-logo' />
            <NavItem route={'/'} name={"Home"}/>
            <NavItem route={'/woman'} name={"Woman"}/>
            <NavItem route={'/man'} name={"Man"}/>
            <NavItem route={'/kids'} name={"Kids"}/>
          </ul>

          <div>
            <Search />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default navBar