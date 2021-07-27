import { ITeamByCompetition } from '../../Interfaces/TeamsInterfaces'
import { TeamsTypes } from './TeamsActionTypes'
import * as types from './TeamsActionTypes'

interface ITeamState {
  teamByCompetition: ITeamByCompetition | null
}

const INITIAL_STATE: ITeamState = {
  teamByCompetition: null
}

const teamReducer = (state = INITIAL_STATE, action: TeamsTypes): ITeamState => {
  switch (action.type) {
    case types.GET_TEAM_BY_COMPETITION_ID_SUCCESS:
      return {
        ...state,
        teamByCompetition: action.payload
      }

    default:
      return state
  }
}

export default teamReducer
