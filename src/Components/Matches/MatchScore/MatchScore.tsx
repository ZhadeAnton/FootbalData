import React from 'react'

import './matchScore.scss'
import { IMatch } from '../../../Interfaces/MatchesIntarfaces'

interface Props {
  score: IMatch['score']
}

export default function MatchScore(props: Props) {
  return (
    <>
      {
        props.score.winner &&
        <div className='match-score'>
          <div className='match-score__info'>
            <span className='match-score__info--number'>
              { props.score.fullTime.awayTeam }
            </span>

            <span className='match-score__info--separator'>
              :
            </span>

            <span className='match-score__info--number'>
              { props.score.fullTime.homeTeam }
            </span>
          </div>
        </div>
      }
    </>
  )
}
