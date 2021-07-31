import { useState } from 'react'

export default function useDateFilter() {
  const [year, setYear] = useState('2021')
  const [date, setDate] = useState<[string, string] | null>(null)

  const handleSetYear = (year: string) => {
    setYear(year)
  }

  const handleSetDate = (newDate: [string, string] | null) => {
    setDate(newDate)
  }

  const handleClear = () => {
    handleSetDate(null)
    handleSetYear('2021')
  }

  return {
    year, date, handleSetYear, handleSetDate, handleClear
  }
}
