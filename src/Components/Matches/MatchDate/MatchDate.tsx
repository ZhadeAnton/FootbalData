import React from 'react'
import moment from 'moment'

import { IMatch } from '../../../Interfaces/MatchesIntarfaces'

interface Props {
  entryDate: IMatch['utcDate']
  parseBy: 'Date' | 'Time'
}

export default function MatchDate(props: Props) {
  return (
    <time>
      {
        props.parseBy === 'Date'
        ?
          moment(props.entryDate).format('MM/DD/YY')
        :
          props.parseBy === 'Time'
        ?
          moment(props.entryDate).format('h:mm:ss')
        : null
      }
    </time>
  )
}
