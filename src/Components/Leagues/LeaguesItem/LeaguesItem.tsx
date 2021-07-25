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
      <h4>
        { props.league.name }
      </h4>

      <div>
        <span>
        </span>
      </div>
    </li>
  )
}
