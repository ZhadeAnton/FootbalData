import { ICompetition, ILeague } from '../../Interfaces/LeagueInterfaces'
import { ILeagueShedule } from '../../Interfaces/MatchIntarfaces'

export const GET_ALL_LEAGUES = 'GET_ALL_LEAGUES'
export interface GetAllLeagues {
  type: typeof GET_ALL_LEAGUES
}

export const GET_ALL_LEAGUES_SUCCESS = 'GET_ALL_LEAGUES_SUCCESS'
export interface GetAllLeaguesSuccess {
  type: typeof GET_ALL_LEAGUES_SUCCESS,
  payload: Array<ILeague>
}

export const GET_COMPETITION_BY_ID = 'GET_COMPETITION_BY_ID'
export interface GetCompetitionById {
  type: typeof GET_COMPETITION_BY_ID,
  payload: ILeague['id']
}

export const GET_COMPETITION_BY_ID_SUCCESS = 'GET_COMPETITION_BY_ID_SUCCESS'
export interface GetCompetitionByIdSuccess {
  type: typeof GET_COMPETITION_BY_ID_SUCCESS,
  payload: ICompetition
}

export const GET_MATCHES_BY_COMPETITION_ID = 'GET_MATCHES_BY_COMPETITION_ID'
export interface GetMatchesByCompetitionId {
  type: typeof GET_MATCHES_BY_COMPETITION_ID,
  payload: ICompetition['id']
}

export const GET_MATCHES_BY_COMPETITION_ID_SUCCESS =
'GET_MATCHES_BY_COMPETITION_ID_SUCCESS'
export interface GetMatchesByCompetitionIdSuccess {
  type: typeof GET_MATCHES_BY_COMPETITION_ID_SUCCESS,
  payload: ILeagueShedule
}

export const GET_COMPETITION_MATCHES_BY_YEAR = 'GET_COMPETITION_MATCHES_BY_YEAR'
export interface GetCompetitionMatchesByYear {
  type: typeof GET_COMPETITION_MATCHES_BY_YEAR,
  payload: { id: number, year: string }
}

export const GET_COMP_MATCHES_BY_YEAR_SUCCESS = 'GET_COMP_MATCHES_BY_YEAR_SUCCESS'
export interface GetCompetitionMatchesByYearSucess {
  type: typeof GET_COMP_MATCHES_BY_YEAR_SUCCESS,
  payload: ILeagueShedule
}

export const CLEAR_LEAGUES = 'CLEAR_LEAGUES'
export interface ClearLeagues {
  type: typeof CLEAR_LEAGUES
}

export type LeaguesTypes =
| GetAllLeagues
| GetAllLeaguesSuccess
| GetCompetitionById
| GetCompetitionByIdSuccess
| GetMatchesByCompetitionId
| GetMatchesByCompetitionIdSuccess
| GetCompetitionMatchesByYear
| GetCompetitionMatchesByYearSucess
| ClearLeagues
