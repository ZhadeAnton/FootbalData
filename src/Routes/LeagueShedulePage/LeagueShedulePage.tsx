import React from 'react'

import './leagueShedulePage.scss'
import { ILeagueSheduleContainer } from '../../Containers/LeagueSheduleContainer'
import MatchesList from '../../Components/Matches/MatchesList/MatchesList'
import SheduleLength from '../../Components/Sheadule/SheduleLength/SheduleLength'
import SheaduleInfo from '../../Components/Sheadule/SheaduleInfo/SheaduleInfo'

export default function LeagueShedulePage(props: ILeagueSheduleContainer) {
  return (
    <main className='league-shedule'>
      <section className='league-shedule__wrapper container'>
        <div className='league-shedule__header'>
          <SheaduleInfo
            competitionArea={props.leagueShedule.competition.area.name}
            competitionName={props.leagueShedule.competition.name}
          />

          <div className='league-shedule__header--shedules-length'>
            <SheduleLength sheaduleLeangth={props.leagueShedule.matches.length}/>
          </div>
        </div>

        <MatchesList
          matches={props.leagueShedule.matches}
          handleClickByMatch={props.handleClickByMatch}
        />
      </section>
    </main>
  )
}
