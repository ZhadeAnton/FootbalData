import React from 'react'

import './teamShirt.scss'
import { ReactComponent as Shirt } from '../../Assets/SVG/football-shirt.svg'
import { ITeamById } from '../../Interfaces/TeamInterfaces'

interface Props {
  clubColors: ITeamById['clubColors'] | null
}

export default function TeamShirts(props: Props) {
  if (props.clubColors === null) return null

  const teamColors = Array.from(props.clubColors!.split('/'))

  return (
    <div className='team-shirts'>
      <ul className='team-shirts__list'>
        {
          teamColors.map((item) => {
            return (
              <li
                key={item}
                className='team-shirts__list--item'
              >
                <Shirt style={{fill: `${item}`}}/>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
