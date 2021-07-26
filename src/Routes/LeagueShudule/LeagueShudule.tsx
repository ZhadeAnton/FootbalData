import React from 'react'

import { ILeagueSheduleContainer } from '../../Containers/LeagueSheduleContainer'
import MatchesList from '../../Components/Matches/MatchesList/MatchesList'
import SheaduleLeangthInfo from '../../Components/Sheadule/SheaduleInfo/SheaduleInfo'

export default function LeagueShudule(props: ILeagueSheduleContainer) {
  return (
    <main>
      <section className='container'>
        <SheaduleLeangthInfo sheaduleLeangth={props.leagueShedule.matches.length}/>
        <MatchesList matches={props.leagueShedule.matches}/>
      </section>
    </main>
  )
}
