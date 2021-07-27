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
