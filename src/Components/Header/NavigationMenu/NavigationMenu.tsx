import React from 'react'

import './navigationMenu.scss'
import { navifationList } from './NavigationUtils'

export default function NavigationMenu() {
  return (
    <nav className='navigation-menu'>
      <ul className='navigation-menu__list'>
        {
          navifationList.map((item) => (
            <li
              className='navigation-menu__list--item'
              key={item}
            >
              {item}
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
