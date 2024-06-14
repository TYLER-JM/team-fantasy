// https://api-web.nhle.com/v1/schedule/2024-03-18

export type UpcomingEventsResponse = WeekOfEvents[]

interface WeekOfEvents {
  nextStartDate: string, // '2024-03-25
  previousStartDate: string, // '2024-03-11
  gameWeek: GameDate[],
  oddsPartners: OddsPartner[],
  preSeasonStartDate: string, // '2024-09-23'
  regularSeasonStartDate: string, // '2024-09-23'
  regularSeasonEndDate: string, // '2024-06-18
  playoffEndDate: string, //
  numberOfGames: number // this week
}

type GameDate = {
  date: string, // '2024-03-18'
  dayAbbrev: dayAbbrev,
  numberOfGames: number,
  games: Game[]
}

type Game = {
  id: number, // 2023021080 -> see docs online for interpretation of game ids
  season: number, //20232024
  gameType: number, // see online docs for mapping of game types, and create a Type here
  venue: {default: string /* 'Scotiabank Saddledome' */},
  neutralSite: boolean, //false
  startTimeUTC: string, // "2024-03-19T00:30:00Z"
  easternUTCOffset: string, // "-04:00"
  venueUTCOffset: string, // "-06:00"
  venueTimezone: timezone,
  gameState: gameState,
  gameScheduleState: gameScheduleState
  tvBroadcasts: BroadCasts[],
  awayTeam: Team,
  homeTeam: Team,
  periodDescriptor: {}, // this would likely be populated for a game that is in progress?
  ticketsLink: string, //url 
  gameCenterLink: string, // url
}
type Team = {
  id: number,
  placeName: {default: string /* 'Calgary' */},
  abbrev: string, // 'CGY'
  logo: string, //url
  darkLogo: string, //url
  homeSplitSquad?: boolean,
  awaySplitSquad?: boolean,
  radioLink: string, //url
  odds: Odds[], // a few providers, some in american odds, others decimal. THIS IS THE MONEYLINE
}
type BroadCasts = {
  id: number,
  market: string, // "N" ??
  countryCode: string, // "CA"
  network: string, // "TVAS" 
  sequenceNumber: number
}

type OddsPartner = {
  partnerId: number,
  country: string, // 'SE'
  name: string, // 'Unibet'
  imageUrl: string,
  siteUrl: string,
  bgColor: string, // '#14805E'
  textColor: string, // '#ffffff'
  accentColor: string, // '#3AAA35'
}
type Odds = {
  providerId: number, // use 7 = Fanduel (canada), 9 = DraftKings (US)
  value: string, // "3.9100" | "120.0000" | "-135.0000" 
}

type dayAbbrev = 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN'
type timezone = 'US/Mountain' | 'somethingelse'
type gameState = 'FUT' | 'somethingelse'
type gameScheduleState = 'OK' | 'somethingelse'