import { useState } from "react"

export default function LoginForm({login, cancel, signup}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signupMode, setSignupMode] = useState(false)

  return (
    <div className="form">
      <h3>{signupMode ? 'Create an account' : 'Login below'}</h3>
      {signupMode
        ? <p className="text-s">Already have an account? <button onClick={() => setSignupMode(!signupMode)}>Login instead</button></p>
        : <p className="text-s">Don&apos;t have an account yet? <button onClick={() => setSignupMode(!signupMode)}>Sign up instead</button></p>
      }
      <div className="form-group">
        <label className="form-label">
          email
        </label>
        <input className="form-input" value={email} type="email" placeholder="your email" onChange={(e) => setEmail(e.target.value)}></input>
      </div>
      <div className="form-group">
        <label className="form-label">
          password
        </label>
        <input className="form-input" value={password} type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>  
      </div>
      <div className="form-footer">
        <button className="btn outline secondary" onClick={cancel}>CANCEL</button>
        {signupMode 
          ? <button className="btn primary floating" onClick={() => signup(email, password)}>SIGNUP</button>
          : <button className="btn primary floating" onClick={() => login(email, password)}>LOGIN</button>
        }
      </div>
    </div>
  )
}