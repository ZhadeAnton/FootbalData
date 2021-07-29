import React from 'react'
import { Divider } from 'antd'

import './competitionPage.scss'
import { ILeagueContainer } from '../../Containers/CompetitionContainer'
import CompetitionHeader
  from '../../Components/CompetitionHeader/CompetitionHeader'
import DescriptionList from '../../Components/TeamInfoList/DescriptionList'
import BrandTitle from '../../Components/BrandTitle/BrandTitle'
import BrandButton from '../../Components/BrandButton/BrandButton'

export default function LeaugePage(props: ILeagueContainer) {
  const competitionData = [
    {['Competiton name']: props.competition?.name},
    {['Area Name']: props.competition?.area.name},
    {['Current season started']: props.competition?.currentSeason.startDate},
    {['Current season will end']: props.competition?.currentSeason.endDate},
    {['Match day']: props.competition?.currentSeason.currentMatchday},
    {['Passed seasons']: props.competition?.seasons.length},
  ]

  return (
    <main className='competition'>
      <section className='competition__wrapper container'>
        <CompetitionHeader
          competitionImage={props.competition?.emblemUrl}
          competitionName={props.competition?.name}
          competitionVenue={props.competition?.area.name}
        />

        <Divider />

        <BrandTitle style={{marginBottom: 1 + 'rem'}}>
          {`Info for ${props.competition?.name}`}
        </BrandTitle>
        <DescriptionList
          data={competitionData}
        />

        <Divider />

        <div className='competition__bottom'>
          <BrandButton onClick={props.handleGetShedule}>
            Shedule for { props.competition?.name }
          </BrandButton>

          <BrandButton onClick={props.handleClickByTeamButton}>
            Teams for { props.competition?.name }
          </BrandButton>
        </div>
      </section>
    </main>
  )
}
