import { takeLatest, call, put, all } from 'redux-saga/effects'

import * as actions from './MatchesActionCreators'
import * as types from './MatchesActionTypes'
import * as API from '../../API/MatchesAPI'

function* getAllMatches() {
  try {
    const response = yield call(API.fetchAllMatches)
    const matches = yield response.data
    // const matches represent object {filters: {...}, matches: {...}}
    yield put(actions.getAllMatchesSuccess(matches.matches))
  } catch (error) {
    console.error(error)
  }
}

function* onGetAllMatches() {
  yield takeLatest(types.GET_ALL_MATHCES, getAllMatches)
}

export default function* mathcesSagas() {
  yield all([
    call(onGetAllMatches)
  ])
}
