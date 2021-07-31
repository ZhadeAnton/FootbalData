import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { ITeamById } from '../Interfaces/TeamInterfaces'
import { useParams } from 'react-router-dom'
import { getTeamById } from '../Redux/Teams/TeamsActionCreators'
import useHistoryPush from '../Hooks/useHistory'
import TeamPage from '../Routes/TeamPage/TeamPage'
import Preloader from '../Components/Preloader/Preloader'

export interface ITeamContainer {
  teamById: ITeamById | null,
  handleClickByShedule: () => void
}

export default function TeamContainer() {
  const dispatch = useAppDispatch()
  const history = useHistoryPush()
  const params: any = useParams()
  const teamId = params.id

  const teamById = useAppSelector((state) => state.team.team)

  useEffect(() => {
    dispatch(getTeamById(teamId))
  }, [])

  const handleClickByShedule = () => {
    history(`/team/${teamId}/shedule`)
  }

  if (teamById === null) return <Preloader />

  return (
    <TeamPage
      teamById={teamById}
      handleClickByShedule={handleClickByShedule}
    />
  )
}
