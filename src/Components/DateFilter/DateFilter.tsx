import React from 'react'

import './dateFilter.scss'
import CustomDatePicker from '../DatePicker/DatePicker'
import CustomDateRange from '../DateRange/DateRange'
import DateInfo from './DateInfo/DateInfo'

interface Props {
  year?: string,
  date: [string, string] | null,
  handleYearChange: (year: string) => void,
  handleDateChange: (date: [string, string]) => void,
  handleClearFiltering: () => void
}

export default function DateFilter(props: Props) {
  return (
    <section className='date-filter'>
      <div className='date-filter__pickers'>
        {
          props.year &&
          <CustomDatePicker handleYearChange={props.handleYearChange}/>
        }

        <CustomDateRange handleDateChange={props.handleDateChange}/>
      </div>

      <DateInfo
        date={props.date}
        year={props.year}
        handleClearFiltering={props.handleClearFiltering}
      />
    </section>
  )
}
