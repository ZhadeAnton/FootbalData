import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { ICompetition } from '../Interfaces/LeaguesInterfaces'
import { getCompetitionById } from '../Redux/Leagues/LeaguesActionCreators'
import LeaguePage from '../Routes/LeaguePage/LeaguePage'

export interface ILeagueContainer {
  selectedLeague: ICompetition | null
}

export default function LeagueContainer() {
  const dispatch = useAppDispatch()
  const location = useLocation()

  // Get league id from location for call getCompetitionById
  const leagueId = (location.pathname.slice(-4))
  const selectedLeague = useAppSelector((state) => state.league.competition)

  useEffect(() => {
    dispatch(getCompetitionById(+leagueId))
  }, [])

  return (
    <LeaguePage
      selectedLeague={selectedLeague}
    />
  )
}
