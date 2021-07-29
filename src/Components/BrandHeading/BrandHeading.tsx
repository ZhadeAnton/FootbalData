import React from 'react'

import './brandHeading.scss'

interface Props {
  children: string | undefined,
  className?: string,
  style?: any
}

export default function BrandHeading(props: Props) {
  return (
    <h1
      className={`brand-heading ${props.className}`}
      style={props.style}
    >
      { props.children }
    </h1>
  )
}
