import { useState } from 'react'

export default function useYearFilter() {
  const [year, setYear] = useState('2021')

  const handleSetYear = (year: string) => {
    setYear(year)
  }

  return {
    year, handleSetYear
  }
}
