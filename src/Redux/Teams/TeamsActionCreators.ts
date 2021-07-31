import * as types from './TeamsActionTypes'
import {
  ITeamByCompetition, ITeamById, ITeamShedule } from '../../Interfaces/TeamInterfaces'

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

export const getTeamShedule = (id: number): types.GetTeamShedule => ({
  type: types.GET_TEAM_SHEDULE,
  payload: id
})

export const getTeamSheduleSuccess = (teamShedule: ITeamShedule)
  : types.GetTeamSheduleSuccess => ({
  type: types.GET_TEAM_SHEDULE_SUCCESS,
  payload: teamShedule
})

export const clearTeams = (): types.ClearTeams => ({
  type: types.CLEAR_TEAMS
})
