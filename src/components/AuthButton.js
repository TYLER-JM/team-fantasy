import { AuthContext } from "@/context/AuthContext"
import { useContext, useRef } from "react"
import LoginForm from "./auth/LoginForm"
import Modal from "./Modal"

export default function AuthButton() {
  const auth = useContext(AuthContext)
  const modalRef = useRef(null)

  function loginAndCloseModal(value) {
    auth.login(value || 'ANON')
    closeModal()
  }
  function showModal() {
    modalRef.current.showModal()
  }
  function closeModal() {
    modalRef.current.close()
  }
  
  return auth?.session?.user ? (
    <div>
      <span>Hi, {auth.session.user.name}</span>
      <button onClick={auth.logout}>Logout</button>
    </div>
  ) : (
    <>
    <button className="btn primary floating" onClick={showModal}>Login</button>
    <Modal modalRef={modalRef}>
      <LoginForm cancel={closeModal} login={loginAndCloseModal}/>
    </Modal>
    </>
  )
}