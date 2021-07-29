import React from 'react'

import './competitionPage.scss'
import { ILeagueContainer } from '../../Containers/CompetitionContainer'
import CompetitionHeader
  from '../../Components/CompetitionHeader/CompetitionHeader'

export default function LeaugePage(props: ILeagueContainer) {
  return (
    <main className='competition'>
      <section className='competition__wrapper container'>
        <CompetitionHeader
          competitionImage={props.competition?.emblemUrl}
          competitionName={props.competition?.name}
        />

        <div className='competition__info'>
          <h4 className='competition__info--text'>
            Location: { props.competition?.area.name }
          </h4>

          <h4 className='competition__info--text'>
            Current seasone started by { props.competition?.currentSeason?.startDate }
          </h4>

          <h4 className='competition__info--text'>
            Current seasone end by { props.competition?.currentSeason?.endDate }
          </h4>

          <h4 className='competition__info--text'>
            League alreade passed { props.competition?.seasons.length } seasons
          </h4>
        </div>

        <div className='competition__bottom'>
          <button
            className='competition__bottom--link'
            onClick={props.handleGetShedule}
          >
            Sheadule for { props.competition?.name }
          </button>

          <button
            className='competition__bottom--link'
            onClick={props.handleClickByTeamButton}
          >
            Teams for { props.competition?.name }
          </button>
        </div>
      </section>
    </main>
  )
}
