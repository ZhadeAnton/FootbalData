import * as types from './TeamsActionTypes'
import { ITeamByCompetition, ITeamById } from '../../Interfaces/TeamsInterfaces'

export const getTeamByCompetitionId = (id: number): types.GetTeamByCompetitionId => ({
  type: types.GET_TEAM_BY_COMPETITION_ID,
  payload: id
})

export const getTeamByCompetitionIdSuccess = (teamByCompetition: ITeamByCompetition) => ({
  type: types.GET_TEAM_BY_COMPETITION_ID_SUCCESS,
  payload: teamByCompetition
})

export const getTeamById = (id: number): types.GetTeamById => ({
  type: types.GET_TEAM_BY_ID,
  payload: id
})

export const getTeamByIdSuccess = (teamById: ITeamById): types.GetTeamByIdSuccess => ({
  type: types.GET_TEAM_BY_ID_SUCCESS,
  payload: teamById
})
