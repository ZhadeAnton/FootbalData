import React from 'react'
import { Descriptions} from 'antd';

interface Props {
  descTitle: string,
  data: [{[key: string]: string | number | null}]
}

export default function DescriptionList(props: Props) {
  return (
    <Descriptions
      title={props.descTitle}
      bordered
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
