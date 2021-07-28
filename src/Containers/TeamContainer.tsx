import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { ITeamById } from '../Interfaces/TeamsInterfaces'
import { useParams } from 'react-router-dom'
import { getTeamById } from '../Redux/Teams/TeamsActionCreators'
import TeamPage from '../Routes/TeamPage/TeamPage'
import Preloader from '../Components/Preloader/Preloader'

export interface ITeamContainer {
  teamById: ITeamById | null
}

export default function TeamContainer() {
  const dispatch = useAppDispatch()
  const params: any = useParams()
  const teamId = params.id

  const teamById = useAppSelector((state) => state.team.team)

  useEffect(() => {
    dispatch(getTeamById(teamId))
  }, [])

  if (teamById === null) return <Preloader />

  return (
    <TeamPage
      teamById={teamById}
    />
  )
}
