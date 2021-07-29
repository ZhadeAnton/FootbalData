import React from 'react'
import { Descriptions} from 'antd';

interface Props {
  data: Array<any>
}

export default function DescriptionList(props: Props) {
  return (
    <Descriptions
      bordered
      size='small'
    >
      {
        props.data.map((item, idx) => {
          return (
            <Descriptions.Item
              key={idx}
              label={Object.keys(item)}
            >
              {Object.values(item)}
            </Descriptions.Item>
          )
        })
      }
    </Descriptions>
  )
}
