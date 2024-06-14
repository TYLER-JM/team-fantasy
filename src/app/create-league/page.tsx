'use client'

import { useContext, useState } from "react"
import { createClient } from "@/utils/supbaseClient"
import { AuthContext } from "@/app/context/AuthContext"
import { AuthState } from "@/types/AuthTypes"

export default function CreateLeague() {
  const supabase = createClient()

  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const auth = useContext(AuthContext) as AuthState

  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.target)
    const leagueName = formData.get('name') as string
    const realLifeLeague = formData.get('league') as string

    let supabaseRes: {data: any, error: any}

    supabaseRes = await supabase
      .from('fantasy_leagues')
      .insert([
        {
          commissioner_id: auth.user?.id,
          name: leagueName,
          league_id: parseInt(realLifeLeague),
          state_id: 1 // open
        }
      ])
      .select()
    
      if (supabaseRes.error) {
        setErrorMessage(supabaseRes.error.message)
        setLoading(false)
      } else {
        console.log('We created a new league, yay!', supabaseRes.data)
        setLoading(false)
      }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-header">
          <h3>Create a new league!</h3>
        </div>
        <div className="form-wrapper">

          <span className="form-error text-s">{errorMessage}</span>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Give your league a name:</label>
            <input name="name" type="text" className="form-input" placeholder="The Champions League"/>
          </div>
          <div className="form-group">
            <label htmlFor="league" className="form-label">Pick a real life league:</label>
            <select name="league" className="form-input">
              <option value="1">NHL</option>
              <option value="2">NBA</option>
            </select>
          </div>
          <div className="form-footer">
            <button className="btn floating primary" disabled={loading}>{loading ? 'Saving...': 'Save & Continue'}</button>
          </div>

        </div>
      </form>
    </div>
  )
}