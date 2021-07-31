import React from 'react'

import './header.scss'
import BrandLogo from '../BrandLogo/BrandLogo'
import NavigationMenu from './NavigationMenu/NavigationMenu'
import HamburgerMenu from './HamburgerMenu/HamburgerMenu'

export default function Header() {
  return (
    <header className='header'>
      <div className='header__wrapper container'>
        <BrandLogo />

        <NavigationMenu />

        <div className='header__hamburger'>
          <HamburgerMenu />
        </div>
      </div>
    </header>
  )
}
