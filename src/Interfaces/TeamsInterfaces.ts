export interface ITeam {
  id: number,
  area: {
    id: number,
    name: string
  },
  name: string,
  shortName: string,
  tla: string,
  address: string,
  phone: string,
  website: string,
  email: string,
  founded: number,
  clubColors: string,
  venue: string | null,
  lastUpdated: Date,
  squad: Array<IPlayer>
}

export interface ITeamByCompetition {
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
  season: {
    currentMatchday: number,
    id: number,
    endDate: Date,
    startDate: Date,
    winner: string | null
  },
  teams: Array<ITeam>
}

export interface ITeamById {
  activeCompetitions: [
    {
      area: {
        id: number,
        name: string
      },
      code: string,
      id: number,
      lastUpdated: Date,
      name: string,
      plan: string
    }
  ],
  name: string,
  shortName: string,
  tla: string,
  address: string,
  phone: string,
  website: string,
  email: string,
  founded: number,
  clubColors: string,
  venue: string | null,
  lastUpdated: Date,
  crestUrl: string,
  squad: Array<IPlayer>
}

export interface IPlayer {
  id: number,
  name: string,
  position: string,
  dateOfBirth: Date,
  countryOfBirth: string,
  nationality: string,
  role: string
}
