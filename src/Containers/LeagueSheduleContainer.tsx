import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { ILeagueShedule } from '../Interfaces/MatchIntarfaces'
import useHistoryPush from '../Hooks/useHistory'
import {
  clearLeagues,
  getCompetitionMatchesByYear,
  getCompMatchesByDateRange,
  getMatchesByCompetitionId} from '../Redux/Leagues/LeaguesActionCreators'
import useDateFilter from '../Hooks/useDateFilter'
import LeagueShedulePage from '../Routes/LeagueShedulePage/LeagueShedulePage'
import Preloader from '../Components/Preloader/Preloader'

export interface ILeagueSheduleContainer {
  leagueShedule: ILeagueShedule,
  year: string,
  date: [string, string] | null,
  handleClickByMatch: (id: number) => void,
  handleYearChange: (year: string) => void,
  handleDateChange: (dateRange: [string, string]) => void,
  handleClearFiltering: () => void
}

export default function LeagueShuduleContainer() {
  const dispatch = useAppDispatch()
  const params: any = useParams()
  const history = useHistoryPush()
  const dateFilter = useDateFilter()

  const leagueId = params.id
  const leagueShedule = useAppSelector((state) => state.league.leagueShedule)

  useEffect(() => {
    dispatch(getCompetitionMatchesByYear(leagueId, dateFilter.year as string))

    return () => {
      dispatch(clearLeagues())
    }
  }, [dateFilter.year])

  useEffect(() => {
    if (dateFilter.date !==null) {
      dispatch(getCompMatchesByDateRange(leagueId, dateFilter.date))
    }

    return () => {
      dispatch(clearLeagues())
    }
  }, [dateFilter.date])

  const handleClearFiltering = () => {
    dispatch(getMatchesByCompetitionId(leagueId))
    dateFilter.handleClear()
  }

  const handleClickByMatch = (id: number) => {
    history(`/matches/${id}`)
  }

  if (leagueShedule === null) return <Preloader />

  return (
    <LeagueShedulePage
      year={dateFilter.year}
      date={dateFilter.date}
      leagueShedule={leagueShedule}
      handleClickByMatch={handleClickByMatch}
      handleYearChange={dateFilter.handleSetYear}
      handleDateChange={dateFilter.handleSetDate}
      handleClearFiltering={handleClearFiltering}
    />
  )
}
