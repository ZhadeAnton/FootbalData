import React from 'react'

import MatchesList from '../../Components/Matches/MatchesList/MatchesList'
import { ILeagueSheduleContainer } from '../../Containers/LeagueSheduleContainer'

export default function LeagueShudule(props: ILeagueSheduleContainer) {
  return (
    <main>
      <section>
        <div>
          <h3>
            {props.matches.length} was finded
          </h3>
        </div>
        <MatchesList matches={props.matches}/>
      </section>
    </main>
  )
}
