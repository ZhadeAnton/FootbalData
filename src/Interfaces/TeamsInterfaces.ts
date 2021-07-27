export interface Iteam {
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

export interface IPlayer {
  id: number,
  name: string,
  position: string,
  dateOfBirth: Date,
  countryOfBirth: string,
  nationality: string,
  role: string
}
