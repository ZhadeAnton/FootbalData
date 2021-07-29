import { ITeamByCompetition, ITeamById } from '../../Interfaces/TeamInterfaces'

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

export const CLEAR_TEAMS = 'CLEAR_TEAMS'
export interface ClearTeams {
  type: typeof CLEAR_TEAMS
}

export type TeamsTypes =
| GetTeamByCompetitionId
| GetTeamByCompetitionIdSuccess
| GetTeamById
| GetTeamByIdSuccess
| ClearTeams
