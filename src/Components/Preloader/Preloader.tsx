import React from 'react'

import './preloader.scss'
import preloader from '../../Assets/SVG/preloader.svg'

export default function Preloader() {
  return (
    <div className='preloader-wrapper'>
      <img
        className='preloader'
        src={preloader}
        alt="loading"
      />
    </div>
  )
}
