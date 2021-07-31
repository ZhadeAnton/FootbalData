import React from 'react'

interface Props {
  year: string
}

export default function YearTitle(props: Props) {
  return (
    <h6 className='date-filter__info--title'>
          Filtered by year:&nbsp;

      <time>
        { props.year }
      </time>
    </h6>
  )
}
