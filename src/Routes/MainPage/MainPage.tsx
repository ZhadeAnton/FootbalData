import React from 'react'
import { Button } from 'antd'

import './mainPage.scss'
import { NavLink } from 'react-router-dom'

export default function MainPage() {
  return (
    <main className='main'>
      <section className='main__info container'>
        <h1 className='main__info--title'>
          Soccer stat
        </h1>

        <p className='main__info--text'>
          This is the best place for viewing statistics
          of the leading European football tournaments
        </p>

        <div className='main__info--buttons'>
          <NavLink
            to='/leagues'
          >
            <Button
              style={{width: 100 + '%'}}
              type='primary'
            >
              Watch Leagues
            </Button>
          </NavLink>

          <NavLink to='/matches'>
            <Button
              style={{width: 100 + '%'}}
              type='primary'
            >
              Watch today`s matches
            </Button>
          </NavLink>
        </div>
      </section>
      <div className='main__overlay'></div>
      <div className='main__mask'></div>
    </main>
  )
}
