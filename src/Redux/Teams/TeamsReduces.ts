import { TeamsTypes } from './TeamsActionTypes'

interface ITeamState {

}

const INITIAL_STATE: ITeamState = {

}

const teamReducer = (state = INITIAL_STATE, action: TeamsTypes): ITeamState => {
  switch (action.type) {
    default:
      return state
  }
}

export default teamReducer
