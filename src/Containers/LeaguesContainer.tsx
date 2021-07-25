import React, { useEffect } from 'react'

import useHistoryPush from '../Hooks/useHistory'
import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { IFnGetCompetitionById, ILeague } from '../Interfaces/LeaguesInterfaces'
import { getAllLeagues, getCompetitionById } from '../Redux/Leagues/LeaguesActionCreators'
import LeaguesPage from '../Routes/LeaguesPage/LeaguesPage'

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
  }, [])

  const handleClickByLeague: IFnGetCompetitionById = (id) => {
    dispatch(getCompetitionById(id))
    history(`/leagues/${id}`)
  }

  return (
    <LeaguesPage
      leagues={leagues}
      handleClickByLeague={handleClickByLeague}
    />
  )
}
