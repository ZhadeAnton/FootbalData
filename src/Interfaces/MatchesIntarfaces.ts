export interface IMatch {
  id: number,
  competition: {
    area: {
      code: string,
      ensignUrl: string,
      name: string
    },
    id: number,
    name: string
  },
  score: {
    duration: string,
    halfTime: {
      awayTeam: number,
      homeTeam: number
    },
    fullTime: {
      awayTeam: number,
      homeTeam: number
    },
    extraTime: {
      awayTeam: number,
      homeTeam: number
    },
    penalties: {
      awayTeam: number | null,
      homeTeam: number | null,
    }
    winner: string,
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
  },
  awayTeam: {
    id: number,
    name: string,
  }
}

export interface IMatchInDetails extends IMatch {
  head2head: {
    numberOfMatches: number,
    totalGoals: number,
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
  match: IMatch
}

export interface ILeagueShedule {
  competition: {
    area: {
      id: number,
      name: string
    },
    code: string,
    id: number,
    lastUpdated: Date,
    name: string,
    plan: string
  },
  filters: {},
  matches: Array<IMatch>
}
