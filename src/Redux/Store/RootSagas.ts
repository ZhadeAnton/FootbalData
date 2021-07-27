import {all, call} from 'redux-saga/effects'

import leaguesSagas from '../Leagues/LeaguesSagas'
import mathcesSagas from '../Matches/MatchesSagas'

export default function* rootSaga() {
  yield all([
    call(leaguesSagas),
    call(mathcesSagas)
  ])
}
