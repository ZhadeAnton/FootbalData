import {
  ITeamByCompetition, ITeamById, ITeamShedule } from '../../Interfaces/TeamInterfaces'

export const GET_TEAM_BY_COMPETITION_ID = 'GET_TEAM_BY_COMPETITION_ID'
export interface GetTeamByCompetitionId {
  type: typeof GET_TEAM_BY_COMPETITION_ID,
  payload: number
}

export const GET_TEAM_BY_COMPETITION_ID_SUCCESS = 'GET_TEAM_BY_COMPETITION_ID_SUCCESS'
export interface GetTeamByCompetitionIdSuccess {
  type: typeof GET_TEAM_BY_COMPETITION_ID_SUCCESS,
  payload: ITeamByCompetition
}

export const GET_TEAM_BY_ID = 'GET_TEAM_BY_ID'
export interface GetTeamById {
  type: typeof GET_TEAM_BY_ID,
  payload: number
}

export const GET_TEAM_BY_ID_SUCCESS = 'GET_TEAM_BY_ID_SUCCESS'
export interface GetTeamByIdSuccess {
  type: typeof GET_TEAM_BY_ID_SUCCESS,
  payload: ITeamById
}

export const GET_TEAM_SHEDULE = 'GET_TEAM_SHEDULE'
export interface GetTeamShedule {
  type: typeof GET_TEAM_SHEDULE,
  payload: number
}

export const GET_TEAM_SHEDULE_SUCCESS = 'GET_TEAM_SHEDULE_SUCCESS'
export interface GetTeamSheduleSuccess {
  type: typeof GET_TEAM_SHEDULE_SUCCESS,
  payload: ITeamShedule
}

export const GET_TEAM_MATCHES_BY_DATE_RANGE = 'GET_TEAM_MATCHES_BY_DATE_RANGE'
export interface GetTeamMatchesByDateRange {
  type: typeof GET_TEAM_MATCHES_BY_DATE_RANGE,
  payload: { id: number, date: [string, string] }
}

export const GET_TEAM_MATCHES_BY_DATE_RANGE_SUCCESS =
'GET_TEAM_MATCHES_BY_DATE_RANGE_SUCCESS'
export interface GetTeamMatchesByDateRangeSuccess {
  type: typeof GET_TEAM_MATCHES_BY_DATE_RANGE_SUCCESS,
  payload: ITeamShedule
}

export const GET_COMP_TEAMS_BY_YEAR = 'GET_COMP_TEAMS_BY_YEAR'
export interface GetCompTeamsByYear {
  type: typeof GET_COMP_TEAMS_BY_YEAR,
  payload: { id: number, year: string }
}

export const GET_COMP_TEAMS_BY_YEAR_SUCCESS = 'GET_COMP_TEAMS_BY_YEAR_SUCCESS'
export interface GetCompTeamsByYearSuccess {
  type: typeof GET_COMP_TEAMS_BY_YEAR_SUCCESS,
  payload: ITeamByCompetition
}

export const CLEAR_TEAMS = 'CLEAR_TEAMS'
export interface ClearTeams {
  type: typeof CLEAR_TEAMS
}

export type TeamsTypes =
| GetTeamByCompetitionId
| GetTeamByCompetitionIdSuccess
| GetTeamById
| GetTeamByIdSuccess
| GetTeamShedule
| GetTeamSheduleSuccess
| GetTeamMatchesByDateRange
| GetTeamMatchesByDateRangeSuccess
| GetCompTeamsByYear
| GetCompTeamsByYearSuccess
| ClearTeams
