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

    default:
      return state
  }
}

export default filterReducer
