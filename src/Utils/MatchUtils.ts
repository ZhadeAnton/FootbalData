export function getMatchScore(awayTeamScore: number, homeTeamScore: number): string {
  if (awayTeamScore === null || homeTeamScore === null) return ''

  return (
    `${awayTeamScore} : ${homeTeamScore}`
  )
}

export function parseFromCaps(entryString: string): string {
  return `${entryString[0].toUpperCase()}${entryString.slice(1).toLocaleLowerCase()}`
}

export function getWinner(winner: string, awayTeam: string, homeTeam: string): string {
  return winner === 'DRAW'
  ? parseFromCaps(winner)
  : winner === 'AWAY_TEAM'
  ? awayTeam
  : homeTeam
}
