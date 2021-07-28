import React from 'react'

interface Props {
  link: string
}

export default function BlankLink(props: Props) {
  return (
    <a
      href={`${props.link}`}
      target="_blank"
      rel="noreferrer"
    >
      {props.link}
    </a>
  )
}
