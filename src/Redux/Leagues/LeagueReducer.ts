import { LeaguesTypes } from './LeaguesActionTypes'
import * as types from './LeaguesActionTypes'
import { ICompetition, ILeague } from '../../Interfaces/LeaguesInterfaces'
import { IMatch } from '../../Interfaces/MatchesIntarfaces'

interface ILeaguesState {
  leagues: Array<ILeague> | [],
  competition: ICompetition | null,
  mathesByCompetition: Array<IMatch> | [],
  isLoading: boolean
}

const INITIAL_STATE: ILeaguesState = {
  leagues: [],
  competition: null,
  mathesByCompetition: [],
  isLoading: false
}

const leaguesReducer = (state = INITIAL_STATE, action: LeaguesTypes): ILeaguesState => {
  switch (action.type) {
    case types.GET_ALL_LEAGUES:
    case types.GET_COMPETITION_BY_ID:
    case types.GET_MATCHES_BY_COMPETITION_ID:
      return {
        ...state,
        isLoading: true
      }

    case types.GET_ALL_LEAGUES_SUCCESS:
      return {
        ...state,
        leagues: action.payload,
        isLoading: false
      }

    case types.GET_COMPETITION_BY_ID_SUCCESS:
      return {
        ...state,
        competition: action.payload
      }

    case types.GET_MATCHES_BY_COMPETITION_ID_SUCCESS:
      return {
        ...state,
        mathesByCompetition: [...action.payload]
      }

    default:
      return state
  }
}

export default leaguesReducer
