import { IMatch } from '../../Interfaces/MatchesIntarfaces';
import { MatchesTypes } from './MatchesActionTypes';
import * as types from './MatchesActionTypes'

interface IMatchState {
  matches: Array<IMatch> | [],
  isLoading: boolean
}

const INITIAL_STATE: IMatchState = {
  matches: [],
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

    default:
      return state
  }
}

export default matchesReducer
