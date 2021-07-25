import React from 'react'

import './matchItem.scss'
import { IMatch } from '../../../Interfaces/MatchesIntarfaces'

interface Props {
  match: IMatch
}

export default function MatchItem(props: Props) {
  console.log(props.match)
  return (
    <li>
      { props.match.competition.area.name }
    </li>
  )
}
