import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { IMatch } from '../Interfaces/MatchIntarfaces'
import {
  clearMatches,
  getAllMatches, getMatchesByDateRange } from '../Redux/Matches/MatchesActionCreators'
import { clearLeagues } from '../Redux/Leagues/LeaguesActionCreators'
import useHistoryPush from '../Hooks/useHistory'
import useDateFilter from '../Hooks/useDateFilter'
import MatchesPage from '../Routes/MatchesPage/MatchesPage'
import Preloader from '../Components/Preloader/Preloader'

export interface IMatchesContainer {
  matches: Array<IMatch>,
  year: string,
  date: [string, string] | null,
  handleDateChange: (dateRange: [string, string]) => void,
  handleYearChange: (year: string) => void,
  handleClickByMatch: (id: number) => void,
  handleClearFiltering: () => void
}

export default function MatchesContainer() {
  const dispatch = useAppDispatch()
  const dateFilter = useDateFilter()
  const history = useHistoryPush()

  const matches = useAppSelector((state) => state.matches.matches)

  useEffect(() => {
    dispatch(getAllMatches())

    return () => {
      dispatch(clearLeagues())
      dispatch(clearMatches())
    }
  }, [])

  useEffect(() => {
    if (dateFilter.date !== null) {
      dispatch(getMatchesByDateRange(dateFilter.date))
    }

    return () => {
      dispatch(clearMatches())
    }
  }, [dateFilter.date])

  const handleClickByMatch = (id: number) => {
    history(`/matches/${id}`)
  }

  const handleClearFiltering = () => {
    dispatch(getAllMatches())
    dateFilter.handleClear()
  }

  if (matches === []) return <Preloader />

  return (
    <MatchesPage
      year={dateFilter.year}
      date={dateFilter.date}
      matches={matches}
      handleClickByMatch={handleClickByMatch}
      handleYearChange={dateFilter.handleSetYear}
      handleDateChange={dateFilter.handleSetDate}
      handleClearFiltering={handleClearFiltering}
    />
  )
}
