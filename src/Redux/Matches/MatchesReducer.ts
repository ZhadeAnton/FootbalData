import { IMatch, IMatchInDetails } from '../../Interfaces/MatchesIntarfaces';
import { MatchesTypes } from './MatchesActionTypes';
import * as types from './MatchesActionTypes'

interface IMatchState {
  matches: Array<IMatch> | [],
  matchInDetails: IMatchInDetails | null,
  isLoading: boolean
}

const INITIAL_STATE: IMatchState = {
  matches: [],
  matchInDetails: null,
  isLoading: false
}

const matchesReducer = (state = INITIAL_STATE, action: MatchesTypes): IMatchState => {
  switch (action.type) {
    case types.GET_ALL_MATHCES:
      return {
        ...state,
        isLoading: true
      }

    case types.GET_ALL_MATHCES_SUCCESS:
      return {
        ...state,
        matches: [...action.payload],
        isLoading: false
      }

    case types.GET_MATCH_BY_ID_SUCCESS:
      return {
        ...state,
        matchInDetails: action.payload
      }

    default:
      return state
  }
}

export default matchesReducer
