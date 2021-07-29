import React from 'react'

import './brandDescription.scss'

interface Props {
  children: string | undefined
}

export default function BrandDescription(props: Props) {
  return (
    <h4 className='brand-description'>
      { props.children }
    </h4>
  )
}
