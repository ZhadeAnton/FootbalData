import React from 'react'
import { Button, Divider } from 'antd'

import './teamPage.scss'
import { ITeamContainer } from '../../Containers/TeamContainer'
import CompetitionHeader from '../../Components/CompetitionHeader/CompetitionHeader'
import DescriptionList from '../../Components/TeamInfoList/DescriptionList'
import TeamShirts from '../../Components/TeamShirts/TeamShirts'
import TeamSquad from '../../Components/Teams/TeamSquad/TeamSquad'
import BackTopButton from '../../Components/BackButton/BackButton';
import BrandTitle from '../../Components/BrandTitle/BrandTitle'

export default function TeamPage(props: ITeamContainer) {
  const teamData = [
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
      <section className='team-page__wrapper container'>
        <CompetitionHeader
          competitionImage={props.teamById?.crestUrl}
          competitionName={props.teamById?.name}
          competitionVenue={props.teamById?.venue}
        />

        <div className='team-page__shirts'>
          <TeamShirts clubColors={props.teamById!.clubColors}/>
        </div>

        <Button
          type='primary'
          onClick={props.handleClickByShedule}
        >
          Shedule for {props.teamById?.name}
        </Button>

        <Divider />

        <BrandTitle style={{marginBottom: 1 + 'rem'}}>
          {`Info for ${props.teamById?.name}`}
        </BrandTitle>
        <DescriptionList
          data={teamData}
        />

        <Divider />

        <BrandTitle>Squad</BrandTitle>
        <TeamSquad squad={props.teamById!.squad} />

        <BackTopButton />
      </section>
    </main>
  )
}
