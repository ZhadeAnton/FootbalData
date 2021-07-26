import React from 'react'

interface Props {
  sheaduleLeangth: number
}

export default function SheaduleLeangthInfo(props: Props) {
  return (
    <section>
      <h3>
        { props.sheaduleLeangth } was finded
      </h3>
    </section>
  )
}
