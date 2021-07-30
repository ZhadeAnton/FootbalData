import React from 'react'
import moment from 'moment'
import { DatePicker, Button } from 'antd'
const { RangePicker } = DatePicker

import './dateFilter.scss'

interface Props {
  year: string,
  date: [string, string] | null,
  handleYearChange: (year: string) => void,
  handleDateChange: (date: [string, string]) => void,
  handleClearFiltering: () => void
}

export default function DateFilter(props: Props) {
  console.log(props.date)

  return (
    <section className='date-filter'>
      <div className='date-filter__pickers'>
        <DatePicker
          picker="year"
          allowClear={false}
          onChange={(_, dateString: string) => props.handleYearChange(dateString)}
        />

        <RangePicker
          // eslint-disable-next-line max-len
          onChange={(_, dateString: [string, string]) => props.handleDateChange(dateString)}
          allowClear={false}
        />
      </div>

      <div className='date-filter__info'>
        { props.date &&
          <h6 className='date-filter__info--title'>
            Filter by range: from&nbsp;

            <time>
              { moment(props.date[0]).format('MM/DD/YY') }
            </time>

            &nbsp;to&nbsp;

            <time>
              { moment(props.date[1]).format('MM/DD/YY') }
            </time>
          </h6>
        }

        { props.year && props.date === null &&
          <h6 className='date-filter__info--title'>
            Filter by year:&nbsp;

            <time>
              { props.year }
            </time>
          </h6>
        }

        { props.date &&
            <Button
              danger
              onClick={props.handleClearFiltering}
              className='date-filter__button'
            >
              Clear filter
            </Button>
        }
      </div>
    </section>
  )
}
