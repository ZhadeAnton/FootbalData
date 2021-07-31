import React from 'react'

import './matchItem.scss'
import { IMatch } from '../../../Interfaces/MatchIntarfaces'

interface Props {
  awayTeamScore: IMatch['score']['fullTime']['awayTeam'] | null,
  homeyTeamScore: IMatch['score']['fullTime']['homeTeam'] | null,
  awayTeamName: IMatch['awayTeam']['name'],
  homeTeamName: IMatch['homeTeam']['name']
}

export default function MatchItem(props: Props) {
  return (
    <div className='match-item'>
      <h4 className='match-item__title'>
        { props.awayTeamName }
      </h4>

      <span className='match-item__separator'>
        { props.awayTeamScore &&
            props.awayTeamScore
        }
          :
        { props.homeyTeamScore &&
            props.homeyTeamScore
        }
      </span>

      <h4 className='match-item__title'>
        { props.homeTeamName }
      </h4>
    </div>
  )
}
