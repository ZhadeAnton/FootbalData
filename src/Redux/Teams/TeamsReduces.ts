import { ITeamById, ITeamShedule } from '../../Interfaces/TeamInterfaces';
import { ITeamByCompetition } from '../../Interfaces/TeamInterfaces'
import { TeamsTypes } from './TeamsActionTypes'
import * as types from './TeamsActionTypes'

interface ITeamState {
  teamByCompetition: ITeamByCompetition | null,
  team: ITeamById | null,
  teamShedule: ITeamShedule | null
}

const INITIAL_STATE: ITeamState = {
  teamByCompetition: null,
  team: null,
  teamShedule: null
}

const teamReducer = (state = INITIAL_STATE, action: TeamsTypes): ITeamState => {
  switch (action.type) {
    case types.GET_TEAM_BY_COMPETITION_ID_SUCCESS:
      return {
        ...state,
        teamByCompetition: action.payload
      }

    case types.GET_TEAM_MATCHES_BY_DATE_RANGE_SUCCESS:
      return {
        ...state,
        teamShedule: action.payload
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

    case types.GET_TEAM_SHEDULE_SUCCESS:
      return {
        ...state,
        teamShedule: action.payload
      }

    default:
      return state
  }
}

export default teamReducer
