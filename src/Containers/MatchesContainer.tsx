import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { IMatch } from '../Interfaces/MatchesIntarfaces'
import { clearMatches, getAllMatches } from '../Redux/Matches/MatchesActionCreators'
import { clearLeagues } from '../Redux/Leagues/LeaguesActionCreators'
import useHistoryPush from '../Hooks/useHistory'
import MatchesPage from '../Routes/MatchesPage/MatchesPage'
import Preloader from '../Components/Preloader/Preloader'

export interface IMatchesContainer {
  matches: Array<IMatch>,
  handleClickByMatch: (id: number) => void
}

export default function MatchesContainer() {
  const dispatch = useAppDispatch()
  const history = useHistoryPush()

  const matches = useAppSelector((state) => state.matches.matches)

  useEffect(() => {
    dispatch(getAllMatches())

    return () => {
      dispatch(clearLeagues())
      dispatch(clearMatches())
    }
  }, [])

  const handleClickByMatch = (id: number) => {
    history(`/matches/${id}`)
  }

  if (!matches && matches === null) return <Preloader />

  return (
    <MatchesPage
      matches={matches}
      handleClickByMatch={handleClickByMatch}
    />
  )
}
