'use server'

import { redirect } from "next/navigation"
import { createClient } from "./supabase/server"
// import { revalidatePath } from 'next/cache';

export type State = {
  message?: string | null,
  errors?: {
    name?: string,
    league?: string
  }
}

const supabase = createClient()

export async function createLeague(prevState: State, formData: FormData) {

  const rawFormData = {
    name: formData.get('name'),
    league: formData.get('league')
  }

  const date = new Date().toISOString().split('T')[0]

  console.log('RAW FORM DATA:', rawFormData)

  return {message: 'Not fully set up yet', errors: {name: 'name no good'}}

  // try {
  //   const {data, error} = supabase
  //   .from('fantasy_leagues')
  //   .insert([
  //     {
  //       commissioner_id: 123,
  //       name: rawFormData.name,
  //       season_id: 123,
  //       league_id: rawFormData.league,
  //       state_id: 1,
  //       created_at: date,
  //       start_date: date
  //     }
  //   ])  
  // } catch (error) {
  //   return {
  //     message: 'Database Error: oopsie failed to create league'
  //   }
  // }
  

    // revalidatePath('/');
    redirect('/')

}