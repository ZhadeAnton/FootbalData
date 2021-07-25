import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { ICompetition } from '../Interfaces/LeaguesInterfaces'
import { getCompetitionById } from '../Redux/Leagues/LeaguesActionCreators'
import useHistoryPush from '../Hooks/useHistory'
import LeaguePage from '../Routes/CompetitionPage/CompetitionPage'

export interface ILeagueContainer {
  competition: ICompetition | null,
  handleClickByTeamsLink: () => void
}

export default function CompetitionContainer() {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const history = useHistoryPush()

  // Get league id from location for call getCompetitionById
  const leagueId = (location.pathname.slice(-4))
  const competition = useAppSelector((state) => state.league.competition!)

  useEffect(() => {
    dispatch(getCompetitionById(+leagueId))
  }, [])

  const handleClickByTeamsLink = () => {
    history(`/leagues/${leagueId}/mathes`)
  }

  if (!competition && competition === null) return <div>Loading</div>

  return (
    <LeaguePage
      competition={competition}
      handleClickByTeamsLink={handleClickByTeamsLink}
    />
  )
}
