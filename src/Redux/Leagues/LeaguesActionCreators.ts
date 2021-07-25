import { ICompetition, ILeague } from '../../Interfaces/LeaguesInterfaces'
import * as actions from './LeaguesActionTypes'

export const getAllLeagues = (): actions.GetAllLeagues => ({
  type: actions.GET_ALL_LEAGUES
})

export const getAllLeaguesSuccess = (leagues: Array<ILeague>)
 : actions.GetAllLeaguesSuccess => ({
  type: actions.GET_ALL_LEAGUES_SUCCESS,
  payload: leagues
})

export const getCompetitionById = (id: ILeague['id']): actions.GetCompetitionById => ({
  type: actions.GET_COMPETITION_BY_ID,
  payload: id
})

export const getCompetitionByIdSuccess = (competition: ICompetition)
  : actions.GetCompetitionByIdSuccess => ({
  type: actions.GET_COMPETITION_BY_ID_SUCCESS,
  payload: competition
})
