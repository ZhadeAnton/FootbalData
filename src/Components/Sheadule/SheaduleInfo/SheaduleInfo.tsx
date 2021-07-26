import React from 'react'

import './sheaduleInfo.scss'
import { ICompetition } from '../../../Interfaces/LeaguesInterfaces'

interface Props {
  competitionName: ICompetition['name'],
  competitionArea: ICompetition['area']['name']
}

export default function SheaduleInfo(props: Props) {
  return (
    <div className='shedule-info'>
      <h1 className='shedule-info__title'>
          Shedule for <strong>{ props.competitionName }</strong> league
      </h1>

      <h3 className='shedule-info__title'>
          Location: <strong>{ props.competitionArea}</strong>
      </h3>
    </div>
  )
}
