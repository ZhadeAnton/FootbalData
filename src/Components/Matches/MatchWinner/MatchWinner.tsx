import React from 'react'

import './matchWinner.scss'
import { IMatch } from '../../../Interfaces/MatchesIntarfaces'

interface Props {
  score: IMatch['score'],
  homeTeam: IMatch['homeTeam'],
  awayTeam: IMatch['awayTeam']
}

export default function MatchWinner(props: Props) {
  return (
    <>
      {
        props.score.winner
        ?
          <div className='match-winner'>
            {
            props.score.winner === 'HOME_TEAM'
          ?
            <h6 className='match-winner__title'>
              { props.homeTeam.name }
            </h6>
          :
            props.score.winner === 'AWAY_TEAM'
          ?
            <h6 className='match-winner__title'>
              { props.awayTeam.name }
            </h6>
          :
            <h6 className='match-winner__title match-winner__draw'>
              Draw
            </h6>
            }
          </div>
        :
          <h5 className='match-winner__title'>
            TBA
          </h5>
      }
    </>
  )
}
