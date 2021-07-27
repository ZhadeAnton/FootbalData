import React from 'react'

import { useAppSelector } from '../Hooks/usePreTypedHook'
import { IMatchInDetails } from '../Interfaces/MatchesIntarfaces'
import MatchByIdPage from '../Routes/MatchByIdPage/MatchByIdPage'
import Preloader from '../Components/Preloader/Preloader'

export interface IMatchInDetailsContainer {
  matchInDetails: IMatchInDetails
}

export default function MatchByIdContainer() {
  const matchInDetails = useAppSelector((state) => state.matches.matchInDetails)

  if (matchInDetails === null && !matchInDetails) return <Preloader />

  return (
    <MatchByIdPage
      matchInDetails={matchInDetails}
    />
  )
}
