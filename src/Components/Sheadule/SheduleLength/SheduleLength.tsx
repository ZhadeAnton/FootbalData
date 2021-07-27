import React from 'react'

interface Props {
  sheaduleLeangth: number
}

export default function SheduleLength(props: Props) {
  return (
    <div className='shedule-length'>
      <h3 className='shedule-length__title'>
        <strong>{ props.sheaduleLeangth }</strong> matches was finded
      </h3>
    </div>
  )
}
