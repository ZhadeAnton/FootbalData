import React from 'react'

import './matchItem.scss'
import { IMatch } from '../../../Interfaces/MatchesIntarfaces'
import MatchDate from '../MatchDate/MatchDate'
import MatchStatus from '../MatchStatus/MatchStatus'

interface Props {
  match: IMatch
}

export default function MatchItem(props: Props) {
  return (
    <li className='match-item'>
      <div className='match-item__dates'>
        <MatchDate
          parseBy='Date'
          entryDate={props.match.utcDate}
        />

        <MatchDate
          parseBy='Time'
          entryDate={props.match.utcDate}
        />
      </div>

      <div className='match-item__status'>
        <MatchStatus status={props.match.status}/>
      </div>
    </li>
  )
}
