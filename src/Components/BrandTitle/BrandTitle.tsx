import React from 'react'

import './brandTitle.scss'

interface Props {
  children: string | undefined,
  className?: string,
  style?: any
}

export default function BrandTitle(props: Props) {
  return (
    <h3
      className={`brand-title ${props.className}`}
      style={props.style}
    >
      { props.children }
    </h3>
  )
}
