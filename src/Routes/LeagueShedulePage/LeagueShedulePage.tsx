import React from 'react'
import { DatePicker, Divider } from 'antd'
import moment from 'moment'

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

        <Divider />

        <DatePicker
          onChange={(_, dateString: any) => props.handleDateChange(dateString)}
          picker="year"
          allowClear
          value={moment(props.year)}
        />

        <MatchesList
          matches={props.leagueShedule.matches}
          handleClickByMatch={props.handleClickByMatch}
        />
      </section>
    </main>
  )
}
