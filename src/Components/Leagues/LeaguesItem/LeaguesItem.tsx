import React from 'react'
import { Divider } from 'antd'

import './leaguesItem.scss'
import { IFnGetCompetitionById, ILeague } from '../../../Interfaces/LeagueInterfaces'

interface Props {
  league: ILeague,
  handleClickByLeague: IFnGetCompetitionById
}

export default function LeaugesItem(props: Props) {
  return (
    <li
      className='leagues-item'
      onClick={() => props.handleClickByLeague(props.league.id)}
    >
      {
        props.league.emblemUrl
        ?
          <img
            className='leagues-item__logo'
            src={props.league.emblemUrl}
            alt="League"
          />
        :
          <img
            className='leagues-item__logo'
            // eslint-disable-next-line max-len
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/LaLiga_Santander_%282%29.svg/220px-LaLiga_Santander_%282%29.svg.png'
            alt="UFL"
          />
      }

      <h4 className='leagues-item__title'>
        { props.league.name }
      </h4>

      <Divider />

      <h4 className='leagues-item__sub-title'>
        { props.league.area.name }
      </h4>

      <div>
        <span>
        </span>
      </div>
    </li>
  )
}
