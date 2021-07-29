import React from 'react'
import { Button } from 'antd';

interface Props {
  children: any,
  onClick: any
}

export default function BrandButton(props: Props) {
  return (
    <Button
      type="primary"
      size="large"
      onClick={props.onClick}
    >
      { props.children }
    </Button>
  )
}
