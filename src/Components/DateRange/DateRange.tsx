import React from 'react'
import { DatePicker } from 'antd'

interface Props {
  handleDateChange: (date: [string, string]) => void
}

export default function CustomDateRange(props: Props) {
  return (
    <DatePicker.RangePicker
      // eslint-disable-next-line max-len
      onChange={(_, dateString: [string, string]) => props.handleDateChange(dateString)}
      allowClear={false}
      style={{
        marginRight: 1 + 'rem',
        marginBottom: 1 + 'rem'
      }}
    />
  )
}
