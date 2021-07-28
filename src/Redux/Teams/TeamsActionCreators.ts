import * as types from './TeamsActionTypes'
import { ITeamByCompetition } from '../../Interfaces/TeamsInterfaces'

export const getTeamByCompetitionId = (id: number): types.GetTeamByCompetitionId => ({
  type: types.GET_TEAM_BY_COMPETITION_ID,
  payload: id
})

export const getTeamByCompetitionIdSuccess = (teamByCompetition: ITeamByCompetition) => ({
  type: types.GET_TEAM_BY_COMPETITION_ID_SUCCESS,
  payload: teamByCompetition
})
