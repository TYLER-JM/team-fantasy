import { useState } from "react"

export default function LoginForm({errorMessage, signupMode, setSignupMode, handleSubmit, cancel}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div className="form-header">
        <h3>{signupMode ? 'Create an account' : 'Login below'}</h3>
        {signupMode
          ? <p className="text-s">Already have an account? <button type="button" onClick={() => setSignupMode(!signupMode)}>Login instead</button></p>
          : <p className="text-s">Don&apos;t have an account yet? <button type="button" onClick={() => setSignupMode(!signupMode)}>Sign up instead</button></p>
        }
      </div>
      <div className={`${errorMessage ? 'invalid' : ''} form-wrapper`}>
        <span className="form-error text-s">{errorMessage}</span>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input name="email" className="form-input" value={email} type="email" placeholder="your email" onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            User name
          </label>
          <input type="text" className="form-input" name="username" placeholder="enter desired username" onChange={e => setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input name="password" className="form-input" value={password} type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>  
        </div>
        <div className="form-footer">
          <button type="button" className="btn outline secondary" onClick={cancel}>CANCEL</button>
          {signupMode 
            ? <button className="btn primary floating">SIGNUP</button>
            : <button className="btn primary floating">LOGIN</button>
          }
        </div>
      </div>
    </form>
  )
}