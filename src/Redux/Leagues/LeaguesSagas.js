import { takeLatest, call, put, all } from 'redux-saga/effects'

import * as actions from './LeaguesActionCreators'
import * as types from './LeaguesActionTypes'
import * as notification from '../Notification/NotificationActionCreators'
import * as API from '../../API/LeaguesAPI'

function* getAllLeagues() {
  try {
    const response = yield call(API.featchAllLeagues)
    const leagues = yield response.data
    yield put(actions.getAllLeaguesSuccess(leagues.competitions))
  } catch (error) {
    yield put(notification.addNotification('ERROR', error.message, v4()))
  }
}

function* getCompetitionById({payload}) {
  try {
    // Payload this is id from action creator
    const response = yield call(API.fetchCompetitionById, payload)
    const competition = yield response.data
    yield put(actions.getCompetitionByIdSuccess(competition))
  } catch (error) {
    yield put(notification.addNotification('ERROR', error.message, v4()))
  }
}

function* getCompetitionMatches({payload}) {
  try {
    // Payload this is id from action creator
    const response = yield call(API.fetchAllMatchesByCompetitionId, payload)
    const sheduleObject = yield response.data
    yield put(actions.getMatchesByCompetitionIdSuccess(sheduleObject))
  } catch (error) {
    yield put(notification.addNotification('ERROR', error.message, v4()))
  }
}

function* getCompetitionMatchesByYear({payload: { id, year }}) {
  try {
    const response = yield call(API.fetchCompetitionMatchesByYear, id, year)
    const sheduleObject = yield response.data
    yield put(actions.getCompetitionMatchesByYearSuccess(sheduleObject))
  } catch (error) {
    yield put(notification.addNotification('ERROR', error.message, v4()))
  }
}

function* getCompetitionMatchesDateRange({payload: { id, date }}) {
  try {
    const response = yield call(API.fetchCompetitionMatchesDateRange, id, date)
    const sheduleObject = yield response.data
    yield put(actions.getCompMatchesByDateRangeSuccess(sheduleObject))
  } catch (error) {
    yield put(notification.addNotification('ERROR', error.message, v4()))
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

function* onGetCompetitionMatchesByYear() {
  yield takeLatest(types.GET_COMPETITION_MATCHES_BY_YEAR, getCompetitionMatchesByYear)
}

function* onGetCompetitionMatchesByDateRange() {
  yield takeLatest(types.GET_COMP_MATCHES_BY_DATE_RANGE, getCompetitionMatchesDateRange)
}

export default function* leaguesSagas() {
  yield all([
    call(onGetAllLeagues),
    call(onGetCompetitionById),
    call(onGetCompetitionMatches),
    call(onGetCompetitionMatchesByYear),
    call(onGetCompetitionMatchesByDateRange)
  ])
}
