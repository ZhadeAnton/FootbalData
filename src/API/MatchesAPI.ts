import axios from 'axios';

import { BASE_URL, API_KEY} from './APIUtils';

export function fetchAllMatches() {
  return axios({
    method: 'get',
    url: `https://${BASE_URL}/matches`,
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
