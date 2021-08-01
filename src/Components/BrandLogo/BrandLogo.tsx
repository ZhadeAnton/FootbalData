import React from 'react'

import './brandLogo.scss'
import Logo from '../../Assets/SVG/brand-logo.svg'
import useHistoryPush from '../../Hooks/useHistory'

export default function BrandLogo() {
  const history = useHistoryPush()

  return (
    <div
      className='brand-logo'
      onClick={() => history('/')}
    >
      <img
        className='brand-logo__image'
        src={Logo}
        alt="Logo"
      />

      <p className='brand-logo__title'>
        Soccer stat
      </p>
    </div>
  )
}
