import { LeaguesTypes } from './LeaguesActionTypes'
import * as types from './LeaguesActionTypes'
import { ICompetition, ILeague } from '../../Interfaces/LeagueInterfaces'
import { ILeagueShedule } from '../../Interfaces/MatchIntarfaces'

interface ILeaguesState {
  leagues: Array<ILeague> | [],
  competition: ICompetition | null,
  leagueShedule: ILeagueShedule | null
}

const INITIAL_STATE: ILeaguesState = {
  leagues: [],
  competition: null,
  leagueShedule: null,
}

const leaguesReducer = (state = INITIAL_STATE, action: LeaguesTypes): ILeaguesState => {
  switch (action.type) {
    case types.GET_ALL_LEAGUES_SUCCESS:
      return {
        ...state,
        leagues: action.payload,
      }

    case types.GET_COMPETITION_BY_ID_SUCCESS:
      return {
        ...state,
        competition: action.payload
      }

    case types.GET_MATCHES_BY_COMPETITION_ID_SUCCESS:
    case types.GET_COMP_MATCHES_BY_YEAR_SUCCESS:
    case types.GET_COMP_MATCHES_BY_DATE_RANGE_SUCCESS:
      return {
        ...state,
        leagueShedule: action.payload
      }

    case types.CLEAR_LEAGUES:
      return {
        ...state,
        leagues: [],
        competition: null,
        leagueShedule: null
      }

    default:
      return state
  }
}

export default leaguesReducer
