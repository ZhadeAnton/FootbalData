import React from 'react'

import './brandLogo.scss'
import brandLogo from '../../Assets/PNG/brand-logo.png'

export default function BrandLogo() {
  return (
    <div className='brand-logo'>
      <img
        className='brand-logo__image'
        src={brandLogo}
        alt="Brand logo" />
    </div>
  )
}
