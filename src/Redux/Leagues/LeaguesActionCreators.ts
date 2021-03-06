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

export const getCompetitionMatchesByYear = (id: number, year: string)
  : types.GetCompetitionMatchesByYear => ({
  type: types.GET_COMPETITION_MATCHES_BY_YEAR,
  payload: { id, year }
})

export const getCompetitionMatchesByYearSuccess = (matches: ILeagueShedule)
  : types.GetCompetitionMatchesByYearSucess => ({
  type: types.GET_COMP_MATCHES_BY_YEAR_SUCCESS,
  payload: matches
})

export const getCompMatchesByDateRange = (id: number,
    date: [string, string]): types.GetCompMatchesByDateRange => ({
  type: types.GET_COMP_MATCHES_BY_DATE_RANGE,
  payload: { id, date }
})

export const getCompMatchesByDateRangeSuccess = (mathces: ILeagueShedule)
  : types.GetCompMatchesByDateRangeSuccess => ({
  type: types.GET_COMP_MATCHES_BY_DATE_RANGE_SUCCESS,
  payload: mathces
})

export const clearLeagues = (): types.ClearLeagues => ({
  type: types.CLEAR_LEAGUES
})
