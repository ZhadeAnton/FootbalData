import { takeLatest, call, put, all } from 'redux-saga/effects'
import { v4 } from 'uuid'

import * as actions from './MatchesActionCreators'
import * as types from './MatchesActionTypes'
import * as notification from '../Notification/NotificationActionCreators'
import * as API from '../../API/MatchesAPI'
import { featchAllLeagues } from '../../API/LeaguesAPI'

function* getAllMatches() {
  try {
    const leaguesResponse = yield call(featchAllLeagues)
    const leagues = yield leaguesResponse.data
    const availableLeaguesIds = yield leagues.competitions.map((item) => item.id)
    const response = yield call(API.fetchAllMatches, availableLeaguesIds)
    // const matches represent object {filters: {...}, matches: {...}}
    const matches = yield response.data
    yield put(actions.getAllMatchesSuccess(matches.matches))
  } catch (error) {
    yield put(notification.addNotification('ERROR', error.message, v4()))
  }
}

function* getMatchById({payload}) {
  try {
    // Payload it`s an id of a match such getting from clik by item
    const response = yield call(API.fetchMatchById, payload)
    const matchInDetails = yield response.data
    yield put(actions.getMatchByIdSuccess(matchInDetails))
  } catch (error) {
    yield put(
        notification.addNotification('ERROR', `There's no match with such id`, v4()))
  }
}

function* getMatchesByDateRange({payload}) {
  try {
    // Payload it`s range of dates. Example: ['2020-01-01', '2020-01-02']
    const response = yield call(API.fetchMatchByDateRange, payload)
    const matches = yield response.data.matches
    yield put(actions.getMatchesByDateRangeSuccess(matches))
    yield put(notification.addNotification('SUCCESS', `Filtered by ${payload}`, v4()))
  } catch (error) {
    yield put(
        notification.addNotification('ERROR', 'This dates range is not available', v4()))
  }
}

function* onGetAllMatches() {
  yield takeLatest(types.GET_ALL_MATHCES, getAllMatches)
}

function* onGetMatchById() {
  yield takeLatest(types.GET_MATCH_BY_ID, getMatchById)
}

function* onGetMatchesByDateRange() {
  yield takeLatest(types.GET_MATCHES_BY_DATE_RANGE, getMatchesByDateRange)
}

export default function* mathcesSagas() {
  yield all([
    call(onGetAllMatches),
    call(onGetMatchById),
    call(onGetMatchesByDateRange)
  ])
}
