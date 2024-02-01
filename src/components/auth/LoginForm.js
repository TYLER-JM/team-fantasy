import { useState } from "react"

export default function LoginForm({login, cancel, signup}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signupMode, setSignupMode] = useState(false)

  // async function handleSignup(email, password) {
  //   const { data, error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //   })

  //   console.log('DID we reach Supabase:', data, error)
  // }

  return (
    <div className="form">
      <div className="form-group">
        <label className="form-label">
          email
        </label>
          <input className="form-input" value={email} type="email" placeholder="your email" onChange={(e) => setEmail(e.target.value)}></input>
        <label className="form-label">
          password
        </label>
          <input className="form-input" value={password} type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
      </div>
      <div className="form-buttons">
        <button onClick={() => setSignupMode(!signupMode)}>{signupMode ? 'login instead' : 'sign up instead'}</button>
        <button className="btn outline secondary" onClick={cancel}>CANCEL</button>
        {signupMode 
          ? <button className="btn primary floating" onClick={() => signup(email, password)}>SIGNUP</button>
          : <button className="btn primary floating" onClick={() => login(email, password)}>LOGIN</button>
        }
        
      </div>
    </div>
  )
}