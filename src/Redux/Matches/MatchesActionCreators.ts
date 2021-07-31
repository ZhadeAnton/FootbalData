import { IMatch, IMatchInDetails } from '../../Interfaces/MatchIntarfaces'
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

export const getMatchesByDateRange = (date: [string, string])
  : types.GetMatchesByDateRange => ({
  type: types.GET_MATCHES_BY_DATE_RANGE,
  payload: date
})

export const getMatchesByDateRangeSuccess = (matches: Array<IMatch>)
  : types.GetMatchesByDateRangeSuccess => ({
  type: types.GET_MATCHES_BY_DATE_RANGE_SUCCESS,
  payload: matches
})

export const clearMatches = (): types.ClearMatches => ({
  type: types.CLEAR_MATCHES
})
