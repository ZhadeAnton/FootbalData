import React, { useEffect } from 'react'

import useHistoryPush from '../Hooks/useHistory'
import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { IFnGetCompetitionById, ILeague } from '../Interfaces/LeaguesInterfaces'
import {
  clearLeagues,
  getAllLeagues,
  getCompetitionById } from '../Redux/Leagues/LeaguesActionCreators'
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

  useEffect(() => {
    dispatch(getAllLeagues())

    return () => {
      dispatch(clearLeagues())
    }
  }, [])

  const handleClickByLeague: IFnGetCompetitionById = (id) => {
    dispatch(getCompetitionById(id))
    history(`/leagues/${id}`)
  }

  if (!leagues && leagues === null) return <Preloader />

  return (
    <LeaguesPage
      leagues={leagues}
      handleClickByLeague={handleClickByLeague}
    />
  )
}
