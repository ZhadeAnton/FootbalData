import React from 'react'
import { Divider } from 'antd'

import './teamPage.scss'
import { ITeamContainer } from '../../Containers/TeamContainer'
import CompetitionHeader from '../../Components/CompetitionHeader/CompetitionHeader'
import DescriptionList from '../../Components/TeamInfoList/DescriptionList'
import TeamShirts from '../../Components/TeamShirts/TeamShirts'

export default function TeamPage(props: ITeamContainer) {
  const teamData = [
    {['Competiton name']: props.teamById?.name},
    {['Short name']: props.teamById?.shortName},
    {['TLA']: props.teamById?.tla},
    {['Founded']: props.teamById?.founded},
    {['Venue']: props.teamById?.venue},
    {['Address']: props.teamById?.address},
    {['Phone']: props.teamById?.phone},
    {['Website']: props.teamById?.website},
    {['Email']: props.teamById?.email},
  ]

  return (
    <main className='team-page'>
      <section className='container'>
        <CompetitionHeader
          competitionImage={props.teamById?.crestUrl}
          competitionName={props.teamById?.name}
          competitionVenue={props.teamById?.venue}
        />

        <TeamShirts clubColors={props.teamById!.clubColors}/>

        <Divider />

        <DescriptionList
          data={teamData}
          descTitle={`Info for ${props.teamById?.name}`}
        />
      </section>
    </main>
  )
}
