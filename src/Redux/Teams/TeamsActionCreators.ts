import * as types from './TeamsActionTypes'

export const getTeamByCompetitionId = (id: number): types.GetTeamByCompetitionId => ({
  type: types.GET_TEAM_BY_COMPETITION_ID,
  payload: id
})
