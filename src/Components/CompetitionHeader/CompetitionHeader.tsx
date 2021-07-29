import React from 'react'

import './competitionHeader.scss'

interface Props {
  competitionImage: string | null | undefined,
  competitionName: string | undefined,
  competitionVenue?: string | null | undefined
}

export default function CompetitionHeader(props: Props) {
  return (
    <section className='competition-info'>
      <div className='competition-info__image-wrapper'>
        {
          props.competitionImage
          ?
          <img
            className='competition-info__image-wrapper--image'
            src={ props.competitionImage }
            alt={ props.competitionName }
          />
        :
          <img
            className='competition__header--image'
            src='https://i.ibb.co/12hkB1M/image-1.png'
            alt="UFL"
          />
        }
      </div>

      <div className='competition-info__content'>
        <h1 className='competition-info__content--name'>
          { props.competitionName }
        </h1>

        { props.competitionVenue &&
        <h3 className='competition-info__content--venue'>
          { props.competitionVenue }
        </h3>
        }
      </div>
    </section>
  )
}
