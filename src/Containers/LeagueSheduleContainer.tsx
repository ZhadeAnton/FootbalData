import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { ILeagueShedule } from '../Interfaces/MatchesIntarfaces'
import useHistoryPush from '../Hooks/useHistory'
import {
  clearLeagues,
  getMatchesByCompetitionId } from '../Redux/Leagues/LeaguesActionCreators'
import LeagueShedule from '../Routes/LeagueShedule/LeagueShedule'
import Preloader from '../Components/Preloader/Preloader'

export interface ILeagueSheduleContainer {
  leagueShedule: ILeagueShedule,
  handleClickByMatch: (id: number) => void
}

export default function LeagueShuduleContainer() {
  const dispatch = useAppDispatch()
  const params: any = useParams()
  const history = useHistoryPush()

  const leagueId = params.id
  const leagueShedule = useAppSelector((state) => state.league.leagueShedule)

  useEffect(() => {
    dispatch(getMatchesByCompetitionId(leagueId))

    return () => {
      dispatch(clearLeagues())
    }
  }, [])

  const handleClickByMatch = (id: number) => {
    history(`/matches/${id}`)
  }

  if (leagueShedule === null) return <Preloader />

  return (
    <LeagueShedule
      leagueShedule={leagueShedule}
      handleClickByMatch={handleClickByMatch}
    />
  )
}
