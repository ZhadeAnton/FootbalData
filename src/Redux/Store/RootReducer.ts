import { combineReducers } from 'redux'
import leaguesReducer from '../Leagues/LeagueReducer'

const rootReducer = combineReducers({
  league: leaguesReducer
})
export default rootReducer
