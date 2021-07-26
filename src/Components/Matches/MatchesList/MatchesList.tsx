import React from 'react'

import './matchesList.scss'
import { IMatch } from '../../../Interfaces/MatchesIntarfaces'
import MatchItem from '../MatchItem/MatchItem'

interface Props {
  matches: Array<IMatch>,
  handleClickByMatch: (id: number) => void
}

export default function MatchesList(props: Props) {
  return (
    <nav>
      <ul>
        {
          props.matches.map((match) => (
            <MatchItem
              key={match.id.toString()}
              match={match}
              handleClickByMatch={props.handleClickByMatch}
            />
          ))
        }
      </ul>
    </nav>
  )
}
