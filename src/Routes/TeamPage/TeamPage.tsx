import React from 'react'

import './teamPage.scss'
import { ITeamContainer } from '../../Containers/TeamContainer'

export default function TeamPage(props: ITeamContainer) {
  return (
    <main>
      <section>
        <h1>
          { props.teamById?.name }
        </h1>
      </section>
    </main>
  )
}
