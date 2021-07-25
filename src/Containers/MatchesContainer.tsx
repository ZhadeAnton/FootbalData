import React, { useEffect } from 'react'

import { useAppDispatch } from '../Hooks/usePreTypedHook'
import { getAllMatches } from '../Redux/Matches/MatchesActionCreators'
import MatchesPage from '../Routes/MatchesPage/MatchesPage'

export default function MatchesContainer() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllMatches())
  })

  return (
    <MatchesPage />
  )
}
