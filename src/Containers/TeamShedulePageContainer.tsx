import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch } from '../Hooks/usePreTypedHook'
import { getTeamShedule } from '../Redux/Teams/TeamsActionCreators'
import TeamShedulePage from '../Routes/TeamShedulePage/TeamShedulePage'

export default function TeamShedulePageContainer() {
  const dispatch = useAppDispatch()
  const params: any = useParams()
  const teamId = params.id

  useEffect(() => {
    dispatch(getTeamShedule(teamId))
  })

  return (
    <TeamShedulePage />
  )
}
