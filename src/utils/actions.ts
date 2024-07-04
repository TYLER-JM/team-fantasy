'use server'

import { redirect } from "next/navigation"
import { createClient } from "./supabase/server"
import { revalidatePath } from "next/cache"

export type State = {
  message?: string | null,
  errors?: {
    name?: string,
    league?: string
  }
}

const supabase = createClient()

export async function createLeague(prevState: State, formData: FormData) {
  const supabase = createClient()
  const {data} = await supabase.auth.getUser()

  const rawFormData = {
    name: formData.get('name'),
    league: formData.get('league')
  }

  const date = new Date().toISOString().split('T')[0]

  console.log('RAW FORM DATA:', rawFormData)

  // return {message: 'Not fully set up yet', errors: {name: 'name no good'}}

  const response = await supabase
    .from('fantasy_leagues')
    .insert([
      {
        commissioner_id: data.user?.id,
        name: rawFormData.name,
        season_id: 123,
        league_id: rawFormData.league,
        state_id: 1,
        created_at: date,
        start_date: date
      }
    ])  
    .select()
  if (response.error) {
    return {
      message: response.error.message
    }
  }
  const newLeague = response.data[0] as FantasyLeague

    revalidatePath('/dashboard');
    redirect(`/league/${newLeague.id}`)

}

export async function inviteToLeague(prevState: State, formData: FormData) {
  
}