import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch } from '../Hooks/usePreTypedHook'
import { getTeamByCompetitionId } from '../Redux/Teams/TeamsActionCreators'
import LeagueTeamsPage from '../Routes/LeagueTeamsPage/LeagueTeamsPage'

export default function LeagueTeamsContainer() {
  const dispatch = useAppDispatch()
  const params: any = useParams()

  // Get league id from location for call getCompetitionById
  const leagueId = params.id

  useEffect(() => {
    dispatch(getTeamByCompetitionId(leagueId))
  })

  return (
    <LeagueTeamsPage />
  )
}
