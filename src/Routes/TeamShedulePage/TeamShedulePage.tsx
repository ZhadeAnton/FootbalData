import React from 'react'
import { Divider } from 'antd'

import './teamShedulePage.scss'
import { ITeamSheduleContainer } from '../../Containers/TeamShedulePageContainer'
import MatchesList from '../../Components/Matches/MatchesList/MatchesList'
import CustomDateRange from '../../Components/DateRange/DateRange'
import DateInfo from '../../Components/DateFilter/DateInfo/DateInfo'
import BrandHeading from '../../Components/BrandHeading/BrandHeading'

export default function TeamShedulePage(props: ITeamSheduleContainer) {
  return (
    <main className='team-shedule-page container'>
      <BrandHeading>
        Team Shedule
      </BrandHeading>

      <Divider />

      <div className='team-shedule-page__date-filter'>
        <CustomDateRange handleDateChange={props.handleDateChange}/>

        <DateInfo
          date={props.date}
          handleClearFiltering={props.handleClearFiltering}
        />
      </div>

      <Divider />

      <MatchesList
        matches={props.teamShedule!.matches}
        handleClickByMatch={props.handleClickByMatch}
      />
    </main>
  )
}
