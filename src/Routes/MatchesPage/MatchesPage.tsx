import React from 'react'

import { IMatchesContainer } from '../../Containers/MatchesContainer'
import MatchesList from '../../Components/Matches/MatchesList/MatchesList'

export default function MatchesPage(props: IMatchesContainer) {
  return (
    <main>
      <section>
        <MatchesList
          matches={props.matches}
          handleClickByMatch={props.handleClickByMatch}
        />
      </section>
    </main>
  )
}
