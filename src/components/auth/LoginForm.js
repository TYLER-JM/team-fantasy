import { useState } from "react"

export default function LoginForm({login, cancel}) {
  const [name, setName] = useState('')

  return (
    <div className="form">
      <div className="form-group">
        <label className="form-label">
          Name
        </label>
          <input className="form-input" value={name} type="text" placeholder="your name" onChange={(e) => setName(e.target.value)}></input>
      </div>
      <div className="form-buttons">
        <button className="btn outline secondary" onClick={cancel}>CANCEL</button>
        <button className="btn primary floating" onClick={() => login(name)}>LOGIN</button>
      </div>
    </div>
  )
}