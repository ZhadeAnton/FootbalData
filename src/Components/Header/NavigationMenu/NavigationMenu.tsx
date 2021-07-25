import React from 'react'

import useHistoryPush from '../../../Hooks/useHistory'

import './navigationMenu.scss'
import { navifationList } from './NavigationUtils'

export default function NavigationMenu() {
  const history = useHistoryPush()

  return (
    <nav className='navigation-menu'>
      <ul className='navigation-menu__list'>
        {
          navifationList.map((item) => (
            <li
              className='navigation-menu__list--item'
              key={item}
              onClick={() => history(`/${item.toLocaleLowerCase()}`)}
            >
              {item}
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
