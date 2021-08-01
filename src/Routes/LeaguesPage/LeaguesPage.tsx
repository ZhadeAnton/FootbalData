import React from 'react'
import { Divider } from 'antd'

import './leaguesPage.scss'
import { ILeaguesContainer } from '../../Containers/LeaguesContainer'
import CompetitionHeader from '../../Components/CompetitionHeader/CompetitionHeader'
import BackTopButton from '../../Components/BackButton/BackButton'
import LeaguesList from '../../Components/Leagues/LeaugesList/LeaguesList'
import SortInput from '../../Components/FilterInput/SortInput'

export default function LeaguesPage(props: ILeaguesContainer) {
  return (
    <main className='leagues'>
      <section className='leagues__wrapper container'>
        <CompetitionHeader competitionName='List of available league'/>

        <Divider />

        <SortInput />

        <Divider />

        <LeaguesList
          leagues={props.leagues}
          handleClickByLeague={props.handleClickByLeague}
        />
      </section>

      <BackTopButton />
    </main>
  )
}
