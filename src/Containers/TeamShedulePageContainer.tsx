import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { ITeamShedule } from '../Interfaces/TeamInterfaces'
import {
  clearTeams,
  getTeamMatchesByDateRange, getTeamShedule } from '../Redux/Teams/TeamsActionCreators'
import useHistoryPush from '../Hooks/useHistory'
import useDateFilter from '../Hooks/useDateFilter'
import TeamShedulePage from '../Routes/TeamShedulePage/TeamShedulePage'
import Preloader from '../Components/Preloader/Preloader'

export interface ITeamSheduleContainer {
  teamShedule: ITeamShedule | null,
  year: string,
  date: [string, string] | null,
  handleDateChange: (dateRange: [string, string]) => void,
  handleClickByMatch: (id: number) => void,
  handleClearFiltering: () => void
}

export default function TeamShedulePageContainer() {
  const dispatch = useAppDispatch()
  const history = useHistoryPush()
  const dateFilter = useDateFilter()
  const params: any = useParams()
  const teamId = params.id

  const teamShedule = useAppSelector((state) => state.team.teamShedule)

  useEffect(() => {
    dispatch(getTeamShedule(teamId))
  }, [])

  useEffect(() => {
    if (dateFilter.date !==null) {
      dispatch(getTeamMatchesByDateRange(teamId, dateFilter.date))
    }

    return () => {
      dispatch(clearTeams())
    }
  }, [dateFilter.date])

  const handleClearFiltering = () => {
    dispatch(getTeamShedule(teamId))
    dateFilter.handleClear()
  }

  const handleClickByMatch = (id: number) => {
    history(`/matches/${id}`)
  }

  if (teamShedule === null) return <Preloader />

  return (
    <TeamShedulePage
      year={dateFilter.year}
      date={dateFilter.date}
      teamShedule={teamShedule}
      handleDateChange={dateFilter.handleSetDate}
      handleClickByMatch={handleClickByMatch}
      handleClearFiltering={handleClearFiltering}
    />
  )
}
