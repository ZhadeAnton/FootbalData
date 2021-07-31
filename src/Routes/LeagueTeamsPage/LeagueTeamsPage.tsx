import React from 'react'
import { Divider } from 'antd'

import './leagueTeamsPage.scss'
import { ILeagueTeamContainer } from '../../Containers/LeagueTeamsContainer'
import TeamsList from '../../Components/Teams/TeamsList/TeamsList'
import CompetitionHeader from '../../Components/CompetitionHeader/CompetitionHeader'
import BackTopButton from '../../Components/BackButton/BackButton'
import CustomDatePicker from '../../Components/DatePicker/DatePicker'
import YearTitle from '../../Components/DateFilter/YearTitle/YearTitle'

export default function LeagueTeamsPage(props: ILeagueTeamContainer) {
  return (
    <main className='league-teams-page container'>
      <CompetitionHeader
        competitionName={props.teamByCompetition?.competition.name}
        competitionVenue={props.teamByCompetition?.competition.area.name}
      />

      <Divider />

      <CustomDatePicker handleYearChange={props.handleYearChange}/>
      <YearTitle year={props.year}/>

      <Divider />

      <TeamsList
        teams={props.teamByCompetition!.teams}
        handleClickByTeam={props.handleClickByTeam}
      />

      <BackTopButton />
    </main>
  )
}
