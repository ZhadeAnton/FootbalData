import React from 'react'

import './matchWinner.scss'

interface Props {
  winner: string,
}

export default function MatchWinner(props: Props) {
  return (
    <>
      {
          props.winner !== null && props.winner.length
        ?
          <h6 className='match-winner__title'>
            { props.winner.toLocaleLowerCase() }
          </h6>
        :
          null
      }
    </>
  )
}
