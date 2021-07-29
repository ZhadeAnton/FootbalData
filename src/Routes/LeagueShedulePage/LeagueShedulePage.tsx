import React from 'react'

import './leagueShedulePage.scss'
import { ILeagueSheduleContainer } from '../../Containers/LeagueSheduleContainer'
import MatchesList from '../../Components/Matches/MatchesList/MatchesList'
import CompetitionHeader from '../../Components/CompetitionHeader/CompetitionHeader'

export default function LeagueShedulePage(props: ILeagueSheduleContainer) {
  return (
    <main className='league-shedule'>
      <section className='league-shedule__wrapper container'>
        <CompetitionHeader
          competitionName={props.leagueShedule.competition.area.name}
          competitionVenue={props.leagueShedule.competition.name}
        />

        <MatchesList
          matches={props.leagueShedule.matches}
          handleClickByMatch={props.handleClickByMatch}
        />
      </section>
    </main>
  )
}
