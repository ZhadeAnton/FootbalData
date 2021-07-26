import React from 'react'

import './matchItem.scss'
import { IMatch } from '../../../Interfaces/MatchesIntarfaces'
import MatchDate from '../MatchDate/MatchDate'
import MatchStatus from '../MatchStatus/MatchStatus'
import MatchTeam from '../MatchTeam/MatchTeam'
import MatchScore from '../MatchScore/MatchScore'
import MatchWinner from '../MatchWinner/MatchWinner'

interface Props {
  match: IMatch,
  handleClickByMatch: (id: number) => void
}

export default function MatchItem(props: Props) {
  return (
    <li className='match-item'
      onClick={() => props.handleClickByMatch(props.match.id)}
    >
      <div className='match-item__dates'>
        <div className='match-item__dates--date'>
          <MatchDate
            parseBy='Date'
            entryDate={props.match.utcDate}
          />
        </div>

        <div className='match-item__time'>
          <MatchDate
            parseBy='Time'
            entryDate={props.match.utcDate}
          />
        </div>
      </div>

      <div className='match-item__status'>
        <MatchStatus status={props.match.status}/>
      </div>

      <div className='match-item__teams'>
        <MatchTeam team={props.match.awayTeam}/>
        <span className='match-item__teams--separator'>
          vs
        </span>
        <MatchTeam team={props.match.homeTeam}/>
      </div>

      <div className='match-item__score'>
        <MatchScore score={props.match.score}/>
      </div>

      <div className='match-item__info'>
        <MatchWinner
          score={props.match.score}
          awayTeam={props.match.awayTeam}
          homeTeam={props.match.homeTeam}
        />
      </div>
    </li>
  )
}
