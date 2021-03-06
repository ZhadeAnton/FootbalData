import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Preloader from '../Components/Preloader/Preloader'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { ITeamByCompetition } from '../Interfaces/TeamInterfaces'
import {
  getCompMatchesByYear } from '../Redux/Teams/TeamsActionCreators'
import useHistoryPush from '../Hooks/useHistory'
import useDateFilter from '../Hooks/useDateFilter'
import { clearFilter } from '../Redux/Filterlist/FilterListActionCreators'
import { clearLeagues } from '../Redux/Leagues/LeaguesActionCreators'
import LeagueTeamsPage from '../Routes/LeagueTeamsPage/LeagueTeamsPage'

export interface ILeagueTeamContainer {
  year: string,
  teams: ITeamByCompetition['teams'] | null,
  competition: ITeamByCompetition['competition'] | null,
  teamByCompetition: ITeamByCompetition | null,
  handleClickByTeam: (id: number) => void,
  handleYearChange: (year: string) => void
}

export default function LeagueTeamsContainer() {
  const dispatch = useAppDispatch()
  const params: any = useParams()
  const dateFilter = useDateFilter()
  const history = useHistoryPush()
  const leagueId = params.id

  const teamByCompetition = useAppSelector((state) => state.team.teamByCompetition)
  const searchTerm = useAppSelector((state) => state.filter.searchTerm)

  const teams = teamByCompetition?.teams
  const competition = teamByCompetition?.competition
  const filteredTeams = teams?.filter((team) => {
    return team.name
        .toLowerCase()
        .includes(searchTerm)
  })

  useEffect(() => {
    dispatch(getCompMatchesByYear(leagueId, dateFilter.year as string))

    return () => {
      dispatch(clearLeagues())
      dispatch(clearFilter())
    }
  }, [dateFilter.year])

  const handleClickByTeam = (id: number) => {
    history(`/team/${id}`)
  }

  if (teamByCompetition === null) return <Preloader />

  return (
    <LeagueTeamsPage
      teams={filteredTeams!}
      competition={competition!}
      year={dateFilter.year}
      teamByCompetition={teamByCompetition}
      handleClickByTeam={handleClickByTeam}
      handleYearChange={dateFilter.handleSetYear}
    />
  )
}
