export const GET_TEAM_BY_COMPETITION_ID = 'GET_TEAM_BY_COMPETITION_ID'
export interface GetTeamByCompetitionId {
  type: typeof GET_TEAM_BY_COMPETITION_ID,
  payload: number
}

export type TeamsTypes =
| GetTeamByCompetitionId
