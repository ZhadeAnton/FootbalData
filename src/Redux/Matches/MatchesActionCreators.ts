import { IMatch, IMatchInDetails } from '../../Interfaces/MatchesIntarfaces'
import * as types from './MatchesActionTypes'

export const getAllMatches = (): types.GetAllMatches => ({
  type: types.GET_ALL_MATHCES
})

export const getAllMatchesSuccess = (matches: Array<IMatch>)
  : types.GetAllMatchesSuccess => ({
  type: types.GET_ALL_MATHCES_SUCCESS,
  payload: matches
})

export const getMatchById = (id: number): types.GetMatchById => ({
  type: types.GET_MATCH_BY_ID,
  payload: id
})

export const getMatchByIdSuccess = (matches: IMatchInDetails)
  : types.GetMatchByIdSuccess => ({
  type: types.GET_MATCH_BY_ID_SUCCESS,
  payload: matches
})
