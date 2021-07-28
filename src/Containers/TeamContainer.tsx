import React from 'react'

import { useAppSelector } from '../Hooks/usePreTypedHook'
import { ITeamById } from '../Interfaces/TeamsInterfaces'
import TeamPage from '../Routes/TeamPage/TeamPage'

export interface ITeamContainer {
  teamById: ITeamById | null
}

export default function TeamContainer() {
  const teamById = useAppSelector((state) => state.team.team)

  return (
    <TeamPage
      teamById={teamById}
    />
  )
}
