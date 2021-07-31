import { takeLatest, call, put, all } from 'redux-saga/effects'

import * as types from './TeamsActionTypes'
import * as actions from './TeamsActionCreators.ts'
import * as notification from '../Notification/NotificationActionCreators'
import * as API from '../../API/TeamsAPI'

function* getTeamByCompetitionId({payload}) {
  try {
    // Payload it`s an id of a team
    const response = yield call(API.fetchTeamsByCompetitionId, payload)
    const teambyCompetition = yield response.data
    yield put(actions.getTeamByCompetitionIdSuccess(teambyCompetition))
  } catch (error) {
    yield put(notification.addNotification('ERROR', error.message, v4()))
  }
}

function* getTeamById({payload}) {
  try {
    // Payload it`s an id of a team
    const response = yield call(API.fetchTeamById, payload)
    const team = yield response.data
    yield put(actions.getTeamByIdSuccess(team))
  } catch (error) {
    yield put(notification.addNotification('ERROR', error.message, v4()))
  }
}

function* getTeamShedule({payload}) {
  try {
    // Payload it`s an id of a team
    const response = yield call(API.fetchTeamShedule, payload)
    const teamShedule = yield response.data
    yield put(actions.getTeamSheduleSuccess(teamShedule))
  } catch (error) {
    yield put(notification.addNotification('ERROR', error.message, v4()))
  }
}

function* getTeamMatchesByDateRange({payload: { id, date }}) {
  try {
    const response = yield call(API.fetchTeamMatchesBydateRange, id, date)
    const teamShedule = yield response.data
    yield put(actions.getTeamMatchesByDateRangeSuccess(teamShedule))
  } catch (error) {
    yield put(notification.addNotification('ERROR', error.message, v4()))
  }
}

function* getCompTeamsByYear({payload: { id, year }}) {
  try {
    const response = yield call(API.fetchCompetitionTeamsByYear, id, year)
    const compMatches = yield response.data
    yield put(actions.getCompMatchesByYearSuccess(compMatches))
  } catch (error) {
    yield put(notification.addNotification('ERROR', error.message, v4()))
  }
}

function* onGetTeamByCompetitionId() {
  yield takeLatest(types.GET_TEAM_BY_COMPETITION_ID, getTeamByCompetitionId)
}

function* onGetTeamById() {
  yield takeLatest(types.GET_TEAM_BY_ID, getTeamById)
}

function* onGetTeamShedule() {
  yield takeLatest(types.GET_TEAM_SHEDULE, getTeamShedule)
}

function* onGetTeamMatchesByDateRange() {
  yield takeLatest(types.GET_TEAM_MATCHES_BY_DATE_RANGE, getTeamMatchesByDateRange)
}

function* onGetCompTeamsByYear() {
  yield takeLatest(types.GET_COMP_TEAMS_BY_YEAR, getCompTeamsByYear)
}

export default function* teamSagas() {
  yield all([
    call(onGetTeamByCompetitionId),
    call(onGetTeamById),
    call(onGetTeamShedule),
    call(onGetTeamMatchesByDateRange),
    call(onGetCompTeamsByYear)
  ])
}
