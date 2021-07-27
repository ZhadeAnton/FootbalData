import { IMatch, IMatchInDetails } from '../../Interfaces/MatchesIntarfaces'

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

export type MatchesTypes =
| GetAllMatches
| GetAllMatchesSuccess
| GetMatchById
| GetMatchByIdSuccess
