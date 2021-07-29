import React from 'react'

import './leagueTeamsPage.scss'
import { ILeagueTeamContainer } from '../../Containers/LeagueTeamsContainer'
import TeamsList from '../../Components/Teams/TeamsList/TeamsList'
import CompetitionHeader from '../../Components/CompetitionHeader/CompetitionHeader'
import BackTopButton from '../../Components/BackButton/BackButton'

export default function LeagueTeamsPage(props: ILeagueTeamContainer) {
  return (
    <main className='league-teams-page container'>
      <CompetitionHeader
        competitionName={props.teamByCompetition?.competition.name}
        competitionVenue={props.teamByCompetition?.competition.area.name}
      />

      <TeamsList
        teams={props.teamByCompetition!.teams}
        handleClickByTeam={props.handleClickByTeam}
      />

      <BackTopButton />
    </main>
  )
}
