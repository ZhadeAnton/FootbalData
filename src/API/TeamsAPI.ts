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
