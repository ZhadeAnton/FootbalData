import React from 'react'

import './leaguesItem.scss'
import { IFnGetCompetitionById, ILeague } from '../../../Interfaces/LeaguesInterfaces'

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
            src='https://i.ibb.co/12hkB1M/image-1.png'
            alt="UFL"
          />
      }

      <h4 className='leagues-item__title'>
        { props.league.name }
      </h4>

      <div>
        <span>
        </span>
      </div>
    </li>
  )
}
