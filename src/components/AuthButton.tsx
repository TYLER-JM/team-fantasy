import { AuthContext } from "@/app/context/AuthContext"
import { useContext, useRef, useState } from "react"
import LoginForm from "./auth/LoginForm"
import Modal from "./Modal"

import { createClient } from "@/utils/supabase/client"
import { AuthState } from "@/types/AuthTypes"

export default function AuthButton() {
  const auth = useContext(AuthContext) as AuthState
  const modalRef = useRef<HTMLDialogElement | null>(null)
  const [signupMode, setSignupMode] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')


  const supabase = createClient()

  async function handleSubmit(event) {
    event.preventDefault()
    auth.loading = true

    const formData = new FormData(event.target)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const username = formData.get('username') as string
    let supabaseRes: {data: any, error: any}

    if (signupMode) {
      supabaseRes = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username
          }
        }
      })
    } else {
      supabaseRes = await supabase.auth.signInWithPassword({email, password})
    }
    if (supabaseRes.error) {
      setErrorMessage(supabaseRes.error.message)
    } else {
      auth.login(supabaseRes.data.session, supabaseRes.data.user)
      setErrorMessage('')
      closeModal()
    }
    auth.loading = false


  }

  async function logout() {
    supabase.auth.signOut()
    auth.logout()
  }

  function showModal() {
    modalRef.current?.showModal()
  }

  function closeModal() {
    modalRef.current?.close()
  }
  
  return auth?.user ? (
    <div>
      <span>Hi, {auth.user.email}</span>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <>
    <button className="btn primary floating" onClick={showModal}>Login</button>
    <Modal modalRef={modalRef}>
      <LoginForm errorMessage={errorMessage} signupMode={signupMode} setSignupMode={setSignupMode} cancel={closeModal} handleSubmit={handleSubmit}/>
    </Modal>
    </>
  )
}