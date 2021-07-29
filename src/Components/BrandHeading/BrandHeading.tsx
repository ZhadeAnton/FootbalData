import React from 'react'

import './brandHeading.scss'

interface Props {
  children: string
}

export default function BrandHeading(props: Props) {
  return (
    <h1 className='brand-heading'>
      { props.children }
    </h1>
  )
}