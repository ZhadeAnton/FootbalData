import { IMatch, IMatchInDetails } from '../../Interfaces/MatchIntarfaces'

export const GET_ALL_MATHCES = 'GET_ALL_MATHCES'
export interface GetAllMatches {
  type: typeof GET_ALL_MATHCES
}

export const GET_ALL_MATHCES_SUCCESS = 'GET_ALL_MATHCES_SUCCESS'
export interface GetAllMatchesSuccess {
  type: typeof GET_ALL_MATHCES_SUCCESS,
  payload: Array<IMatch>
}

export const GET_MATCH_BY_ID = 'GET_MATCH_BY_ID'
export interface GetMatchById {
 type: typeof GET_MATCH_BY_ID,
 payload: number
}

export const GET_MATCH_BY_ID_SUCCESS = 'GET_MATCH_BY_ID_SUCCESS'
export interface GetMatchByIdSuccess {
  type: typeof GET_MATCH_BY_ID_SUCCESS,
  payload: IMatchInDetails
}

export const GET_MATCHES_BY_DATE_RANGE = 'GET_MATCHES_BY_DATE_RANGE'
export interface GetMatchesByDateRange {
  type: typeof GET_MATCHES_BY_DATE_RANGE,
  payload: [string, string]
}

export const GET_MATCHES_BY_DATE_RANGE_SUCCESS = 'GET_MATCHES_BY_DATE_RANGE_SUCCESS'
export interface GetMatchesByDateRangeSuccess {
  type: typeof GET_MATCHES_BY_DATE_RANGE_SUCCESS,
  payload: Array<IMatch>
}

export const CLEAR_MATCHES = 'CLEAR_MATCHES'
export interface ClearMatches {
  type: typeof CLEAR_MATCHES
}

export type MatchesTypes =
| GetAllMatches
| GetAllMatchesSuccess
| GetMatchById
| GetMatchByIdSuccess
| GetMatchesByDateRange
| GetMatchesByDateRangeSuccess
| ClearMatches
