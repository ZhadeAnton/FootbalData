/* eslint-disable max-len */
import axios from 'axios';

import { BASE_URL, API_KEY} from './APIUtils';

export function fetchTeamsByCompetitionId(id: number) {
  return axios({
    method: 'get',
    url: `https://${BASE_URL}/competitions/${id}/teams`,
    headers: {
      'X-Auth-Token': API_KEY
    }
  })
}

export function fetchCompetitionTeamsByYear(id: number, year: string) {
  return axios({
    method: 'get',
    url: `https://${BASE_URL}/competitions/${id}/teams/?season=${year}`,
    headers: {
      'X-Auth-Token': API_KEY
    }
  })
}

export function fetchTeamById(id: number) {
  return axios({
    method: 'get',
    url: `https://${BASE_URL}/teams/${id}`,
    headers: {
      'X-Auth-Token': API_KEY
    }
  })
}

export function fetchTeamShedule(id: number) {
  return axios({
    method: 'get',
    url: `https://${BASE_URL}/teams/${id}/matches`,
    headers: {
      'X-Auth-Token': API_KEY
    }
  })
}

export function fetchTeamMatchesBydateRange(id: number, range: string) {
  // Range it`s an array from DatePicker. Example: ['2020-01-01, '2020-02-02']
  return axios({
    method: 'get',
    url: `https://${BASE_URL}/teams/${id}/matches?dateFrom=${range[0]}&dateTo=${range[1]}`,
    headers: {
      'X-Auth-Token': API_KEY
    }
  })
}
