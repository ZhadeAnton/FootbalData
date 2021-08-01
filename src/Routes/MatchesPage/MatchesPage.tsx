import React from 'react'

import './matchesPage.scss'
import { IMatchesContainer } from '../../Containers/MatchesContainer'
import MatchesList from '../../Components/Matches/MatchesList/MatchesList'
import BrandHeading from '../../Components/BrandHeading/BrandHeading'
import CustomDateRange from '../../Components/DateRange/DateRange'
import DateInfo from '../../Components/DateFilter/DateInfo/DateInfo'

export default function MatchesPage(props: IMatchesContainer) {
  return (
    <main className='matches-page'>
      <section className='matches-page__wrapper container'>
        <BrandHeading
          className='matches-page__heading'
          style={{marginBottom: 2 + 'rem'}}
        >
          Today`s matches
        </BrandHeading>

        <div className='matches-page__date-filter'>
          <CustomDateRange handleDateChange={props.handleDateChange}/>

          <DateInfo
            date={props.date}
            handleClearFiltering={props.handleClearFiltering}
          />
        </div>

        <MatchesList
          matches={props.matches}
          handleClickByMatch={props.handleClickByMatch}
        />
      </section>
    </main>
  )
}
