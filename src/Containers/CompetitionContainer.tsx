import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { ICompetition } from '../Interfaces/LeaguesInterfaces'
import { getCompetitionById } from '../Redux/Leagues/LeaguesActionCreators'
import LeaguePage from '../Routes/LeaguePage/LeaguePage'

export interface ILeagueContainer {
  competition: ICompetition | null
}

export default function CompetitionContainer() {
  const dispatch = useAppDispatch()
  const location = useLocation()

  // Get league id from location for call getCompetitionById
  const leagueId = (location.pathname.slice(-4))
  const competition = useAppSelector((state) => state.league.competition!)

  useEffect(() => {
    dispatch(getCompetitionById(+leagueId))
  }, [leagueId])

  if (!competition && competition === null) return <div>Loading</div>

  return (
    <LeaguePage
      competition={competition}
    />
  )
}
