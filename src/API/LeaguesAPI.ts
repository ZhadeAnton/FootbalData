/* eslint-disable max-len */
import axios from 'axios';

import { BASE_URL, API_KEY, CURRENT_PLAN } from './APIUtils';

export function featchAllLeagues() {
  return axios({
    method: 'get',
    url: `https://${BASE_URL}/competitions/?${CURRENT_PLAN}`,
    headers: {
      'X-Auth-Token': API_KEY
    }
  })
}

export function fetchCompetitionById(id: number) {
  return axios({
    method: 'get',
    url: `https://${BASE_URL}/competitions/${id}`,
    headers: {
      'X-Auth-Token': API_KEY
    }
  })
}

export function fetchAllMatchesByCompetitionId(id: number) {
  return axios({
    method: 'get',
    url: `https://${BASE_URL}/competitions/${id}/matches`,
    headers: {
      'X-Auth-Token': API_KEY
    }
  })
}

export function fetchCompetitionMatchesByYear(id: number, year: string) {
  return axios({
    method: 'get',
    url: `https://${BASE_URL}/competitions/${id}/matches/?season=${year}`,
    headers: {
      'X-Auth-Token': API_KEY
    }
  })
}

export function fetchCompetitionMatchesDateRange(id: number, range: [string, string]) {
  // Range it`s an array from DatePicker. Example: ['2020-01-01, '2020-02-02']
  return axios({
    method: 'get',
    url: `https://${BASE_URL}/competitions/${id}/matches/?dateFrom=${range[0]}&dateTo=${range[1]}`,
    headers: {
      'X-Auth-Token': API_KEY
    }
  })
}
