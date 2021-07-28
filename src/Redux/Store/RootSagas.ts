import {all, call} from 'redux-saga/effects'

import leaguesSagas from '../Leagues/LeaguesSagas'
import mathcesSagas from '../Matches/MatchesSagas'
import teamSagas from '../Teams/TeamsSagas'

export default function* rootSaga() {
  yield all([
    call(leaguesSagas),
    call(mathcesSagas),
    call(teamSagas)
  ])
}
