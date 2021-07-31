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

export const getTeamMatchesByDateRange = (id: number, date: [string, string])
  : types.GetTeamMatchesByDateRange => ({
  type: types.GET_TEAM_MATCHES_BY_DATE_RANGE,
  payload: { id, date }
})

export const getTeamMatchesByDateRangeSuccess = (teamShedule: ITeamShedule)
  : types.GetTeamMatchesByDateRangeSuccess => ({
  type: types.GET_TEAM_MATCHES_BY_DATE_RANGE_SUCCESS,
  payload: teamShedule
})

export const getCompMatchesByYear = (id: number, year: string)
  : types.GetCompTeamsByYear => ({
  type: types.GET_COMP_TEAMS_BY_YEAR,
  payload: { id, year }
})

export const getCompMatchesByYearSuccess = (teamByCompetition: ITeamByCompetition)
  : types.GetCompTeamsByYearSuccess => ({
  type: types.GET_COMP_TEAMS_BY_YEAR_SUCCESS,
  payload: teamByCompetition
})

export const clearTeams = (): types.ClearTeams => ({
  type: types.CLEAR_TEAMS
})
