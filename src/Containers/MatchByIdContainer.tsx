import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { IMatchInDetails } from '../Interfaces/MatchesIntarfaces'
import { getMatchById } from '../Redux/Matches/MatchesActionCreators'
import MatchByIdPage from '../Routes/MatchByIdPage/MatchByIdPage'
import Preloader from '../Components/Preloader/Preloader'

export interface IMatchInDetailsContainer {
  matchInDetails: IMatchInDetails
}

export default function MatchByIdContainer() {
  const dispatch = useAppDispatch()
  // Params is a id of the the match (from URL)
  const params: any = useParams()
  const matchId = params.id

  const matchInDetails = useAppSelector((state) => state.matches.matchInDetails)

  useEffect(() => {
    dispatch(getMatchById(matchId))
  }, [])

  if (matchInDetails === null && !matchInDetails) return <Preloader />

  return (
    <MatchByIdPage
      matchInDetails={matchInDetails}
    />
  )
}
