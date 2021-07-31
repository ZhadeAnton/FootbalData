import axios from 'axios';

import { BASE_URL, API_KEY} from './APIUtils';

export function fetchAllMatches(leaguesIds: [number]) {
  return axios({
    method: 'get',
    url: `https://${BASE_URL}/matches/?competitions=${leaguesIds}`,
    headers: {
      'X-Auth-Token': API_KEY
    }
  })
}

export function fetchMatchById(id: number) {
  return axios({
    method: 'get',
    url: `https://${BASE_URL}/matches/${id}`,
    headers: {
      'X-Auth-Token': API_KEY
    }
  })
}

export function fetchMatchByDateRange(range: [string, string]) {
  // Range it`s an array from DatePicker. Example: ['2020-01-01, '2020-02-02']
  return axios({
    method: 'get',
    // eslint-disable-next-line max-len
    url: `https://${BASE_URL}/matches/?dateFrom=${range[0]}&dateTo=${range[1]}`,
    headers: {
      'X-Auth-Token': API_KEY
    }
  })
}
