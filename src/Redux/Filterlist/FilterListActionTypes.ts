export const FILTER_ITEMS = 'FILTER_ITEMS'
export interface FilterItems {
  type: typeof FILTER_ITEMS,
  payload: string
}

export const CLEAR_FILTER = 'CLEAR_FILTER'
export interface ClearFilter {
  type: typeof CLEAR_FILTER
}

export type FilterTypes =
| FilterItems
| ClearFilter
