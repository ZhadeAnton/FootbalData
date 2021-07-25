import { ICompetition, ILeague } from '../../Interfaces/LeaguesInterfaces'
import * as types from './LeaguesActionTypes'

export const getAllLeagues = (): types.GetAllLeagues => ({
  type: types.GET_ALL_LEAGUES
})

export const getAllLeaguesSuccess = (leagues: Array<ILeague>)
 : types.GetAllLeaguesSuccess => ({
  type: types.GET_ALL_LEAGUES_SUCCESS,
  payload: leagues
})

export const getCompetitionById = (id: ILeague['id']): types.GetCompetitionById => ({
  type: types.GET_COMPETITION_BY_ID,
  payload: id
})

export const getCompetitionByIdSuccess = (competition: ICompetition)
  : types.GetCompetitionByIdSuccess => ({
  type: types.GET_COMPETITION_BY_ID_SUCCESS,
  payload: competition
})
