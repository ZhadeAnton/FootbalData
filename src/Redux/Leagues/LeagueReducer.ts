import { LeaguesTypes } from './LeaguesActionTypes'
import * as types from './LeaguesActionTypes'
import { ICompetition, ILeague } from '../../Interfaces/LeaguesInterfaces'

interface ILeaguesState {
  leagues: Array<ILeague> | [],
  competition: ICompetition | null,
  isLoading: boolean
}

const INITIAL_STATE: ILeaguesState = {
  leagues: [],
  competition: null,
  isLoading: false
}

const leaguesReducer = (state = INITIAL_STATE, action: LeaguesTypes): ILeaguesState => {
  switch (action.type) {
    case types.GET_ALL_LEAGUES:
    case types.GET_COMPETITION_BY_ID:
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

    default:
      return state
  }
}

export default leaguesReducer
