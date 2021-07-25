import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { IMatch } from '../Interfaces/MatchesIntarfaces'
import { getAllMatches } from '../Redux/Matches/MatchesActionCreators'
import MatchesPage from '../Routes/MatchesPage/MatchesPage'

export interface IMatchesContainer {
  matches: Array<IMatch>
}

export default function MatchesContainer() {
  const dispatch = useAppDispatch()

  const matches = useAppSelector((state) => state.matches.matches)

  useEffect(() => {
    dispatch(getAllMatches())
  }, [])

  return (
    <MatchesPage
      matches={matches}
    />
  )
}
