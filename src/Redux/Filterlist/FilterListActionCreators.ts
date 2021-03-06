import * as types from './FilterListActionTypes'

export const filterItems = (symbol: string): types.FilterItems => ({
  type: types.FILTER_ITEMS,
  payload: symbol
})

export const clearFilter = (): types.ClearFilter => ({
  type: types.CLEAR_FILTER
})
