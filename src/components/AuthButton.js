import { AuthContext } from "@/context/AuthContext"
import { useContext, useRef } from "react"
import LoginForm from "./auth/LoginForm"
import Modal from "./Modal"

import { createClient } from "@/supbaseClient"

export default function AuthButton() {
  const auth = useContext(AuthContext)
  const modalRef = useRef(null)

  const supabase = createClient()

  async function loginAndCloseModal(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({email, password})
    if (error) {
      console.log('error reaching SUPABASE', error)
    }
    if (data) {
      auth.login(data.session, data.user)
    }
    closeModal()
  }

  async function signupAndCloseModal(email, password) {
    const { data, error } = await supabase.auth.signUp({email, password})
    if (error) {
      console.log('error reaching SUPABASE', error)
    }
    if (data) {
      auth.login(data.session, data.user)
    }
    // console.log('back from supabase: ', data)
    closeModal()
  }

  async function logout() {
    supabase.auth.signOut()
    auth.logout()
  }

  function showModal() {
    modalRef.current.showModal()
  }

  function closeModal() {
    modalRef.current.close()
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
      <LoginForm cancel={closeModal} login={loginAndCloseModal} signup={signupAndCloseModal}/>
    </Modal>
    </>
  )
}