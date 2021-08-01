import React from 'react'
import { Image } from 'antd';

import './competitionHeader.scss'

interface Props {
  competitionImage?: string | null | undefined,
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
            <Image
              className='competition-info__image-wrapper--image'
              src={ props.competitionImage }
              alt={ props.competitionName }
            />
        :
          <Image
            className='competition__header--image'
            src='https://crests.football-data.org/EUR.svg'
            alt="UFL"
          />
        }
      </div>

      <div className='competition-info__content'>
        <h2 className='competition-info__content--name'>
          { props.competitionName }
        </h2>

        { props.competitionVenue &&
        <h4 className='competition-info__content--venue'>
          {`Venue: ${props.competitionVenue}` }
        </h4>
        }
      </div>
    </section>
  )
}
