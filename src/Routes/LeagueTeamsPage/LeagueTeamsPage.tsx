import React from 'react'

import './leagueTeamsPage.scss'
import { ILeagueTeamContainer } from '../../Containers/LeagueTeamsContainer'
import TeamsList from '../../Components/Teams/TeamsList/TeamsList'

export default function LeagueTeamsPage(props: ILeagueTeamContainer) {
  return (
    <main className='container'>
      <section>
        <h1>
          { props.teamByCompetition?.competition.name }
        </h1>

        <h1>
          { props.teamByCompetition?.competition.area.name }
        </h1>
      </section>

      <section>
        <TeamsList teams={props.teamByCompetition!.teams}/>
      </section>
    </main>
  )
}
