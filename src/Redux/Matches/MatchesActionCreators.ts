import { IMatch } from '../../Interfaces/MatchesIntarfaces'
import * as types from './MatchesActionTypes'

export const getAllMatches = (): types.GetAllMatches => ({
  type: types.GET_ALL_MATHCES
})

export const getAllMatchesSuccess = (matches: Array<IMatch>)
  : types.GetAllMatchesSuccess => ({
  type: types.GET_ALL_MATHCES_SUCCESS,
  payload: matches
})