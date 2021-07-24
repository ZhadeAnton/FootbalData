import React from 'react'

import './header.scss'
import BrandLogo from '../BrandLogo/BrandLogo'
import NavigationMenu from './NavigationMenu/NavigationMenu'

export default function Header() {
  return (
    <header className='header'>
      <div className='header__wrapper container'>
        <BrandLogo />
        <NavigationMenu />
      </div>
    </header>
  )
}
