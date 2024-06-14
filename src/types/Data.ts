type FantasyLeague = {
  id: number,
  commissioner_id: string,
  name: string,
  season_id: string | null,
  start_date: string | null,
  state_id: FantasyLeagueStates
}

type FantasyLeagueStates = 1 /*open*/ | 2 /*closed*/ | 3 /*drafting*/ | 4 /*in_progress*/ | 5 /*complete*/