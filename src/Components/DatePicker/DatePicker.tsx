import React from 'react'
import { DatePicker } from 'antd'

interface Props {
  handleYearChange: (year: string) => void
}

export default function CustomDatePicker(props: Props) {
  return (
    <DatePicker
      picker="year"
      allowClear={false}
      onChange={(_, dateString: string) => props.handleYearChange(dateString)}
      style={{
        marginRight: 1 + 'rem',
        marginBottom: 1 + 'rem'
      }}
    />
  )
}
