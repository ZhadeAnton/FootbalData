import React from 'react'

import './leagueTeamsPage.scss'
import { ILeagueTeamContainer } from '../../Containers/LeagueTeamsContainer'
import TeamsList from '../../Components/Teams/TeamsList/TeamsList'

export default function LeagueTeamsPage(props: ILeagueTeamContainer) {
  return (
    <main>
      <section>
        <TeamsList teams={props.teamByCompetition!.teams}/>
      </section>
    </main>
  )
}
