import React from 'react'
import { Button } from 'antd'
import moment from 'moment'

interface Props {
  year?: string,
  date: [string, string] | null,
  handleClearFiltering: () => void
}

export default function DateInfo(props: Props) {
  return (
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
  )
}
