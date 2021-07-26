import { takeLatest, call, put, all } from 'redux-saga/effects'

import * as actions from './MatchesActionCreators'
import * as types from './MatchesActionTypes'
import * as API from '../../API/MatchesAPI'

function* getAllMatches() {
  try {
    const response = yield call(API.fetchAllMatches)
    // const matches represent object {filters: {...}, matches: {...}}
    const matches = yield response.data
    yield put(actions.getAllMatchesSuccess(matches.matches))
  } catch (error) {
    console.error(error)
  }
}

function* getMatchById({payload}) {
  try {
    // Payload is id of a match (getting from clik by item)
    const response = yield call(API.fetchMatchById, payload)
    const match = yield response.data
    yield console.log(match)
    yield put(actions.getAllMatchesSuccess(matches.matches))
  } catch (error) {
    console.error(error)
  }
}

function* onGetAllMatches() {
  yield takeLatest(types.GET_ALL_MATHCES, getAllMatches)
}

function* onGetMatchById() {
  yield takeLatest(types.GET_MATCH_BY_ID, getMatchById)
}

export default function* mathcesSagas() {
  yield all([
    call(onGetAllMatches),
    call(onGetMatchById)
  ])
}
