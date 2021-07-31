import React from 'react'
import { Divider } from 'antd'

import './matchByIdPage.scss'
import { IMatchInDetailsContainer } from '../../Containers/MatchByIdContainer'
import MatchHeadToHead from '../../Components/Matches/MatchHeadToHead/MatchHeadToHead'
import MatchStatus from '../../Components/Matches/MatchStatus/MatchStatus'
import CompetitionHeader from '../../Components/CompetitionHeader/CompetitionHeader'
import DescriptionList from '../../Components/TeamInfoList/DescriptionList'
import MatchDate from '../../Components/Matches/MatchDate/MatchDate'
import BrandTitle from '../../Components/BrandTitle/BrandTitle'
import { getMatchScore, getWinner, parseFromCaps } from '../../Utils/MatchUtils'
import MatchItem from '../../Components/Matches/MatchItem/MatchItem'

export default function MatchByIdPage(props: IMatchInDetailsContainer) {
  const date = <MatchDate
    entryDate={props.matchInDetails.match.utcDate}
    parseBy='Date'
  />

  const seasonStart = <MatchDate
    entryDate={props.matchInDetails.match.season.startDate}
    parseBy='Date'
  />

  const seasonEnd = <MatchDate
    entryDate={props.matchInDetails.match.season.endDate}
    parseBy='Date'
  />

  const winner = getWinner(
      props.matchInDetails.match.score.winner,
      props.matchInDetails.match.awayTeam.name,
      props.matchInDetails.match.homeTeam.name)

  const duration = parseFromCaps(props.matchInDetails.match.score.duration)

  const halfTime = getMatchScore(
      props.matchInDetails.match.score.halfTime.awayTeam,
      props.matchInDetails.match.score.halfTime.homeTeam)

  const fullTime = getMatchScore(
      props.matchInDetails.match.score.fullTime.awayTeam,
      props.matchInDetails.match.score.fullTime.homeTeam)

  const matchData = [
    {['Date']: date},
    {['Match Day']: props.matchInDetails.match.season.currentMatchday},
    {['Groupe']: props.matchInDetails.match.group},
    {['Winner']: winner},
    {['Duration']: duration},
    {['Half Time']: halfTime},
    {['Full Time']: fullTime},
    {['Season started']: seasonStart},
    {['Season will end']: seasonEnd},
    {['Attendance']: props.matchInDetails.match.attendance},
  ]

  return (
    <main className='match-details'>
      <section className='container'>
        <CompetitionHeader
          competitionImage={props.matchInDetails.match.competition.area.ensignUrl}
          competitionName={props.matchInDetails.match.competition.area.name}
          competitionVenue={props.matchInDetails.match.competition.name}
        />

        <div className='match-details__match-item'>
          <MatchItem
            awayTeamScore={props.matchInDetails.match.score.fullTime.awayTeam}
            homeyTeamScore={props.matchInDetails.match.score.fullTime.homeTeam}
            awayTeamName={props.matchInDetails.match.awayTeam.name}
            homeTeamName={props.matchInDetails.match.homeTeam.name}
          />
        </div>

        <div className='match-details__status'>
          <MatchStatus status={props.matchInDetails.match.status}/>
        </div>

        <Divider />

        <BrandTitle style={{marginBottom: 1 + 'rem'}}>
          Details of match
        </BrandTitle>

        <DescriptionList data={matchData} />

        <Divider />

        <BrandTitle style={{marginBottom: 1 + 'rem'}}>
          Head2Head statistic
        </BrandTitle>

        <MatchHeadToHead head2head={props.matchInDetails.head2head} />
      </section>
    </main>
  )
}
