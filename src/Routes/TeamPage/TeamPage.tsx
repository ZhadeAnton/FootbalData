import React from 'react'
import { Divider } from 'antd'

import './teamPage.scss'
import { ITeamContainer } from '../../Containers/TeamContainer'
import CompetitionHeader from '../../Components/CompetitionHeader/CompetitionHeader'
import DescriptionList from '../../Components/TeamInfoList/DescriptionList'

export default function TeamPage(props: ITeamContainer) {
  const {
    address, name, shortName, founded,
    tla, phone, website, email } = props.teamById!

  const teamData = [
    {address}, {founded}, {name}, {shortName}, {tla},
    {phone}, {website}, {email}]

  return (
    <main>
      <section className='container'>
        <CompetitionHeader
          competitionImage={props.teamById?.crestUrl}
          competitionName={props.teamById?.name}
          competitionVenue={props.teamById?.venue}
        />

        <Divider />

        <DescriptionList
          data={teamData}
          descTitle={`Info for ${props.teamById?.name}`}
        />
      </section>
    </main>
  )
}
