import React from 'react'

import './matchesPage.scss'
import { IMatchesContainer } from '../../Containers/MatchesContainer'
import MatchesList from '../../Components/Matches/MatchesList/MatchesList'
import BrandHeading from '../../Components/BrandHeading/BrandHeading'

export default function MatchesPage(props: IMatchesContainer) {
  return (
    <main className='matches-page'>
      <section className='matches-page__wrapper container'>
        <BrandHeading className='matches-page__heading'>
          Today matches
        </BrandHeading>

        <MatchesList
          matches={props.matches}
          handleClickByMatch={props.handleClickByMatch}
        />
      </section>
    </main>
  )
}
