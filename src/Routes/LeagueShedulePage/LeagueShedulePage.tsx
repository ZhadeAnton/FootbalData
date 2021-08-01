import React from 'react'
import { Divider } from 'antd'

import './leagueShedulePage.scss'
import { ILeagueSheduleContainer } from '../../Containers/LeagueSheduleContainer'
import MatchesList from '../../Components/Matches/MatchesList/MatchesList'
import CompetitionHeader from '../../Components/CompetitionHeader/CompetitionHeader'
import DateFilter from '../../Components/DateFilter/DateFilter'
import BackTopButton from '../../Components/BackButton/BackButton'

export default function LeagueShedulePage(props: ILeagueSheduleContainer) {
  return (
    <main className='league-shedule'>
      <section className='league-shedule__wrapper container'>
        <CompetitionHeader
          competitionName={props.leagueShedule.competition.area.name}
          competitionVenue={props.leagueShedule.competition.name}
        />

        <Divider />

        <DateFilter
          date={props.date}
          year={props.year}
          handleDateChange={props.handleDateChange}
          handleYearChange={props.handleYearChange}
          handleClearFiltering={props.handleClearFiltering}
        />

        <Divider />

        <MatchesList
          matches={props.leagueShedule.matches}
          handleClickByMatch={props.handleClickByMatch}
        />

        <BackTopButton />
      </section>
    </main>
  )
}
