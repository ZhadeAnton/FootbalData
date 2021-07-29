import { ICompetition, ILeague } from '../../Interfaces/LeagueInterfaces'
import { ILeagueShedule } from '../../Interfaces/MatchIntarfaces'
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

export const getMatchesByCompetitionId = (id: ICompetition['id'])
  : types.GetMatchesByCompetitionId => ({
  type: types.GET_MATCHES_BY_COMPETITION_ID,
  payload: id
})

export const getMatchesByCompetitionIdSuccess = (matches: ILeagueShedule)
  : types.GetMatchesByCompetitionIdSuccess => ({
  type: types.GET_MATCHES_BY_COMPETITION_ID_SUCCESS,
  payload: matches
})

export const clearLeagues = (): types.ClearLeagues => ({
  type: types.CLEAR_LEAGUES
})
