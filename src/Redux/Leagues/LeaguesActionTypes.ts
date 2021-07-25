import { ICompetition, ILeague } from '../../Interfaces/LeaguesInterfaces'

export const GET_ALL_LEAGUES = 'GET_ALL_LEAGUES'
export interface GetAllLeagues {
  type: typeof GET_ALL_LEAGUES
}

export const GET_ALL_LEAGUES_SUCCESS = 'GET_ALL_LEAGUES_SUCCESS'
export interface GetAllLeaguesSuccess {
  type: typeof GET_ALL_LEAGUES_SUCCESS,
  payload: Array<ILeague>
}

export const GET_COMPETITION_BY_ID = 'GET_COMPETITION_BY_ID'
export interface GetCompetitionById {
  type: typeof GET_COMPETITION_BY_ID,
  payload: ILeague['id']
}

export const GET_COMPETITION_BY_ID_SUCCESS = 'GET_COMPETITION_BY_ID_SUCCESS'
export interface GetCompetitionByIdSuccess {
  type: typeof GET_COMPETITION_BY_ID_SUCCESS,
  payload: ICompetition
}

export type LeaguesTypes =
| GetAllLeagues
| GetAllLeaguesSuccess
| GetCompetitionById
| GetCompetitionByIdSuccess
