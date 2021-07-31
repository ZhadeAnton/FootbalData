import { IMatch, IMatchInDetails } from '../../Interfaces/MatchIntarfaces';
import { MatchesTypes } from './MatchesActionTypes';
import * as types from './MatchesActionTypes'

interface IMatchState {
  matches: Array<IMatch> | [],
  matchInDetails: IMatchInDetails | null
}

const INITIAL_STATE: IMatchState = {
  matches: [],
  matchInDetails: null
}

const matchesReducer = (state = INITIAL_STATE, action: MatchesTypes): IMatchState => {
  switch (action.type) {
    case types.GET_ALL_MATHCES:
      return {
        ...state
      }

    case types.GET_ALL_MATHCES_SUCCESS:
    case types.GET_MATCHES_BY_DATE_RANGE_SUCCESS:
      return {
        ...state,
        matches: [...action.payload]
      }

    case types.GET_MATCH_BY_ID_SUCCESS:
      return {
        ...state,
        matchInDetails: action.payload
      }

    case types.CLEAR_MATCHES:
      return {
        ...state,
        matches: [],
        matchInDetails: null
      }

    default:
      return state
  }
}

export default matchesReducer
