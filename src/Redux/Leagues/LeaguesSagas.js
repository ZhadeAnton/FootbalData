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

function* getCompetitionById({payload}) {
  try {
    // Payload this is id from action creator
    const response = yield call(API.fetchCompetitionById, payload)
    const competition = yield response.data
    yield put(actions.getCompetitionByIdSuccess(competition))
  } catch (error) {
    console.error(error)
  }
}

function* getCompetitionMatches({payload}) {
  try {
    // Payload this is id from action creator
    const response = yield call(API.fetchAllMatchesByCompetitionId, payload)
    const sheduleObject = yield response.data
    yield put(actions.getMatchesByCompetitionIdSuccess(sheduleObject))
  } catch (error) {
    console.error(error)
  }
}

function* onGetAllLeagues() {
  yield takeLatest(types.GET_ALL_LEAGUES, getAllLeagues)
}

function* onGetCompetitionById() {
  yield takeLatest(types.GET_COMPETITION_BY_ID, getCompetitionById)
}

function* onGetCompetitionMatches() {
  yield takeLatest(types.GET_MATCHES_BY_COMPETITION_ID, getCompetitionMatches)
}

export default function* leaguesSagas() {
  yield all([
    call(onGetAllLeagues),
    call(onGetCompetitionById),
    call(onGetCompetitionMatches)
  ])
}
