import React from 'react'
import { NavLink } from 'react-router-dom'

import { ILeagueContainer } from '../../Containers/CompetitionContainer'

export default function LeaugePage(props: ILeagueContainer) {
  return (
    <main className='container'>
      <section>
        <div>
          <h1>Info about { props.competition?.name }</h1>
        </div>

        <div>
          <h4>
            Location: { props.competition?.area.name }
          </h4>

          <h4>
            Current seasone start by { props.competition?.currentSeason?.startDate }
          </h4>

          <h4>
            Current seasone end by { props.competition?.currentSeason?.endDate }
          </h4>

          <h4>
            Already passed { props.competition?.seasons.length } seasons
          </h4>

          <NavLink to='/mathes'>See matches for {props.competition?.name}</NavLink>
        </div>
      </section>
    </main>
  )
}
