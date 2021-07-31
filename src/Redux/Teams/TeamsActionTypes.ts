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
| ClearTeams
