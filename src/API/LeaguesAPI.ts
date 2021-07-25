import axios from 'axios';

import { baseURL } from './APIUtils';

export function featchAllLeagues() {
  return axios({
    method: 'get',
    url: `https://${baseURL}/v2/competitions/`,
    headers: {
      'X-Auth-Token': '2f1fe53a496748efbd8410bf42170781'
    }
  })
}
