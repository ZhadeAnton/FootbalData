import React from 'react'

import './matchStatus.scss'
import { IMatch } from '../../../Interfaces/MatchesIntarfaces'

interface Props {
  status: IMatch['status']
}

export default function MatchStatus(props: Props) {
  return (
    <div className={`match-status match-status__${props.status.toLocaleLowerCase()}`}>
      <h6 className='match-status__title'>
        { props.status }
      </h6>
    </div>
  )
}
