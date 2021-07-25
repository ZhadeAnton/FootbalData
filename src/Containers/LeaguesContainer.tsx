import React, { useEffect } from 'react'
import { useAppDispatch } from '../Hooks/usePreTypedHook'
import { getAllLeagues } from '../Redux/Leagues/LeaguesActionCreators'
import LeaguesPage from '../Routes/LeaguesPage/LeaguesPage'

export default function LeaguesContainer() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllLeagues())
  })

  return (
    <LeaguesPage />
  )
}
