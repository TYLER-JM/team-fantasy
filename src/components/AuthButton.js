import { AuthContext } from "@/context/AuthContext"
import { useContext } from "react"

export default function AuthButton() {
  const auth = useContext(AuthContext)
  // const user = {name: 'Dave'}
  return auth?.session?.user ? (
    <div>
      <span>Hi, {auth.session.user.name}</span>
      <button onClick={auth.logout}>Logout</button>
    </div>
  ) : (
    <button onClick={auth.login}>Login</button>
  )
}