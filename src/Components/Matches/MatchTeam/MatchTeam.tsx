import React from 'react'

import './matchTeam.scss'
import { IMatch } from '../../../Interfaces/MatchesIntarfaces'

interface Props {
  team: IMatch['awayTeam'] | IMatch['homeTeam']
}

export default function MatchTeam(props: Props) {
  return (
    <div className='match-team'>
      { props.team.name }
    </div>
  )
}
