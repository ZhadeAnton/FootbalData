import { ITeamByCompetition } from '../../Interfaces/TeamsInterfaces'

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

export type TeamsTypes =
| GetTeamByCompetitionId
| GetTeamByCompetitionIdSuccess
