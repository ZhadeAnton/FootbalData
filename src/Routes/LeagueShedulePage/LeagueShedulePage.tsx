import React from 'react'
import { Divider, DatePicker } from 'antd'
const { RangePicker } = DatePicker

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
          picker="year"
          allowClear={false}
          onChange={(_, dateString: string) => props.handleYearChange(dateString)}
        />

        <RangePicker
          // eslint-disable-next-line max-len
          onChange={(_, dateString: [string, string]) => props.handleDateChange(dateString)}
          allowClear={false}
        />

        { props.date &&
          <time>Filter by range: { props.date }</time>
        }

        { props.year &&
          <time>Filter by year: { props.year }</time>
        }

        { props.date &&
          <button onClick={props.handleClearFiltering}>Clear filter</button>
        }


        <MatchesList
          matches={props.leagueShedule.matches}
          handleClickByMatch={props.handleClickByMatch}
        />
      </section>
    </main>
  )
}
