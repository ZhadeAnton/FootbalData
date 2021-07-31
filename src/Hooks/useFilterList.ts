import { filterItems } from '../Redux/Filterlist/FilterListActionCreators';
import { useAppDispatch, useAppSelector } from './usePreTypedHook';

export default function useFilterList() {
  const dispatch = useAppDispatch()

  const seatchTerm = useAppSelector((state) => state.filter.searchTerm)

  const handleChange = (value: string) => {
    dispatch(filterItems(value))
  }

  return {
    seatchTerm, handleChange
  }
}
