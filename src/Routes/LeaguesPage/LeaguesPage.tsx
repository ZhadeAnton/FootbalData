import React from 'react'

import './leaguesPage.scss'
import { ILeaguesContainer } from '../../Containers/LeaguesContainer'
import LeaguesList from '../../Components/Leagues/LeaugesList/LeaguesList'
import BrandHeading from '../../Components/BrandHeading/BrandHeading'

export default function LeaguesPage(props: ILeaguesContainer) {
  return (
    <main className='leagues'>
      <section className='leagues__wrapper container'>
        <BrandHeading>List of available leagues</BrandHeading>

        <LeaguesList
          leagues={props.leagues}
          handleClickByLeague={props.handleClickByLeague}
        />
      </section>
    </main>
  )
}
