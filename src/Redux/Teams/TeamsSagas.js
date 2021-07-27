import { takeLatest, call, all } from 'redux-saga/effects'

import * as types from './TeamsActionTypes'
// import * as actions from './TeamsActionCreators.ts'
import * as API from '../../API/TeamsAPI'

function* getTeamByCompetitionId({payload}) {
  try {
    // Payload is id of a competition
    const response = yield call(API.fetchTeamsByCompetitionId, payload)
    const team = yield response.data
    console.log(team)
    // yield put(actions.getMatchByIdSuccess(matchInDetails))
  } catch (error) {
    console.error(error)
  }
}

function* onGetTeamByCompetitionId() {
  yield takeLatest(types.GET_TEAM_BY_COMPETITION_ID, getTeamByCompetitionId)
}

export default function* teamSagas() {
  yield all([
    call(onGetTeamByCompetitionId)
  ])
}
