import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { ILeagueShedule } from '../Interfaces/MatchIntarfaces'
import useHistoryPush from '../Hooks/useHistory'
import {
  clearLeagues, getCompetitionMatchesByYear} from '../Redux/Leagues/LeaguesActionCreators'
import useYearFilter from '../Hooks/useYearFilter'
import LeagueShedulePage from '../Routes/LeagueShedulePage/LeagueShedulePage'
import Preloader from '../Components/Preloader/Preloader'

export interface ILeagueSheduleContainer {
  leagueShedule: ILeagueShedule,
  year: string,
  handleClickByMatch: (id: number) => void,
  handleDateChange: (year: string) => void
}

export default function LeagueShuduleContainer() {
  const dispatch = useAppDispatch()
  const params: any = useParams()
  const history = useHistoryPush()
  const yearFilter = useYearFilter()

  const leagueId = params.id
  const leagueShedule = useAppSelector((state) => state.league.leagueShedule)

  useEffect(() => {
    dispatch(getCompetitionMatchesByYear(leagueId, yearFilter.year))

    return () => {
      dispatch(clearLeagues())
    }
  }, [yearFilter.year])

  const handleClickByMatch = (id: number) => {
    history(`/matches/${id}`)
  }

  if (leagueShedule === null) return <Preloader />

  return (
    <LeagueShedulePage
      year={yearFilter.year}
      leagueShedule={leagueShedule}
      handleClickByMatch={handleClickByMatch}
      handleDateChange={yearFilter.handleSetYear}
    />
  )
}
