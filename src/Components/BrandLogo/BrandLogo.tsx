import React from 'react'

import './brandLogo.scss'
import brandLogo from '../../Assets/PNG/brand-logo.png'
import useHistoryPush from '../../Hooks/useHistory'

export default function BrandLogo() {
  const history = useHistoryPush()

  return (
    <div
      className='brand-logo'
    >
      <img
        className='brand-logo__image'
        src={brandLogo}
        alt="Logo"
        onClick={() => history('/')}
      />
    </div>
  )
}
