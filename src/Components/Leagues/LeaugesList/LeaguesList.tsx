import React from 'react'

import './leaguesList.scss'
import { IFnGetCompetitionById, ILeague } from '../../../Interfaces/LeagueInterfaces'
import LeaugesItem from '../LeaguesItem/LeaguesItem'

interface Props {
  leagues: Array<ILeague>,
  handleClickByLeague: IFnGetCompetitionById
}

export default function LeaguesList(props: Props) {
  return (
    <nav className='leagues-navigation'>
      <ul className='leagues-list'>
        {
          props.leagues.map((league) => (
            <LeaugesItem
              key={league.id}
              league={league}
              handleClickByLeague={props.handleClickByLeague}
            />
          ))
        }
      </ul>
    </nav>
  )
}
