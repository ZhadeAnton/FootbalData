import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Preloader from '../Components/Preloader/Preloader'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { ITeamByCompetition } from '../Interfaces/TeamsInterfaces'
import { getTeamByCompetitionId } from '../Redux/Teams/TeamsActionCreators'
import useHistoryPush from '../Hooks/useHistory'
import LeagueTeamsPage from '../Routes/LeagueTeamsPage/LeagueTeamsPage'
import { clearLeagues } from '../Redux/Leagues/LeaguesActionCreators'

export interface ILeagueTeamContainer {
  teamByCompetition: ITeamByCompetition | null,
  handleClickByTeam: (id: number) => void
}

export default function LeagueTeamsContainer() {
  const dispatch = useAppDispatch()
  const params: any = useParams()
  const history = useHistoryPush()
  // Get league id from location for call getCompetitionById
  const leagueId = params.id

  const teamByCompetition = useAppSelector((state) => state.team.teamByCompetition)

  useEffect(() => {
    dispatch(getTeamByCompetitionId(leagueId))

    return () => {
      dispatch(clearLeagues())
    }
  }, [])

  const handleClickByTeam = (id: number) => {
    history(`/team/${id}`)
  }

  if (!teamByCompetition) return <Preloader />

  return (
    <LeagueTeamsPage
      teamByCompetition={teamByCompetition}
      handleClickByTeam={handleClickByTeam}
    />
  )
}
