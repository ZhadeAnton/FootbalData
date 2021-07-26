import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Preloader from '../Components/Preloader/Preloader'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { ILeagueShedule } from '../Interfaces/MatchesIntarfaces'
import { getMatchesByCompetitionId } from '../Redux/Leagues/LeaguesActionCreators'
import LeagueShedule from '../Routes/LeagueShedule/LeagueShedule'

export interface ILeagueSheduleContainer {
  leagueShedule: ILeagueShedule
}

export default function LeagueShuduleContainer() {
  const dispatch = useAppDispatch()
  const params: any = useParams()

  const leagueId = params.id
  const leagueShedule = useAppSelector((state) => state.league.leagueShedule)

  useEffect(() => {
    dispatch(getMatchesByCompetitionId(leagueId))
  }, [])

  if (leagueShedule === null) return <Preloader />

  return (
    <LeagueShedule
      leagueShedule={leagueShedule}
    />
  )
}
