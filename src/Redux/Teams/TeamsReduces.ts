import { ITeamById } from './../../Interfaces/TeamsInterfaces';
import { ITeamByCompetition } from '../../Interfaces/TeamsInterfaces'
import { TeamsTypes } from './TeamsActionTypes'
import * as types from './TeamsActionTypes'

interface ITeamState {
  teamByCompetition: ITeamByCompetition | null,
  team: ITeamById | null
}

const INITIAL_STATE: ITeamState = {
  teamByCompetition: null,
  team: null
}

const teamReducer = (state = INITIAL_STATE, action: TeamsTypes): ITeamState => {
  switch (action.type) {
    case types.GET_TEAM_BY_COMPETITION_ID_SUCCESS:
      return {
        ...state,
        teamByCompetition: action.payload
      }

    case types.GET_TEAM_BY_ID_SUCCESS:
      return {
        ...state,
        team: action.payload
      }

    case types.CLEAR_TEAMS:
      return {
        ...state,
        teamByCompetition: null,
        team: null
      }

    default:
      return state
  }
}

export default teamReducer
