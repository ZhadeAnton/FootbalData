import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Preloader from '../Components/Preloader/Preloader'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { ILeagueShedule } from '../Interfaces/MatchesIntarfaces'
import LeagueShedule from '../Routes/LeagueShedule/LeagueShedule'
import {
  clearLeagues,
  getMatchesByCompetitionId } from '../Redux/Leagues/LeaguesActionCreators'
import { getMatchById } from '../Redux/Matches/MatchesActionCreators'

export interface ILeagueSheduleContainer {
  leagueShedule: ILeagueShedule,
  handleClickByMatch: (id: number) => void
}

export default function LeagueShuduleContainer() {
  const dispatch = useAppDispatch()
  const params: any = useParams()

  const leagueId = params.id
  const leagueShedule = useAppSelector((state) => state.league.leagueShedule)

  useEffect(() => {
    dispatch(getMatchesByCompetitionId(leagueId))

    return () => {
      dispatch(clearLeagues())
    }
  }, [])

  const handleClickByMatch = (id: number) => {
    dispatch(getMatchById(id))
  }

  if (leagueShedule === null) return <Preloader />

  return (
    <LeagueShedule
      leagueShedule={leagueShedule}
      handleClickByMatch={handleClickByMatch}
    />
  )
}
