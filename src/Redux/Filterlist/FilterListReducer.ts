import * as types from './FilterListActionTypes'
import { FilterTypes } from './FilterListActionTypes'

interface IFilterState {
  searchTerm: string
}

const INITIAL_STATE: IFilterState = {
  searchTerm: ''
}

const filterReducer = (state = INITIAL_STATE, action: FilterTypes): IFilterState => {
  switch (action.type) {
    case types.FILTER_ITEMS:
      return {
        ...state,
        searchTerm: action.payload
      }

    case types.CLEAR_FILTER:
      return {
        ...state,
        searchTerm: ''
      }

    default:
      return state
  }
}

export default filterReducer
