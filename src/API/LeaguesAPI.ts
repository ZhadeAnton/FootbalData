import axios from 'axios';

import { BASE_URL, API_KEY } from './APIUtils';

export function featchAllLeagues() {
  return axios({
    method: 'get',
    url: `https://${BASE_URL}/v2/competitions/?plan=TIER_ONE`,
    headers: {
      'X-Auth-Token': API_KEY
    }
  })
}

export function fetchCompetitionById(id: number) {
  return axios({
    method: 'get',
    url: `https://${BASE_URL}/v2/competitions/${id}`,
    headers: {
      'X-Auth-Token': API_KEY
    }
  })
}
