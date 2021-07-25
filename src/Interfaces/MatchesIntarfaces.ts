export interface IMatch {
  head2head: {
    numberOfMatches: number,
    totalGoals: 4,
    homeTeam: {
      wins: number,
      draws: number,
      losses: number
    },
    awayTeam: {
      wins: number,
      draws: number,
      losses: number
    }
  },
  match: {
    id: number,
    competition: {
      id: number,
      name: string
    },
    season: {
      id: number,
      startDate: Date,
      endDate: Date,
      currentMatchday: number,
      availableStages: Array<string>
    },
    utcDate: Date,
    status: string,
    minute: null | string,
    attendance: number,
    venue: string,
    matchday: Date | null,
    stage: string,
    group: string,
    lastUpdated: Date,
    homeTeam: {
      id: number,
      name: string,
    }
  }
}
