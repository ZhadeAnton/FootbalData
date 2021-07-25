import React from 'react'

import './competitionPage.scss'
import { ILeagueContainer } from '../../Containers/CompetitionContainer'

export default function LeaugePage(props: ILeagueContainer) {
  return (
    <main className='competition'>
      <section className='competition__wrapper container'>
        <div className='competition__header'>
          {
            props.competition?.emblemUrl
            ?
              <img
                className='competition__header--image'
                src={props.competition?.emblemUrl}
                alt="Logo"
              />
            :
              <img
                className='competition__header--image'
                src='https://i.ibb.co/12hkB1M/image-1.png'
                alt="UFL"
              />
          }

          <h1 className='competition__header--title'>
            { props.competition?.name }
          </h1>
        </div>

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
        </div>
      </section>
    </main>
  )
}
