import { MatchesTypes } from './MatchesActionTypes';

interface IMatchState {
}

const INITIAL_STATE: IMatchState = {
}

const matchesReducer = (state = INITIAL_STATE, action: MatchesTypes): IMatchState => {
  switch (action.type) {
    default:
      return state
  }
}

export default matchesReducer
