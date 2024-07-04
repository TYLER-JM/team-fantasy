'use client'

import { useFormState } from 'react-dom'

export default function LeagueDashboard({ params }: { params: { id: string } }) {
  const initialState = {}
  const [state, dispatch] = useFormState()
  return (
    <div>
      <p>you are on the index page of a league: {params.id}</p>
      <form action={dispatch}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" name="email" className="form-input" />
        </div>
        <div className="form-footer">
          <button className="floating primary btn">Send!</button>
        </div>
      </form>
    </div>
  )
}