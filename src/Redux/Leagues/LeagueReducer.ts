import { LeaguesTypes } from './LeaguesActionTypes'
import * as types from './LeaguesActionTypes'
import { ILeague } from '../../Interfaces/LeaguesInterfaces'

interface ILeaguesState {
  leagues: Array<ILeague> | [],
  isLoading: boolean
}

const INITIAL_STATE: ILeaguesState = {
  leagues: [],
  isLoading: false
}

const leaguesReducer = (state = INITIAL_STATE, action: LeaguesTypes): ILeaguesState => {
  switch (action.type) {
    case types.GET_ALL_LEAGUES:
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

    default:
      return state
  }
}

export default leaguesReducer
