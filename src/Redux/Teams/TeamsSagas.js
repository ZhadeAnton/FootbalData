import { takeLatest, call, put, all } from 'redux-saga/effects'

import * as types from './TeamsActionTypes'
import * as actions from './TeamsActionCreators.ts'
import * as API from '../../API/TeamsAPI'

function* getTeamByCompetitionId({payload}) {
  try {
    // Payload it`s an id of a team
    const response = yield call(API.fetchTeamsByCompetitionId, payload)
    const teambyCompetition = yield response.data
    yield put(actions.getTeamByCompetitionIdSuccess(teambyCompetition))
  } catch (error) {
    console.error(error)
  }
}

function* getTeamById({payload}) {
  try {
    // Payload it`s an id of a team
    const response = yield call(API.fetchTeamById, payload)
    const team = yield response.data
    yield put(actions.getTeamByIdSuccess(team))
  } catch (error) {
    console.error(error)
  }
}

function* getTeamShedule({payload}) {
  try {
    // Payload it`s an id of a team
    const response = yield call(API.fetchTeamShedule, payload)
    const teamShedule = yield response.data
    yield put(actions.getTeamSheduleSuccess(teamShedule))
  } catch (error) {
    console.error(error)
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

export default function* teamSagas() {
  yield all([
    call(onGetTeamByCompetitionId),
    call(onGetTeamById),
    call(onGetTeamShedule)
  ])
}
