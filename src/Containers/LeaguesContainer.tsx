import React, { useEffect } from 'react'

import useHistoryPush from '../Hooks/useHistory'
import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { IFnGetCompetitionById, ILeague } from '../Interfaces/LeagueInterfaces'
import {
  clearLeagues,
  getAllLeagues,
  getCompetitionById } from '../Redux/Leagues/LeaguesActionCreators'
import { clearFilter } from '../Redux/Filterlist/FilterListActionCreators'
import LeaguesPage from '../Routes/LeaguesPage/LeaguesPage'
import Preloader from '../Components/Preloader/Preloader'

export interface ILeaguesContainer {
  leagues: Array<ILeague>,
  handleClickByLeague: IFnGetCompetitionById
}

export default function LeaguesContainer() {
  const dispatch = useAppDispatch()
  const history = useHistoryPush()

  const leagues = useAppSelector((state) => state.league.leagues)
  const searchTerm = useAppSelector((state) => state.filter.searchTerm)

  const filteredLeagues = leagues.filter((league) => {
    return league.name
        .toLowerCase()
        .includes(searchTerm)
  })

  useEffect(() => {
    dispatch(getAllLeagues())

    return () => {
      dispatch(clearLeagues())
      dispatch(clearFilter())
    }
  }, [])

  const handleClickByLeague: IFnGetCompetitionById = (id) => {
    dispatch(getCompetitionById(id))
    history(`/leagues/${id}`)
  }

  if (!leagues && leagues === null) return <Preloader />

  return (
    <LeaguesPage
      leagues={filteredLeagues}
      handleClickByLeague={handleClickByLeague}
    />
  )
}
