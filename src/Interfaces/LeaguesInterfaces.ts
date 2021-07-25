export interface ILeague {
  area: {
    id: number,
    name: string,
    ensignUrl: string | null,
    countryCode: string
  },
  code: string | null,
  currentSeasone: {
    id: number,
    currentMatchday: number,
    endDate: Date,
    startDate: Date,
    winner: string | null
  },
  emblemUrl: string | null,
  id: number,
  lastUpdate: Date,
  name: string,
  numberOfAvailableSeasons: number,
  plan: string
}

export interface IFnGetCompetitionById {
  (id: ILeague['id']): void
}
