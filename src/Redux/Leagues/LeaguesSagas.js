import { takeLatest, call, put, all } from 'redux-saga/effects'

import * as actions from './LeaguesActionCreators'
import * as types from './LeaguesActionTypes'
import * as API from '../../API/LeaguesAPI'

function* getAllLeagues() {
  try {
    const response = yield call(API.featchAllLeagues)
    const leagues = yield response.data
    yield put(actions.getAllLeaguesSuccess(leagues.competitions))
  } catch (error) {
    console.error(error)
  }
}

function* onGetAllLeagues() {
  yield takeLatest(types.GET_ALL_LEAGUES, getAllLeagues)
}

export default function* leaguesSagas() {
  yield all([
    call(onGetAllLeagues)
  ])
}
