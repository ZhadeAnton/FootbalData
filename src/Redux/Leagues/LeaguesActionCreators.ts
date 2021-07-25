import { ILeague } from '../../Interfaces/LeaguesInterfaces'
import * as actions from './LeaguesActionTypes'

export const getAllLeagues = (): actions.GetAllLeagues => ({
  type: actions.GET_ALL_LEAGUES
})

export const getAllLeaguesSuccess = (leagues: Array<ILeague>)
  : actions.GetAllLeaguesSuccess => ({
  type: actions.GET_ALL_LEAGUES_SUCCESS,
  payload: leagues
})
