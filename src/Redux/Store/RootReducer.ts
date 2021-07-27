import { combineReducers } from 'redux'
import leaguesReducer from '../Leagues/LeagueReducer'
import matchesReducer from '../Matches/MatchesReducer'

const rootReducer = combineReducers({
  league: leaguesReducer,
  matches: matchesReducer
})
export default rootReducer
