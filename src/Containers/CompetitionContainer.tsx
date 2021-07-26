import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { ICompetition } from '../Interfaces/LeaguesInterfaces'
import { getCompetitionById } from '../Redux/Leagues/LeaguesActionCreators'
import useHistoryPush from '../Hooks/useHistory'
import LeaguePage from '../Routes/CompetitionPage/CompetitionPage'

export interface ILeagueContainer {
  competition: ICompetition | null,
  handleGetShedule: () => void
}

export default function CompetitionContainer() {
  const dispatch = useAppDispatch()
  const history = useHistoryPush()
  const params: any = useParams()

  // Get league id from location for call getCompetitionById
  const leagueId = params.id

  const competition = useAppSelector((state) => state.league.competition!)

  useEffect(() => {
    dispatch(getCompetitionById(leagueId))
  }, [])

  const handleGetShedule = () => {
    history(`/leagues/${leagueId}/matches`)
  }

  if (!competition && competition === null) return <div>Loading</div>

  return (
    <LeaguePage
      competition={competition}
      handleGetShedule={handleGetShedule}
    />
  )
}
