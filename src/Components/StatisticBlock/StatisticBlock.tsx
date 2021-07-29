import React from 'react'

import './statisticBlock.scss'
import StatistcHeading from '../StatistcHeading/StatistcHeading'

interface Props {
  heading: string | string[],
  info: any
}

export default function StatisticBlock(props: Props) {
  return (
    <div className='statistic-block'>
      <StatistcHeading heading={props.heading}/>

      <span className='statistic-block__separator'>
        :
      </span>

      <StatistcHeading heading={props.info}/>
    </div>
  )
}
