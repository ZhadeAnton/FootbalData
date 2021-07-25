import React from 'react'
import { NavLink } from 'react-router-dom'

import { ILeagueContainer } from '../../Containers/LeagueContainer'

export default function LeaugePage(props: ILeagueContainer) {
  return (
    <main className='container'>
      <section>
        <div>
          <h1>Info about { props.selectedLeague?.name }</h1>
        </div>

        <div>
          <h4>
            Location: { props.selectedLeague?.area.name }
          </h4>

          <h4>
            Current seasone start by { props.selectedLeague?.currentSeason?.startDate }
          </h4>

          <h4>
            Current seasone end by { props.selectedLeague?.currentSeason?.endDate }
          </h4>

          <h4>
            {/* Already passed { props.selectedLeague } */}
          </h4>

          <NavLink to='/mathes'>See matches for {props.selectedLeague?.name}</NavLink>
        </div>
      </section>
    </main>
  )
}
