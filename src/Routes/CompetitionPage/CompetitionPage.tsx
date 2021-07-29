import React from 'react'

import './competitionPage.scss'
import { ILeagueContainer } from '../../Containers/CompetitionContainer'
import CompetitionHeader
  from '../../Components/CompetitionHeader/CompetitionHeader'
import DescriptionList from '../../Components/TeamInfoList/DescriptionList'

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
        />

        <DescriptionList
          data={competitionData}
          descTitle={`Info for ${props.competition?.name}`}
        />

        <div className='competition__bottom'>
          <button
            className='competition__bottom--link'
            onClick={props.handleGetShedule}
          >
            Sheadule for { props.competition?.name }
          </button>

          <button
            className='competition__bottom--link'
            onClick={props.handleClickByTeamButton}
          >
            Teams for { props.competition?.name }
          </button>
        </div>
      </section>
    </main>
  )
}
