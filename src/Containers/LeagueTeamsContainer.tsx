import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Preloader from '../Components/Preloader/Preloader'


import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { ITeamByCompetition } from '../Interfaces/TeamsInterfaces'
import { getTeamByCompetitionId, getTeamById } from '../Redux/Teams/TeamsActionCreators'
import LeagueTeamsPage from '../Routes/LeagueTeamsPage/LeagueTeamsPage'

export interface ILeagueTeamContainer {
  teamByCompetition: ITeamByCompetition | null,
  handleClickByTeam: (id: number) => void
}

export default function LeagueTeamsContainer() {
  const dispatch = useAppDispatch()
  const params: any = useParams()
  // Get league id from location for call getCompetitionById
  const leagueId = params.id

  const teamByCompetition = useAppSelector((state) => state.team.teamByCompetition)

  useEffect(() => {
    dispatch(getTeamByCompetitionId(leagueId))
  }, [])

  const handleClickByTeam = (id: number) => {
    dispatch(getTeamById(id))
  }

  if (!teamByCompetition) return <Preloader />

  return (
    <LeagueTeamsPage
      teamByCompetition={teamByCompetition}
      handleClickByTeam={handleClickByTeam}
    />
  )
}
