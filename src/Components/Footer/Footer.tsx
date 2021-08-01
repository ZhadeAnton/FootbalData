import React from 'react'

import './footer.scss'
import Github from '../../Assets/SVG/gitHub.svg'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__info'>
        <h5 className='footer__info--author'>
          Author <strong>Zhade Anton</strong>. Follow my GitHub
        </h5>

        <a
          href="https://github.com/ZhadeAnton"
          target='_blank'
          rel="noreferrer"
        >
          <img src={Github} className="bi bi-github footer__info--icon" />
        </a>
      </div>
    </footer>
  )
}
