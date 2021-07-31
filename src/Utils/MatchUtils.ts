export function getMatchScore(awayTeamScore: number, homeTeamScore: number): string {
  if (awayTeamScore === null || homeTeamScore === null) return ''

  return (
    `${awayTeamScore} : ${homeTeamScore}`
  )
}

export function parseFromCaps(entryString: string): string {
  return `${entryString[0].toUpperCase()}${entryString.slice(1).toLocaleLowerCase()}`
}

export function getWinner(
    winner: string, awayTeam: string, homeTeam: string): string | null {
  switch (winner) {
    case 'DRAW':
      return 'DRAW'

    case 'AWAY_TEAM':
      return awayTeam

    case 'HOME_TEAM':
      return homeTeam

    default:
      return null
  }
}
