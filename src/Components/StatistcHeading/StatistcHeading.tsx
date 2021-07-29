import React from 'react'

import './statistcHeading.scss'

interface Props {
  heading: any
}

export default function StatistcHeading(props: Props) {
  return (
    <h3 className='statistic-heading'>
      { props.heading }
    </h3>
  )
}
