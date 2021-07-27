import React from 'react'
import { Divider } from 'antd'

import './matchByIdPage.scss'
import { IMatchInDetailsContainer } from '../../Containers/MatchByIdContainer'
import MatchHeadToHead from '../../Components/Matches/MatchHeadToHead/MatchHeadToHead'
import MatchDate from '../../Components/Matches/MatchDate/MatchDate'
import MatchStatus from '../../Components/Matches/MatchStatus/MatchStatus'
import CompetitionInfo from '../../Components/Competition/CompetitionInfo/CompetitionInfo'

export default function MatchByIdPage(props: IMatchInDetailsContainer) {
  return (
    <main className='match-details'>
      <section className='container'>
        <div className='match-details__date'>
          <MatchDate
            entryDate={props.matchInDetails.match.utcDate}
            parseBy='Date'
          />

          <MatchDate
            entryDate={props.matchInDetails.match.utcDate}
            parseBy='Time'
          />
        </div>

        <CompetitionInfo
          competitionImage={props.matchInDetails.match.competition.area.ensignUrl}
          competitionName={props.matchInDetails.match.competition.area.name}
          competitionVenue={props.matchInDetails.match.venue}
        />

        <div className='match-details__status'>
          <MatchStatus status={props.matchInDetails.match.status}/>
        </div>

        <div className='match-details__teams'>
          <h3 className='match-details__teams--tag'>
            {props.matchInDetails.head2head.awayTeam.name}
          </h3>

          <span className='match-details__teams--separator'>
            :
          </span>

          <h3 className='match-details__teams--tag'>
            {props.matchInDetails.head2head.homeTeam.name}
          </h3>
        </div>

        <Divider />

        <section className='match-details__info'>
          <h3 className='match-details__info--title'>
            Total matches: &nbsp;
            {props.matchInDetails.head2head.numberOfMatches}
          </h3>

          <h3 className='match-details__info--title'>
            Total goals: &nbsp;
            {props.matchInDetails.head2head.totalGoals}
          </h3>
        </section>

        <Divider />
        <h2 className='match-details__heading'>
        Head2Head statistic
        </h2>

        <MatchHeadToHead head2head={props.matchInDetails.head2head}/>
      </section>
    </main>
  )
}
