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
            src='https://crests.football-data.org/EUR.svg'
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
