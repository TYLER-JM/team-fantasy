'use client'

// import { useContext, useState } from "react"
// import { createClient } from "@/utils/supabase/server"
// import { AuthContext } from "@/app/context/AuthContext"
// import { AuthState } from "@/types/AuthTypes"

import { createLeague } from "@/utils/actions"
import { useFormState } from 'react-dom'; 

export default function CreateLeague() {
  // const supabase = createClient()

  // const [loading, setLoading] = useState(false)
  // const [errorMessage, setErrorMessage] = useState('')
  // const auth = useContext(AuthContext) as AuthState

  const initialState = {message: null, errors: {}}
  const [state, dispatch] = useFormState(createLeague, initialState)


  return (
    <div className="container">
      <form action={dispatch} className="form">
        <div className="form-header">
          <h3>Create a new league!</h3>
        </div>
        <div className="form-wrapper">

          {/* <span className="form-error text-s">{errorMessage}</span> */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">Give your league a name:</label>
            <input name="name" type="text" className="form-input" placeholder="The Champions League" aria-describedby="name-error"/>
            <div id="name-error" aria-atomic="true" aria-live="polite">
              {state.errors?.name && <p>{state.errors.name}</p>}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="league" className="form-label">Pick a real life league:</label>
            <select name="league" className="form-input">
              <option value="1">NHL</option>
              <option value="2">NBA</option>
            </select>
          </div>
          {state.message && (
          <p className="mt-2 text-sm text-red-500">{state.message}</p>
        )}
          <div className="form-footer">
            {/* <button className="btn floating primary" disabled={loading}>{loading ? 'Saving...': 'Save & Continue'}</button> */}
            <button className="btn floating primary">Save, or whatever</button>
          </div>

        </div>
      </form>
    </div>
  )
}