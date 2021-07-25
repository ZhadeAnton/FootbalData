import React from 'react'
import { IMatch } from '../../../Interfaces/MatchesIntarfaces'

interface Props {
  team: IMatch['awayTeam'] | IMatch['homeTeam']
}

export default function MatchTeam(props: Props) {
  return (
    <div>
      { props.team.name }
    </div>
  )
}
