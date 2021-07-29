import React from 'react'
import BrandDescription from '../../Containers/BrandDescription/BrandDescription'
import BrandHeading from '../BrandHeading/BrandHeading'

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
        <BrandHeading>
          { props.competitionName }
        </BrandHeading>

        { props.competitionVenue &&
        <BrandDescription>
          { props.competitionVenue }
        </BrandDescription>
        }
      </div>
    </section>
  )
}
