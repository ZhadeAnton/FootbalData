import { combineReducers } from 'redux'
import NotificationReducer from '../Notification/NotificationReducer'
import leaguesReducer from '../Leagues/LeagueReducer'
import matchesReducer from '../Matches/MatchesReducer'
import teamReducer from '../Teams/TeamsReduces'
import filterReducer from '../Filterlist/FilterListReducer'

const rootReducer = combineReducers({
  league: leaguesReducer,
  matches: matchesReducer,
  team: teamReducer,
  general: NotificationReducer,
  filter: filterReducer
})
export default rootReducer
