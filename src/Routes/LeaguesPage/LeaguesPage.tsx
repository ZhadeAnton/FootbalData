import React from 'react'

import { ILeaguesContainer } from '../../Containers/LeaguesContainer'
import LeaguesList from '../../Components/Leagues/LeaugesList/LeaguesList'

export default function LeaguesPage(props: ILeaguesContainer) {
  return (
    <main className='leagues'>
      <LeaguesList
        leagues={props.leagues}
        handleClickByLeague={props.handleClickByLeague}
      />
    </main>
  )
}
