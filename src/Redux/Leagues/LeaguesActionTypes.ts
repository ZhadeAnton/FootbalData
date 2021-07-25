import { ILeague } from '../../Interfaces/LeaguesInterfaces'

export const GET_ALL_LEAGUES = 'GET_ALL_LEAGUES'
export interface GetAllLeagues {
  type: typeof GET_ALL_LEAGUES
}

export const GET_ALL_LEAGUES_SUCCESS = 'GET_ALL_LEAGUES_SUCCESS'
export interface GetAllLeaguesSuccess {
  type: typeof GET_ALL_LEAGUES_SUCCESS,
  payload: Array<ILeague>
}

export type LeaguesTypes =
| GetAllLeagues
| GetAllLeaguesSuccess
