import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { IMatch } from '../Interfaces/MatchesIntarfaces'
import { getMatchesByCompetitionId } from '../Redux/Leagues/LeaguesActionCreators'
import LeagueShudule from '../Routes/LeagueShudule/LeagueShudule'

export interface ILeagueSheduleContainer {
  matches: Array<IMatch>
}

export default function LeagueShuduleContainer() {
  const dispatch = useAppDispatch()
  const params = useParams()

  const leagueId = params.id
  const matches = useAppSelector((state) => state.league.mathesByCompetition)

  useEffect(() => {
    dispatch(getMatchesByCompetitionId(leagueId))
  }, [])

  return (
    <LeagueShudule
      matches={matches}
    />
  )
}
