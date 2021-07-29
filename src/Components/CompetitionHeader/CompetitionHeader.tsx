import React from 'react'
import { Image } from 'antd';

import BrandDescription from '../../Containers/BrandDescription/BrandDescription'
import BrandHeading from '../BrandHeading/BrandHeading'

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
            // eslint-disable-next-line max-len
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/LaLiga_Santander_%282%29.svg/220px-LaLiga_Santander_%282%29.svg.png'
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
