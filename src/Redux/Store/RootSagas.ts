import {all, call} from 'redux-saga/effects'
import leaguesSagas from '../Leagues/LeaguesSagas'

export default function* rootSaga() {
  yield all([
    call(leaguesSagas)
  ])
}
