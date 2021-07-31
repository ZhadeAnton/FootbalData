export const FILTER_ITEMS = 'FILTER_ITEMS'
export interface FilterItems {
  type: typeof FILTER_ITEMS,
  payload: string
}

export type FilterTypes =
| FilterItems
